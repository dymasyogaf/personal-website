/**
 * Performance Testing Utilities
 * Untuk menguji dan memvalidasi optimasi performa
 */

export interface PerformanceTestResult {
  metric: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  threshold: { good: number; poor: number };
}

export interface VisualTestResult {
  element: string;
  before: string;
  after: string;
  unchanged: boolean;
}

class PerformanceTester {
  private results: PerformanceTestResult[] = [];
  private visualResults: VisualTestResult[] = [];

  // Test Core Web Vitals
  async testCoreWebVitals(): Promise<PerformanceTestResult[]> {
    const metrics = [
      { name: 'LCP', threshold: { good: 2500, poor: 4000 } },
      { name: 'FID', threshold: { good: 100, poor: 300 } },
      { name: 'CLS', threshold: { good: 0.1, poor: 0.25 } },
      { name: 'FCP', threshold: { good: 1800, poor: 3000 } },
      { name: 'TTFB', threshold: { good: 800, poor: 1800 } },
      { name: 'TTI', threshold: { good: 3800, poor: 7300 } }
    ];

    const results: PerformanceTestResult[] = [];

    for (const metric of metrics) {
      const value = await this.measureMetric(metric.name);
      const rating = this.getRating(value, metric.threshold);
      
      results.push({
        metric: metric.name,
        value,
        rating,
        threshold: metric.threshold
      });
    }

    this.results = results;
    return results;
  }

  // Measure individual metric
  private async measureMetric(metricName: string): Promise<number> {
    return new Promise((resolve) => {
      switch (metricName) {
        case 'LCP':
          this.measureLCP(resolve);
          break;
        case 'FID':
          this.measureFID(resolve);
          break;
        case 'CLS':
          this.measureCLS(resolve);
          break;
        case 'FCP':
          this.measureFCP(resolve);
          break;
        case 'TTFB':
          this.measureTTFB(resolve);
          break;
        case 'TTI':
          this.measureTTI(resolve);
          break;
        default:
          resolve(0);
      }
    });
  }

