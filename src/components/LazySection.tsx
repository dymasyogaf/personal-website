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
            {isVisible ? children : fallback}
        </div>
    );
}
