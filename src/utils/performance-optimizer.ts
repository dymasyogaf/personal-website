/**
 * Performance Optimization Utilities
 * Berisi fungsi-fungsi untuk optimasi performa website
 */

// Debounce function untuk优化 scroll events
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function untuk优化 resize events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Preload critical resources
export function preloadCriticalResources() {
  const criticalResources = [
    { href: '/image/logo/berdu.jpeg', as: 'image' },
    { href: '/image/homepage/website-portfolio-personal.png', as: 'image' },
    { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', as: 'style' },
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.as === 'image') {
      link.setAttribute('fetchpriority', 'high');
    }
    document.head.appendChild(link);
  });
}

// Optimized intersection observer untuk lazy loading
export function createOptimizedObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
}

// Measure Core Web Vitals
export function measureWebVitals() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }
}

// Optimized image loading dengan progressive enhancement
export function optimizedImageLoad(img: HTMLImageElement, src: string) {
  const tempImg = new Image();
  tempImg.onload = () => {
    img.src = src;
    img.classList.add('loaded');
  };
  tempImg.src = src;
}

// Memory management untuk components
export function cleanupResources() {
  // Cleanup event listeners
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', () => {});
    window.removeEventListener('resize', () => {});
  }
}

// Detect device capabilities untuk adaptive loading
export function getDeviceCapabilities() {
  if (typeof window === 'undefined') return { isSlowConnection: false, isLowEndDevice: false };

  const connection = (navigator as any).connection || 
                    (navigator as any).mozConnection || 
                    (navigator as any).webkitConnection;

  const isSlowConnection = connection ? 
    (connection.effectiveType === 'slow-2g' || 
     connection.effectiveType === '2g' || 
     connection.effectiveType === '3g') : false;

  const isLowEndDevice = navigator.hardwareConcurrency && 
    navigator.hardwareConcurrency <= 2;

  return { isSlowConnection, isLowEndDevice };
}

// Adaptive loading berdasarkan device capabilities
export function shouldUseReducedMotion() {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches || 
         getDeviceCapabilities().isLowEndDevice;
}

// Optimized animation frame
export function optimizedAnimationFrame(callback: FrameRequestCallback) {
  if (shouldUseReducedMotion()) {
    callback(0);
    return;
  }
  
  requestAnimationFrame(callback);
}

// Critical CSS injection untuk above-the-fold content
export function injectCriticalCSS(css: string) {
  if (typeof document === 'undefined') return;
  
  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  document.head.appendChild(style);
}

// Resource timing analysis
export function analyzeResourceTiming() {
  if (typeof window === 'undefined' || !window.performance) return;

  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  const analysis = resources.map(resource => ({
    name: resource.name,
    duration: resource.duration,
    size: resource.transferSize,
    type: resource.initiatorType
  }));

  console.table(analysis);
  return analysis;
}