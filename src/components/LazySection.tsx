'use client';

import { useEffect, useState, useRef, ReactNode } from 'react';

interface LazySectionProps {
    children: ReactNode;
    className?: string;
    rootMargin?: string;
    threshold?: number;
    fallback?: ReactNode;
}

export default function LazySection({
    children,
    className = '',
    rootMargin = '50px',
    threshold = 0.1,
    fallback = null,
}: LazySectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasIntersected) {
                    setIsVisible(true);
                    setHasIntersected(true);
                }
            },
            {
                rootMargin,
                threshold,
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [rootMargin, threshold, hasIntersected]);

    return (
        <div ref={ref} className={className}>
            {isVisible ? children : fallback}
        </div>
    );
}