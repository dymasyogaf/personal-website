'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';

// Simple utility function for className merging
function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}

interface OptimizedImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    sizes?: string;
    fill?: boolean;
    quality?: number;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
}

export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    className,
    priority = false,
    sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    fill = false,
    quality = 75,
    placeholder = 'empty',
    blurDataURL,
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = useCallback(() => {
        setIsLoading(false);
    }, []);

    const handleError = useCallback(() => {
        setIsLoading(false);
        setHasError(true);
    }, []);

    if (hasError) {
        return (
            <div
                className={cn(
                    "flex items-center justify-center bg-gray-800/20 border border-gray-700/30 rounded-lg",
                    className
                )}
                style={fill ? { position: 'absolute', inset: 0 } : { width, height }}
            >
                <span className="text-gray-500 text-sm">Gambar tidak tersedia</span>
            </div>
        );
    }

    return (
        <div className={cn("relative", className)}>
            {isLoading && (
                <div
                    className="absolute inset-0 bg-gray-800/20 animate-pulse rounded-lg"
                    style={fill ? { position: 'absolute', inset: 0 } : { width, height }}
                />
            )}
            <Image
                src={src}
                alt={alt}
                width={fill ? undefined : width}
                height={fill ? undefined : height}
                fill={fill}
                quality={quality}
                priority={priority}
                sizes={sizes}
                loading={priority ? 'eager' : 'lazy'}
                placeholder={placeholder}
                blurDataURL={blurDataURL}
                onLoad={handleLoad}
                onError={handleError}
                className={cn(
                    "transition-opacity duration-300",
                    isLoading ? "opacity-0" : "opacity-100",
                    className
                )}
                style={{
                    objectFit: 'cover',
                    ...(!fill && { width, height })
                }}
            />
        </div>
    );
}