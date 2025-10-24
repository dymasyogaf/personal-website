'use client';

import { useState, useEffect } from 'react';
import NavbarPerformanceTester from '@/utils/navbar-performance-test';

export default function NavbarPerformanceTest() {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);

  const runTest = async () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setShowResults(false);
    
    const tester = new NavbarPerformanceTester();
    
    try {
      const testResults = await tester.runFullTest();
      setResults(testResults);
      setShowResults(true);
    } catch (error) {
      console.error('Error running performance test:', error);
    } finally {
      setIsRunning(false);
    }
  };

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Navbar Performance Test
        </h3>
        <button
          onClick={runTest}
          disabled={isRunning}
          className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
            isRunning
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {isRunning ? 'Testing...' : 'Run Test'}
        </button>
      </div>
      
      {showResults && results && (
        <div className="mt-3 space-y-2 text-xs">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
              <div className="font-medium text-gray-700 dark:text-gray-300">Menu Open</div>
              <div className="text-gray-900 dark:text-white">{results.menuOpenTime.toFixed(2)}ms</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
              <div className="font-medium text-gray-700 dark:text-gray-300">Menu Close</div>
              <div className="text-gray-900 dark:text-white">{results.menuCloseTime.toFixed(2)}ms</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
              <div className="font-medium text-gray-700 dark:text-gray-300">Theme Change</div>
              <div className="text-gray-900 dark:text-white">{results.themeChangeTime.toFixed(2)}ms</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
              <div className="font-medium text-gray-700 dark:text-gray-300">Scroll FPS</div>
              <div className="text-gray-900 dark:text-white">{results.scrollFPS}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
              <div className="font-medium text-gray-700 dark:text-gray-300">Layout Shifts</div>
              <div className="text-gray-900 dark:text-white">{results.layoutShifts.toFixed(4)}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
              <div className="font-medium text-gray-700 dark:text-gray-300">Memory</div>
              <div className="text-gray-900 dark:text-white">{results.memoryUsage.toFixed(2)}MB</div>
            </div>
          </div>
          
          <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
            <div className="text-xs text-gray-600 dark:text-gray-400">
              <div className="mb-1">Performance Score:</div>
              <div className="flex items-center">
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full"
                    style={{ 
                      width: `${Math.min(100, Math.max(0, 
                        (results.menuOpenTime < 100 ? 20 : 0) +
                        (results.menuCloseTime < 100 ? 20 : 0) +
                        (results.themeChangeTime < 200 ? 20 : 0) +
                        (results.scrollFPS > 50 ? 20 : 0) +
                        (results.layoutShifts < 0.1 ? 20 : 0)
                      ))}%` 
                    }}
                  />
                </div>
                <span className="text-xs font-medium">
                  {Math.min(100, Math.max(0, 
                    (results.menuOpenTime < 100 ? 20 : 0) +
                    (results.menuCloseTime < 100 ? 20 : 0) +
                    (results.themeChangeTime < 200 ? 20 : 0) +
                    (results.scrollFPS > 50 ? 20 : 0) +
                    (results.layoutShifts < 0.1 ? 20 : 0)
                  ))}%
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}