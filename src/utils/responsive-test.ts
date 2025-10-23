/**
 * Responsive Design Test Utility
 * Tests theme functionality across different viewport sizes and devices
 */

export interface ViewportSize {
  width: number;
  height: number;
  name: string;
  type: 'mobile' | 'tablet' | 'desktop' | 'large-desktop';
}

export interface ResponsiveTestResult {
  viewport: ViewportSize;
  themeToggleVisible: boolean;
  themeToggleAccessible: boolean;
  navigationFunctional: boolean;
  layoutBreakpoints: {
    navigation: boolean;
    content: boolean;
    footer: boolean;
  };
  issues: string[];
}

export const VIEWPORT_SIZES: ViewportSize[] = [
  // Mobile devices
  { width: 320, height: 568, name: 'iPhone SE', type: 'mobile' },
  { width: 375, height: 667, name: 'iPhone 8', type: 'mobile' },
  { width: 414, height: 896, name: 'iPhone 11', type: 'mobile' },
  
  // Tablet devices
  { width: 768, height: 1024, name: 'iPad', type: 'tablet' },
  { width: 820, height: 1180, name: 'iPad Air', type: 'tablet' },
  
  // Desktop devices
  { width: 1024, height: 768, name: 'Small Desktop', type: 'desktop' },
  { width: 1366, height: 768, name: 'Standard Desktop', type: 'desktop' },
  { width: 1440, height: 900, name: 'MacBook Pro', type: 'desktop' },
  
  // Large desktop devices
  { width: 1920, height: 1080, name: 'Full HD', type: 'large-desktop' },
  { width: 2560, height: 1440, name: '2K Display', type: 'large-desktop' },
];

/**
 * Check if element is visible and accessible in current viewport
 */
function checkElementVisibility(selector: string): boolean {
  const element = document.querySelector(selector);
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const style = window.getComputedStyle(element);
  
  return (
    rect.width > 0 &&
    rect.height > 0 &&
    style.display !== 'none' &&
    style.visibility !== 'hidden' &&
    style.opacity !== '0'
  );
}

/**
 * Check if element is properly positioned and accessible
 */
function checkElementAccessibility(selector: string): {
  visible: boolean;
  accessible: boolean;
  hasTabIndex: boolean;
  hasAriaLabel: boolean;
} {
  const element = document.querySelector(selector) as HTMLElement;
  if (!element) {
    return { visible: false, accessible: false, hasTabIndex: false, hasAriaLabel: false };
  }
  
  const visible = checkElementVisibility(selector);
  const hasTabIndex = element.tabIndex >= 0;
  const hasAriaLabel = element.hasAttribute('aria-label') || element.hasAttribute('aria-labelledby');
  const accessible = visible && (hasTabIndex || element.tagName === 'BUTTON' || element.tagName === 'A');
  
  return { visible, accessible, hasTabIndex, hasAriaLabel };
}

/**
 * Test navigation functionality for current viewport
 */
function testNavigation(viewport: ViewportSize): {
  functional: boolean;
  mobileMenuWorking: boolean;
  desktopMenuWorking: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  
  // Check if navigation exists
  const nav = document.querySelector('nav');
  if (!nav) {
    issues.push('Navigation element not found');
    return { functional: false, mobileMenuWorking: false, desktopMenuWorking: false, issues };
  }
  
  // Test mobile navigation (for mobile and tablet viewports)
  let mobileMenuWorking = true;
  if (viewport.type === 'mobile' || viewport.type === 'tablet') {
    const menuButton = document.querySelector('button[aria-label*="menu"], button[aria-label*="Buka"], button[aria-label*="Tutup"]');
    if (!menuButton) {
      issues.push('Mobile menu button not found');
      mobileMenuWorking = false;
    } else {
      const menuVisible = checkElementVisibility('button[aria-label*="menu"], button[aria-label*="Buka"]');
      if (!menuVisible) {
        issues.push('Mobile menu button not visible');
        mobileMenuWorking = false;
      }
    }
  }
  
  // Test desktop navigation (for desktop viewports)
  let desktopMenuWorking = true;
  if (viewport.type === 'desktop' || viewport.type === 'large-desktop') {
    const desktopMenu = document.querySelector('nav ul');
    if (!desktopMenu) {
      issues.push('Desktop navigation menu not found');
      desktopMenuWorking = false;
    } else {
      const menuVisible = checkElementVisibility('nav ul');
      if (!menuVisible) {
        issues.push('Desktop navigation menu not visible');
        desktopMenuWorking = false;
      }
    }
  }
  
  const functional = mobileMenuWorking && desktopMenuWorking;
  
  return { functional, mobileMenuWorking, desktopMenuWorking, issues };
}

/**
 * Test layout breakpoints for current viewport
 */
