'use client';

import { useEffect, useState } from 'react';
import { measureWebVitals, analyzeResourceTiming } from '@/utils/performance-optimizer';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  resources?: { name: string; duration: number; size: number; type: string }[];
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or with a specific query param
    const isDev = process.env.NODE_ENV === 'development';
    const showPerf = typeof window !== 'undefined' && 
                    new URLSearchParams(window.location.search).has('perf');

    if (!isDev && !showPerf) return;

    // Measure Web Vitals
    const measureMetrics = () => {
      if (typeof window === 'undefined' || !window.performance) return;

      // First Contentful Paint
      const fcpEntries = performance.getEntriesByName('first-contentful-paint');
      const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : undefined;

      // Time to First Byte
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigation ? navigation.responseStart - navigation.requestStart : undefined;

      // Resource analysis
      const resources = analyzeResourceTiming();

      setMetrics(prev => ({
        ...prev,
        fcp,
        ttfb,
        resources
      }));

      measureWebVitals();
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      setTimeout(measureMetrics, 100);
    } else {
      window.addEventListener('load', () => {
        setTimeout(measureMetrics, 100);
      });
    }

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 p-2 bg-black/10 backdrop-blur-sm rounded-full text-xs opacity-50 hover:opacity-100 transition"
        style={{ color: 'var(--text-muted)' }}
      >
        📊
      </button>
    );
  }

  const getScoreColor = (score: number | undefined, good: number, poor: number) => {
    if (!score) return 'text-gray-500';
    if (score <= good) return 'text-green-500';
    if (score <= poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 max-h-96 overflow-auto bg-black/80 backdrop-blur-lg rounded-lg p-4 text-white font-mono text-xs"
         style={{ backgroundColor: 'var(--card-bg)', color: 'var(--foreground)' }}>
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-sm">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>

      <div className="space-y-2">
        {/* First Contentful Paint */}
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.fcp, 1800, 3000)}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '—'}
          </span>
        </div>

        {/* Time to First Byte */}
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, 800, 1800)}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : '—'}
          </span>
        </div>

        {/* Largest Contentful Paint */}
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, 2500, 4000)}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '—'}
          </span>
        </div>

        {/* First Input Delay */}
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(metrics.fid, 100, 300)}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : '—'}
          </span>
        </div>

        {/* Cumulative Layout Shift */}
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, 0.1, 0.25)}>
            {metrics.cls ? metrics.cls.toFixed(3) : '—'}
          </span>
        </div>

        {/* Resource Summary */}
        {metrics.resources && metrics.resources.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-700">
            <div className="font-bold mb-2">Resources ({metrics.resources.length})</div>
            <div className="space-y-1 max-h-32 overflow-auto">
              {metrics.resources.slice(0, 5).map((resource, i) => (
                <div key={i} className="text-xs opacity-75">
                  {resource.name.split('/').pop()} - {Math.round(resource.duration)}ms
                </div>
              ))}
              {metrics.resources.length > 5 && (
                <div className="text-xs opacity-50">
                  ... and {metrics.resources.length - 5} more
                </div>
              )}
            </div>
          </div>
        )}

        {/* Performance Tips */}
        <div className="mt-3 pt-3 border-t border-gray-700 text-xs">
          <div className="font-bold mb-1">💡 Tips:</div>
          <div className="opacity-75">
            Press Ctrl+Shift+P to toggle this panel
          </div>
        </div>
      </div>
    </div>
  );
}