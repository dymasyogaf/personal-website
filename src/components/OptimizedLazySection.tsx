'use client';

import { useEffect, useState, useRef, ReactNode } from 'react';
import { createOptimizedObserver, getDeviceCapabilities, shouldUseReducedMotion } from '@/utils/performance-optimizer';

interface OptimizedLazySectionProps {
    children: ReactNode;
    className?: string;
    rootMargin?: string;
    threshold?: number;
    fallback?: ReactNode;
    priority?: boolean;
    minHeight?: string;
}

export default function OptimizedLazySection({
    children,
    className = '',
    rootMargin = '50px',
    threshold = 0.1,
    fallback = null,
    priority = false,
    minHeight = '200px',
}: OptimizedLazySectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Skip lazy loading for priority sections or slow connections
        const { isSlowConnection } = getDeviceCapabilities();
        if (priority || isSlowConnection) {
            setIsVisible(true);
            setHasIntersected(true);
            return;
        }

        // Create optimized observer
        const observer = createOptimizedObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasIntersected) {
                    setIsVisible(true);
                    setHasIntersected(true);
                    
                    // Disconnect after first intersection for performance
                    if (observerRef.current) {
                        observerRef.current.disconnect();
                    }
                }
            },
            {
                rootMargin,
                threshold,
            }
        );

        observerRef.current = observer;
        observer.observe(element);

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [rootMargin, threshold, hasIntersected, priority]);

    // Render fallback with skeleton loading
    const renderFallback = () => {
        if (fallback) return fallback;
        
        return (
            <div 
                className="animate-pulse rounded-lg"
                style={{ 
                    minHeight,
                    background: 'linear-gradient(90deg, var(--card-bg) 25%, var(--card-border) 50%, var(--card-bg) 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.5s infinite'
                }}
            />
        );
    };

    return (
        <div ref={ref} className={className}>
            {isVisible ? children : renderFallback()}
            <style jsx>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
            `}</style>
        </div>
    );
}

// Higher-order component for lazy loading with error boundaries
export function withLazyLoading<P extends object>(
    Component: React.ComponentType<P>,
    options?: Partial<OptimizedLazySectionProps>
) {
    return function LazyWrappedComponent(props: P) {
        return (
            <OptimizedLazySection {...options}>
                <Component {...props} />
            </OptimizedLazySection>
        );
    };
}

// Preload component for critical sections
export function PreloadSection({ 
    children, 
    className = '' 
}: { 
    children: ReactNode; 
    className?: string; 
}) {
    const [isPreloaded, setIsPreloaded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Preload immediately without intersection observer
        const timer = setTimeout(() => {
            setIsPreloaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div ref={ref} className={className}>
            {isPreloaded ? children : null}
        </div>
    );
}

// Adaptive lazy loading based on device capabilities
export function AdaptiveLazySection({
    children,
    className = '',
    ...props
}: OptimizedLazySectionProps) {
    const { isLowEndDevice, isSlowConnection } = getDeviceCapabilities();
    const useReducedMotion = shouldUseReducedMotion();

    // Adjust root margin based on device capabilities
    const adaptiveRootMargin = isLowEndDevice || isSlowConnection 
        ? '200px' 
        : props.rootMargin || '50px';

    // Lower threshold for low-end devices
    const adaptiveThreshold = isLowEndDevice 
        ? 0.05 
        : props.threshold || 0.1;

    return (
        <OptimizedLazySection
            {...props}
            className={`${useReducedMotion ? 'no-animations' : ''} ${className}`}
            rootMargin={adaptiveRootMargin}
            threshold={adaptiveThreshold}
        >
            {children}
        </OptimizedLazySection>
    );
}