function testLayoutBreakpoints(): {
  navigation: boolean;
  content: boolean;
  footer: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  
  // Test navigation layout
  const nav = document.querySelector('nav');
  const navWorking = nav && checkElementVisibility('nav');
  if (!navWorking) {
    issues.push('Navigation not properly displayed');
  }
  
  // Test main content layout
  const main = document.querySelector('main');
  const mainWorking = main && checkElementVisibility('main');
  if (!mainWorking) {
    issues.push('Main content not properly displayed');
  }
  
  // Test footer layout
  const footer = document.querySelector('footer');
  const footerWorking = footer && checkElementVisibility('footer');
  if (!footerWorking) {
    issues.push('Footer not properly displayed');
  }
  
  return {
    navigation: !!navWorking,
    content: !!mainWorking,
    footer: !!footerWorking,
    issues,
  };
}

/**
 * Run responsive test for a specific viewport
 */
export function testViewport(viewport: ViewportSize): ResponsiveTestResult {
  const issues: string[] = [];
  
  // Test theme toggle visibility and accessibility
  const themeToggle = checkElementAccessibility('[aria-label*="theme"], [aria-label*="mode"]');
  const themeToggleVisible = themeToggle.visible;
  const themeToggleAccessible = themeToggle.accessible;
  
  if (!themeToggleVisible) {
    issues.push('Theme toggle not visible');
  }
  if (!themeToggleAccessible) {
    issues.push('Theme toggle not accessible');
  }
  if (!themeToggle.hasAriaLabel) {
    issues.push('Theme toggle missing aria-label');
  }
  
  // Test navigation functionality
  const navigationTest = testNavigation(viewport);
  issues.push(...navigationTest.issues);
  
  // Test layout breakpoints
  const layoutTest = testLayoutBreakpoints();
  issues.push(...layoutTest.issues);
  
  return {
    viewport,
    themeToggleVisible,
    themeToggleAccessible,
    navigationFunctional: navigationTest.functional,
    layoutBreakpoints: layoutTest,
    issues,
  };
}

/**
 * Run comprehensive responsive tests for all viewport sizes
 */
export function runResponsiveTests(): {
  results: ResponsiveTestResult[];
  summary: {
    allViewportsPass: boolean;
    totalIssues: number;
    criticalIssues: string[];
    recommendations: string[];
  };
} {
  const results: ResponsiveTestResult[] = [];
  
  // Test each viewport size
  VIEWPORT_SIZES.forEach(viewport => {
    // In a real implementation, you would resize the viewport here
    // For this example, we'll simulate the test
    const result = testViewport(viewport);
    results.push(result);
  });
  
  const allIssues = results.flatMap(result => result.issues);
  const criticalIssues = allIssues.filter(issue => 
    issue.includes('not found') || issue.includes('not visible')
  );
  
  const recommendations = [
    ...criticalIssues.length > 0 ? ['Fix critical layout issues before production'] : [],
    'Test theme toggle functionality on actual devices',
    'Verify touch targets are at least 44x44px on mobile',
    'Test swipe gestures for mobile menu',
    'Verify text readability across all viewport sizes',
    'Test horizontal scrolling issues on small screens',
  ];
  
  return {
    results,
    summary: {
      allViewportsPass: results.every(result => result.issues.length === 0),
      totalIssues: allIssues.length,
      criticalIssues,
      recommendations,
    },
  };
}

/**
 * Test touch accessibility for mobile devices
 */
export function testTouchAccessibility(): {
  touchTargetsValid: boolean;
  issues: string[];
  recommendations: string[];
} {
  const issues: string[] = [];
  const recommendations: string[] = [];
  
  // Check touch target sizes (minimum 44x44px per WCAG)
  const interactiveElements = document.querySelectorAll('button, a, input, [role="button"]');
  
  interactiveElements.forEach((element, index) => {
    const rect = element.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    if (width < 44 || height < 44) {
      issues.push(`Element ${index + 1} has insufficient touch target size (${width}x${height}px)`);
    }
  });
  
  // Check spacing between touch targets
  const touchElements = Array.from(document.querySelectorAll('button, a, input, [role="button"]'));
  for (let i = 0; i < touchElements.length - 1; i++) {
    const rect1 = touchElements[i].getBoundingClientRect();
    const rect2 = touchElements[i + 1].getBoundingClientRect();
    
    const horizontalSpacing = Math.abs(rect1.left - rect2.left);
    const verticalSpacing = Math.abs(rect1.top - rect2.top);
    
    if (horizontalSpacing < 8 && verticalSpacing < 8) {
      issues.push(`Touch targets ${i + 1} and ${i + 2} are too close together`);
    }
  }
  
  if (issues.length > 0) {
    recommendations.push('Increase touch target sizes to at least 44x44px');
    recommendations.push('Add more spacing between touch targets');
  }
  
  recommendations.push('Test with actual touch devices');
  recommendations.push('Verify haptic feedback for theme toggle');
  
  return {
    touchTargetsValid: issues.length === 0,
    issues,
    recommendations,
  };
}

/**
 * Simulate viewport resize for testing (development utility)
 */
export function simulateViewportResize(width: number, height: number): void {
  // This would typically be used in a testing environment
  // In a real browser, you'd use window.resizeTo() or a testing framework
  if (typeof window !== 'undefined') {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: height,
    });
    
    // Dispatch resize event
    window.dispatchEvent(new Event('resize'));
  }
}