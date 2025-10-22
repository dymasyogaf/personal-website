/**
 * Comprehensive Theme Test Runner
 * Combines accessibility and responsive testing for the theme system
 */

import { runAccessibilityTests, checkFocusIndicators, testKeyboardNavigation } from './accessibility-test';
import { runResponsiveTests, testTouchAccessibility } from './responsive-test';

export interface TestReport {
  timestamp: string;
  themeSystem: {
    accessibility: {
      wcagCompliance: {
        light: boolean;
        dark: boolean;
        overall: boolean;
      };
      contrastResults: any;
      focusIndicators: boolean;
      keyboardNavigation: boolean;
      issues: string[];
    };
    responsive: {
      allViewportsPass: boolean;
      touchAccessibility: boolean;
      totalIssues: number;
      criticalIssues: string[];
    };
  };
  performance: {
    themeSwitchSpeed: number;
    localStoragePersistence: boolean;
    systemPreferenceDetection: boolean;
  };
  recommendations: string[];
  overallScore: number;
}

/**
 * Measure theme switching performance
 */
function measureThemeSwitchPerformance(): Promise<number> {
  return new Promise((resolve) => {
    const startTime = performance.now();
    
    // Trigger theme switch
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Wait for CSS transition to complete
    setTimeout(() => {
      const endTime = performance.now();
      const switchTime = endTime - startTime;
      
      // Switch back to original theme
      document.documentElement.setAttribute('data-theme', currentTheme || 'light');
      
      resolve(switchTime);
    }, 400); // Wait for CSS transition
  });
}

/**
 * Test localStorage persistence
 */
function testLocalStoragePersistence(): boolean {
  try {
    const testKey = 'theme-test';
    const testValue = 'test-theme';
    
    // Store test value
    localStorage.setItem(testKey, testValue);
    
    // Retrieve test value
    const retrievedValue = localStorage.getItem(testKey);
    
    // Clean up
    localStorage.removeItem(testKey);
    
    return retrievedValue === testValue;
  } catch (error) {
    return false;
  }
}

/**
 * Test system preference detection
 */
function testSystemPreferenceDetection(): boolean {
  try {
    // Check if matchMedia is available
    if (!window.matchMedia) return false;
    
    // Test prefers-color-scheme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check if the mediaQuery has the expected properties
    return typeof mediaQuery.matches === 'boolean' && typeof mediaQuery.addEventListener === 'function';
  } catch (error) {
    return false;
  }
}

/**
 * Calculate overall score based on test results
 */
function calculateOverallScore(report: Omit<TestReport, 'overallScore' | 'timestamp' | 'recommendations'>): number {
  let score = 0;
  const maxScore = 100;
  
  // Accessibility (40 points)
  if (report.themeSystem.accessibility.wcagCompliance.overall) score += 20;
  if (report.themeSystem.accessibility.focusIndicators) score += 10;
  if (report.themeSystem.accessibility.keyboardNavigation) score += 10;
  
  // Responsive (30 points)
  if (report.themeSystem.responsive.allViewportsPass) score += 15;
  if (report.themeSystem.responsive.touchAccessibility) score += 15;
  
  // Performance (30 points)
  if (report.performance.themeSwitchSpeed < 500) score += 15; // Fast theme switching
  if (report.performance.localStoragePersistence) score += 10;
  if (report.performance.systemPreferenceDetection) score += 5;
  
  return Math.min(score, maxScore);
}

/**
 * Generate recommendations based on test results
 */
function generateRecommendations(report: Omit<TestReport, 'recommendations' | 'timestamp' | 'overallScore'>): string[] {
  const recommendations: string[] = [];
  
  // Accessibility recommendations
  if (!report.themeSystem.accessibility.wcagCompliance.overall) {
    recommendations.push('Improve color contrast ratios to meet WCAG AA standards');
  }
  
  if (!report.themeSystem.accessibility.focusIndicators) {
    recommendations.push('Add visible focus indicators for keyboard navigation');
  }
  
  if (!report.themeSystem.accessibility.keyboardNavigation) {
    recommendations.push('Improve keyboard navigation accessibility');
  }
  
  // Responsive recommendations
  if (!report.themeSystem.responsive.allViewportsPass) {
    recommendations.push('Fix responsive layout issues across different viewport sizes');
  }
  
  if (!report.themeSystem.responsive.touchAccessibility) {
    recommendations.push('Improve touch target sizes and spacing for mobile devices');
  }
  
  // Performance recommendations
  if (report.performance.themeSwitchSpeed > 500) {
    recommendations.push('Optimize theme switching performance for smoother transitions');
  }
  
  if (!report.performance.localStoragePersistence) {
    recommendations.push('Ensure localStorage is available for theme persistence');
  }
  
  if (!report.performance.systemPreferenceDetection) {
    recommendations.push('Implement system preference detection for better user experience');
  }
  
  // General recommendations
  recommendations.push('Test theme functionality on actual devices and browsers');
  recommendations.push('Consider adding reduced motion support for accessibility');
  recommendations.push('Test with screen readers to ensure compatibility');
  
  return recommendations;
}

/**
 * Run comprehensive theme tests
 */
