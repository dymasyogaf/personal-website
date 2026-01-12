'use client';

import { useEffect, useState, useRef, ReactNode } from 'react';

interface LazySectionProps {
    children: ReactNode;
    className?: string;
    rootMargin?: string;
    threshold?: number;
    fallback?: ReactNode;
    minHeight?: string;
}

export default function LazySection({
    children,
    className = '',
    rootMargin = '300px 0px',
    threshold = 0,
    fallback = null,
    minHeight = '40vh',
}: LazySectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const hasIntersectedRef = useRef(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element || hasIntersectedRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    hasIntersectedRef.current = true;
                    observer.disconnect();
                }
            },
            {
                rootMargin,
                threshold,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [rootMargin, threshold]);

    return (
        <div ref={ref} className={className}>
            {isVisible
                ? children
                : (fallback ?? (
                    <div className="lazy-section-placeholder" style={{ minHeight }} aria-hidden="true" />
                ))}
        </div>
    );
}