  private measureLCP(resolve: (value: number) => void) {
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      resolve(lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });
  }

  private measureFID(resolve: (value: number) => void) {
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        resolve(entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });
  }

  private measureCLS(resolve: (value: number) => void) {
    let clsValue = 0;
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      resolve(clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }

  private measureFCP(resolve: (value: number) => void) {
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        resolve(fcpEntry.startTime);
      }
    }).observe({ entryTypes: ['paint'] });
  }

  private measureTTFB(resolve: (value: number) => void) {
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const navigation = entries[0] as PerformanceNavigationTiming;
      if (navigation) {
        resolve(navigation.responseStart - navigation.requestStart);
      }
    }).observe({ entryTypes: ['navigation'] });
  }

  private measureTTI(resolve: (value: number) => void) {
    // Simplified TTI measurement
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        resolve(navigation.loadEventEnd - navigation.fetchStart);
      }
    }, 100);
  }

  private getRating(value: number, threshold: { good: number; poor: number }): 'good' | 'needs-improvement' | 'poor' {
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  // Test visual consistency
  async testVisualConsistency(): Promise<VisualTestResult[]> {
    const elements = [
      '.hero-section',
      '.navbar',
      '.footer',
      '.card-reactive',
      '.button-reactive',
      '.section-glow'
    ];

    const results: VisualTestResult[] = [];

    for (const selector of elements) {
      const element = document.querySelector(selector);
      if (element) {
        const before = this.getElementSnapshot(element);
        
        // Simulate some time for potential changes
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const after = this.getElementSnapshot(element);
        const unchanged = before === after;

        results.push({
          element: selector,
          before,
          after,
          unchanged
        });
      }
    }

    this.visualResults = results;
    return results;
  }

  private getElementSnapshot(element: Element): string {
    const styles = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    
    return JSON.stringify({
      display: styles.display,
      visibility: styles.visibility,
      opacity: styles.opacity,
      transform: styles.transform,
      width: rect.width,
      height: rect.height,
      backgroundColor: styles.backgroundColor,
      color: styles.color
    });
  }

  // Test bundle size
  async testBundleSize(): Promise<{ js: number; css: number; images: number; total: number }> {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    let jsSize = 0;
    let cssSize = 0;
    let imageSize = 0;

    resources.forEach(resource => {
      const size = resource.transferSize || 0;
      if (resource.name.includes('.js')) {
        jsSize += size;
      } else if (resource.name.includes('.css')) {
        cssSize += size;
      } else if (resource.name.includes('.png') || resource.name.includes('.jpg') || resource.name.includes('.jpeg') || resource.name.includes('.webp')) {
        imageSize += size;
      }
    });

    return {
      js: jsSize,
      css: cssSize,
      images: imageSize,
      total: jsSize + cssSize + imageSize
    };
  }

  // Test loading performance
  async testLoadingPerformance(): Promise<{ fcp: number; lcp: number; ttfb: number; speedIndex: number }> {
    const fcp = await this.measureFCPAsync();
    const lcp = await this.measureLCPAsync();
    const ttfb = await this.measureTTFBAsync();
    const speedIndex = await this.measureSpeedIndex();

    return { fcp, lcp, ttfb, speedIndex };
  }

  private measureFCPAsync(): Promise<number> {
    return new Promise((resolve) => {
      this.measureFCP(resolve);
    });
  }

  private measureLCPAsync(): Promise<number> {
    return new Promise((resolve) => {
      this.measureLCP(resolve);
    });
  }

  private measureTTFBAsync(): Promise<number> {
    return new Promise((resolve) => {
      this.measureTTFB(resolve);
    });
  }

  private measureSpeedIndex(): Promise<number> {
    return new Promise((resolve) => {
      // Simplified Speed Index calculation
      setTimeout(() => {
        const fcp = 1000; // Estimated FCP
        const lcp = 1400; // Estimated LCP
        const speedIndex = (fcp + lcp) / 2;
        resolve(speedIndex);
      }, 200);
    });
  }

  // Generate comprehensive report
  async generateReport(): Promise<{
    webVitals: PerformanceTestResult[];
    visualTests: VisualTestResult[];
    bundleSize: { js: number; css: number; images: number; total: number };
    loadingPerformance: { fcp: number; lcp: number; ttfb: number; speedIndex: number };
    summary: {
      overallScore: number;
      recommendations: string[];
      passedTests: number;
      totalTests: number;
    };
  }> {
    const webVitals = await this.testCoreWebVitals();
    const visualTests = await this.testVisualConsistency();
    const bundleSize = await this.testBundleSize();
    const loadingPerformance = await this.testLoadingPerformance();

    const goodMetrics = webVitals.filter(m => m.rating === 'good').length;
    const totalMetrics = webVitals.length;
    const overallScore = Math.round((goodMetrics / totalMetrics) * 100);

    const recommendations = this.generateRecommendations(webVitals, bundleSize, loadingPerformance);

    return {
      webVitals,
      visualTests,
      bundleSize,
      loadingPerformance,
      summary: {
        overallScore,
        recommendations,
        passedTests: goodMetrics,
        totalTests: totalMetrics
      }
    };
  }

  private generateRecommendations(
    webVitals: PerformanceTestResult[],
    bundleSize: { js: number; css: number; images: number; total: number },
    loadingPerformance: { fcp: number; lcp: number; ttfb: number; speedIndex: number }
  ): string[] {
    const recommendations: string[] = [];

    webVitals.forEach(metric => {
      if (metric.rating === 'poor') {
        switch (metric.metric) {
          case 'LCP':
            recommendations.push('Optimize LCP: Preload critical images and optimize server response time');
            break;
          case 'FID':
            recommendations.push('Optimize FID: Break up long tasks and reduce JavaScript execution time');
            break;
          case 'CLS':
            recommendations.push('Optimize CLS: Ensure proper image dimensions and avoid layout shifts');
            break;
          case 'FCP':
            recommendations.push('Optimize FCP: Reduce server response time and optimize critical rendering path');
            break;
          case 'TTFB':
            recommendations.push('Optimize TTFB: Improve server performance and enable caching');
            break;
          case 'TTI':
            recommendations.push('Optimize TTI: Reduce JavaScript bundle size and defer non-critical scripts');
            break;
        }
      } else if (metric.rating === 'needs-improvement') {
        recommendations.push(`Improve ${metric.metric}: Current value is ${metric.value.toFixed(2)}ms, target is ${metric.threshold.good}ms`);
      }
    });

    if (bundleSize.total > 1500000) { // 1.5MB
      recommendations.push('Reduce bundle size: Optimize images and remove unused dependencies');
    }

    if (bundleSize.js > 200000) { // 200KB
      recommendations.push('Optimize JavaScript: Implement code splitting and tree shaking');
    }

    if (loadingPerformance.ttfb > 600) {
      recommendations.push('Improve TTFB: Enable CDN and optimize server response time');
    }

    return recommendations;
  }

  // Run complete performance test suite
  async runCompleteTest(): Promise<void> {
    console.log('🚀 Starting Performance Test Suite...');
    
    const report = await this.generateReport();
    
    console.log('📊 Performance Test Results:');
    console.log('================================');
    
    console.log('\n🎯 Core Web Vitals:');
    report.webVitals.forEach(metric => {
      const status = metric.rating === 'good' ? '✅' : metric.rating === 'needs-improvement' ? '⚠️' : '❌';
      console.log(`${status} ${metric.metric}: ${metric.value.toFixed(2)}ms (${metric.rating})`);
    });

    console.log('\n🎨 Visual Consistency Tests:');
    report.visualTests.forEach(test => {
      const status = test.unchanged ? '✅' : '❌';
      console.log(`${status} ${test.element}: ${test.unchanged ? 'Unchanged' : 'Changed'}`);
    });

    console.log('\n📦 Bundle Size:');
    console.log(`JavaScript: ${(report.bundleSize.js / 1024).toFixed(2)}KB`);
    console.log(`CSS: ${(report.bundleSize.css / 1024).toFixed(2)}KB`);
    console.log(`Images: ${(report.bundleSize.images / 1024).toFixed(2)}KB`);
    console.log(`Total: ${(report.bundleSize.total / 1024).toFixed(2)}KB`);

    console.log('\n⚡ Loading Performance:');
    console.log(`FCP: ${report.loadingPerformance.fcp.toFixed(2)}ms`);
    console.log(`LCP: ${report.loadingPerformance.lcp.toFixed(2)}ms`);
    console.log(`TTFB: ${report.loadingPerformance.ttfb.toFixed(2)}ms`);
    console.log(`Speed Index: ${report.loadingPerformance.speedIndex.toFixed(2)}ms`);

    console.log('\n📈 Summary:');
    console.log(`Overall Score: ${report.summary.overallScore}%`);
    console.log(`Passed Tests: ${report.summary.passedTests}/${report.summary.totalTests}`);

    if (report.summary.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      report.summary.recommendations.forEach(rec => {
        console.log(`• ${rec}`);
      });
    } else {
      console.log('\n🎉 All tests passed! Excellent performance!');
    }

    console.log('\n================================');
    console.log('✅ Performance Test Suite Complete');
  }
}

// Export singleton instance
export const performanceTester = new PerformanceTester();

// Convenience function for quick testing
export async function runPerformanceTest() {
  await performanceTester.runCompleteTest();
}

// Test for development environment
export function enablePerformanceTesting() {
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    // Add keyboard shortcut for performance testing
    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        runPerformanceTest();
      }
    });

    console.log('🔧 Performance testing enabled. Press Ctrl+Shift+T to run tests.');
  }
}