export async function runComprehensiveThemeTests(): Promise<TestReport> {
  console.log('🧪 Starting comprehensive theme tests...');
  
  // Run accessibility tests
  console.log('🔍 Running accessibility tests...');
  const accessibilityResults = runAccessibilityTests();
  const focusIndicators = checkFocusIndicators();
  const keyboardNavigation = testKeyboardNavigation();
  
  // Run responsive tests
  console.log('📱 Running responsive tests...');
  const responsiveResults = runResponsiveTests();
  const touchAccessibility = testTouchAccessibility();
  
  // Test performance
  console.log('⚡ Testing performance...');
  const themeSwitchSpeed = await measureThemeSwitchPerformance();
  const localStoragePersistence = testLocalStoragePersistence();
  const systemPreferenceDetection = testSystemPreferenceDetection();
  
  // Build report
  const reportWithoutScore: Omit<TestReport, 'overallScore' | 'timestamp' | 'recommendations'> = {
    themeSystem: {
      accessibility: {
        wcagCompliance: {
          light: accessibilityResults.light.overallCompliance.wcagAA,
          dark: accessibilityResults.dark.overallCompliance.wcagAA,
          overall: accessibilityResults.summary.overallWCAGAA,
        },
        contrastResults: {
          light: accessibilityResults.light.contrasts,
          dark: accessibilityResults.dark.contrasts,
        },
        focusIndicators: focusIndicators.hasFocusStyles,
        keyboardNavigation: keyboardNavigation.keyboardAccessible,
        issues: [
          ...accessibilityResults.light.overallCompliance.issues,
          ...accessibilityResults.dark.overallCompliance.issues,
          ...focusIndicators.recommendations,
          ...keyboardNavigation.issues,
        ],
      },
      responsive: {
        allViewportsPass: responsiveResults.summary.allViewportsPass,
        touchAccessibility: touchAccessibility.touchTargetsValid,
        totalIssues: responsiveResults.summary.totalIssues + touchAccessibility.issues.length,
        criticalIssues: responsiveResults.summary.criticalIssues,
      },
    },
    performance: {
      themeSwitchSpeed,
      localStoragePersistence,
      systemPreferenceDetection,
    },
  };
  
  const overallScore = calculateOverallScore(reportWithoutScore);
  const recommendations = generateRecommendations(reportWithoutScore);
  
  const fullReport: TestReport = {
    timestamp: new Date().toISOString(),
    ...reportWithoutScore,
    recommendations,
    overallScore,
  };
  
  console.log('✅ Theme tests completed!');
  console.log(`📊 Overall Score: ${overallScore}/100`);
  
  return fullReport;
}

/**
 * Display test results in a formatted way
 */
export function displayTestResults(report: TestReport): void {
  console.log('\n🎨 THEME SYSTEM TEST REPORT');
  console.log('='.repeat(50));
  console.log(`📅 Generated: ${new Date(report.timestamp).toLocaleString()}`);
  console.log(`📊 Overall Score: ${report.overallScore}/100`);
  
  console.log('\n♿ ACCESSIBILITY');
  console.log('-'.repeat(30));
  console.log(`WCAG AA Compliance: ${report.themeSystem.accessibility.wcagCompliance.overall ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`  Light Theme: ${report.themeSystem.accessibility.wcagCompliance.light ? '✅' : '❌'}`);
  console.log(`  Dark Theme: ${report.themeSystem.accessibility.wcagCompliance.dark ? '✅' : '❌'}`);
  console.log(`Focus Indicators: ${report.themeSystem.accessibility.focusIndicators ? '✅' : '❌'}`);
  console.log(`Keyboard Navigation: ${report.themeSystem.accessibility.keyboardNavigation ? '✅' : '❌'}`);
  
  if (report.themeSystem.accessibility.issues.length > 0) {
    console.log('\n⚠️  Accessibility Issues:');
    report.themeSystem.accessibility.issues.forEach(issue => console.log(`  • ${issue}`));
  }
  
  console.log('\n📱 RESPONSIVE DESIGN');
  console.log('-'.repeat(30));
  console.log(`All Viewports: ${report.themeSystem.responsive.allViewportsPass ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Touch Accessibility: ${report.themeSystem.responsive.touchAccessibility ? '✅' : '❌'}`);
  console.log(`Total Issues: ${report.themeSystem.responsive.totalIssues}`);
  
  if (report.themeSystem.responsive.criticalIssues.length > 0) {
    console.log('\n🚨 Critical Issues:');
    report.themeSystem.responsive.criticalIssues.forEach(issue => console.log(`  • ${issue}`));
  }
  
  console.log('\n⚡ PERFORMANCE');
  console.log('-'.repeat(30));
  console.log(`Theme Switch Speed: ${report.performance.themeSwitchSpeed.toFixed(2)}ms`);
  console.log(`Local Storage: ${report.performance.localStoragePersistence ? '✅' : '❌'}`);
  console.log(`System Preference: ${report.performance.systemPreferenceDetection ? '✅' : '❌'}`);
  
  console.log('\n💡 RECOMMENDATIONS');
  console.log('-'.repeat(30));
  report.recommendations.forEach((rec, index) => console.log(`${index + 1}. ${rec}`));
  
  console.log('\n' + '='.repeat(50));
}

/**
 * Export test results to JSON file (development utility)
 */
export function exportTestResults(report: TestReport): void {
  if (typeof window !== 'undefined') {
    const dataStr = JSON.stringify(report, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `theme-test-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(url);
  }
}