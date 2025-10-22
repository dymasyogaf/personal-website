/**
 * WCAG AA Accessibility Compliance Test
 * Tests color contrast ratios and accessibility features for both light and dark themes
 */

export interface ColorContrastResult {
  element: string;
  foreground: string;
  background: string;
  ratio: number;
  wcagAA: boolean;
  wcagAAA: boolean;
  wcagAALarge: boolean;
  wcagAAALarge: boolean;
}

export interface AccessibilityTestResult {
  theme: 'light' | 'dark';
  contrasts: ColorContrastResult[];
  overallCompliance: {
    wcagAA: boolean;
    wcagAAA: boolean;
    issues: string[];
  };
}

/**
 * Calculate relative luminance of a color
 */
function getLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;

  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Calculate contrast ratio between two colors
 */
function getContrastRatio(color1: string, color2: string): number {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Get computed color from CSS variable
 */
function getComputedColor(variableName: string, theme: 'light' | 'dark'): string {
  const themeColors = {
    light: {
      '--background': '#ffffff',
      '--foreground': '#1a202c',
      '--accent': '#6366f1',
      '--accent-light': '#818cf8',
      '--accent-dark': '#4f46e5',
      '--muted': '#64748b',
      '--muted-foreground': '#64748b',
      '--card': '#ffffff',
      '--card-foreground': '#1a202c',
      '--border': '#e2e8f0',
      '--input': '#e2e8f0',
      '--ring': '#6366f1',
      '--text-secondary': '#64748b',
      '--text-muted': '#94a3b8',
      '--nav-bg': 'rgba(255, 255, 255, 0.8)',
      '--nav-border': 'rgba(226, 232, 240, 0.8)',
      '--card-bg': 'rgba(255, 255, 255, 0.9)',
      '--card-border': 'rgba(226, 232, 240, 0.5)',
      '--overlay-bg': 'rgba(255, 255, 255, 0.95)',
    },
    dark: {
      '--background': '#060b18',
      '--foreground': '#f1f1f1',
      '--accent': '#6366f1',
      '--accent-light': '#818cf8',
      '--accent-dark': '#4f46e5',
      '--muted': '#64748b',
      '--muted-foreground': '#94a3b8',
      '--card': '#0f172a',
      '--card-foreground': '#f1f1f1',
      '--border': '#334155',
      '--input': '#1e293b',
      '--ring': '#6366f1',
      '--text-secondary': '#94a3b8',
      '--text-muted': '#64748b',
      '--nav-bg': 'rgba(11, 17, 32, 0.7)',
      '--nav-border': 'rgba(255, 255, 255, 0.1)',
      '--card-bg': 'rgba(20, 20, 35, 0.6)',
      '--card-border': 'rgba(255, 255, 255, 0.08)',
      '--overlay-bg': 'rgba(11, 17, 32, 0.95)',
    }
  };

  return themeColors[theme][variableName as keyof typeof themeColors.light] || '#000000';
}

/**
 * Test color contrast for common UI elements
 */
export function testColorContrasts(theme: 'light' | 'dark'): AccessibilityTestResult {
  const testCases = [
    // Main text on background
    { element: 'Main text', foreground: '--foreground', background: '--background' },
    // Secondary text on background
    { element: 'Secondary text', foreground: '--text-secondary', background: '--background' },
    // Muted text on background
    { element: 'Muted text', foreground: '--text-muted', background: '--background' },
    // Text on card
    { element: 'Card text', foreground: '--foreground', background: '--card' },
    // Secondary text on card
    { element: 'Card secondary text', foreground: '--text-secondary', background: '--card' },
    // Text on nav background
    { element: 'Nav text', foreground: '--foreground', background: '--nav-bg' },
    // Accent text on background
    { element: 'Accent text', foreground: '--accent', background: '--background' },
    // Muted text on card background
    { element: 'Card muted text', foreground: '--text-muted', background: '--card-bg' },
    // Text on overlay background
    { element: 'Overlay text', foreground: '--foreground', background: '--overlay-bg' },
  ];

  const contrasts: ColorContrastResult[] = testCases.map(testCase => {
    const foregroundColor = getComputedColor(testCase.foreground, theme);
    const backgroundColor = getComputedColor(testCase.background, theme);
    const ratio = getContrastRatio(foregroundColor, backgroundColor);

    return {
      element: testCase.element,
      foreground: foregroundColor,
      background: backgroundColor,
      ratio: Math.round(ratio * 100) / 100,
      wcagAA: ratio >= 4.5,
      wcagAAA: ratio >= 7,
      wcagAALarge: ratio >= 3,
      wcagAAALarge: ratio >= 4.5,
    };
  });

  const issues = contrasts
    .filter(contrast => !contrast.wcagAA)
    .map(contrast => `${contrast.element} has insufficient contrast (${contrast.ratio}:1)`);

  return {
    theme,
    contrasts,
    overallCompliance: {
      wcagAA: issues.length === 0,
      wcagAAA: contrasts.every(contrast => contrast.wcagAAA),
      issues,
    },
  };
}

/**
 * Run comprehensive accessibility tests for both themes
 */
export function runAccessibilityTests(): {
  light: AccessibilityTestResult;
  dark: AccessibilityTestResult;
  summary: {
    overallWCAGAA: boolean;
    overallWCAGAAA: boolean;
    recommendations: string[];
  };
} {
  const lightResults = testColorContrasts('light');
  const darkResults = testColorContrasts('dark');

  const allIssues = [...lightResults.overallCompliance.issues, ...darkResults.overallCompliance.issues];
  const recommendations = [
    ...allIssues.length > 0 ? [`Fix ${allIssues.length} contrast issue(s): ${allIssues.join(', ')}`] : [],
    'Ensure focus indicators are visible in both themes',
    'Test keyboard navigation for all interactive elements',
    'Verify screen reader compatibility with dynamic theme changes',
    'Test color blind accessibility with color blindness simulators',
  ];

  return {
    light: lightResults,
    dark: darkResults,
    summary: {
      overallWCAGAA: lightResults.overallCompliance.wcagAA && darkResults.overallCompliance.wcagAA,
      overallWCAGAAA: lightResults.overallCompliance.wcagAAA && darkResults.overallCompliance.wcagAAA,
      recommendations,
    },
  };
}

/**
 * Check if focus indicators are properly styled
 */
export function checkFocusIndicators(): { 
  hasFocusStyles: boolean; 
  recommendations: string[] 
} {
  const recommendations: string[] = [];
  
  // Check for common focus styles
  const hasFocusRing = document.querySelector('[class*="focus:ring"]') !== null;
  const hasFocusOutline = document.querySelector('[class*="focus:outline"]') !== null;
  
  if (!hasFocusRing && !hasFocusOutline) {
    recommendations.push('Add visible focus indicators for keyboard navigation');
  }
  
  return {
    hasFocusStyles: hasFocusRing || hasFocusOutline,
    recommendations,
  };
}

/**
 * Test keyboard navigation accessibility
 */
export function testKeyboardNavigation(): {
  keyboardAccessible: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  
  // Check if all interactive elements are focusable
  interactiveElements.forEach((element, index) => {
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.display === 'none' || computedStyle.visibility === 'hidden') {
      issues.push(`Element ${index + 1} is hidden but still focusable`);
    }
  });
  
  // Check for skip navigation link
  const skipLink = document.querySelector('a[href^="#main"], a[href^="#content"]');
  if (!skipLink) {
    issues.push('Consider adding a skip navigation link for keyboard users');
  }
  
  return {
    keyboardAccessible: issues.length === 0,
    issues,
  };
}