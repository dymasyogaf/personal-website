/**
 * Navbar Performance Testing Utility
 * Untuk mengukur performa navbar sebelum dan sesudah optimasi
 */

export interface PerformanceMetrics {
    menuOpenTime: number;
    menuCloseTime: number;
    themeChangeTime: number;
    scrollFPS: number;
    layoutShifts: number;
    memoryUsage: number;
}

class NavbarPerformanceTester {
    private metrics: PerformanceMetrics = {
        menuOpenTime: 0,
        menuCloseTime: 0,
        themeChangeTime: 0,
        scrollFPS: 0,
        layoutShifts: 0,
        memoryUsage: 0
    };

    private startTime: number = 0;
    private frameCount: number = 0;
    private lastFrameTime: number = 0;

    /**
     * Mengukur waktu buka/tutup menu mobile
     */
    measureMenuToggle(callback: () => void): Promise<number> {
        return new Promise((resolve) => {
            this.startTime = performance.now();
            callback();

            requestAnimationFrame(() => {
                const endTime = performance.now();
                const duration = endTime - this.startTime;
                resolve(duration);
            });
        });
    }

    /**
     * Mengukur waktu pergantian tema
     */
    measureThemeChange(callback: () => void): Promise<number> {
        return new Promise((resolve) => {
            this.startTime = performance.now();
            callback();

            // Tunggu hingga transisi selesai
            setTimeout(() => {
                const endTime = performance.now();
                const duration = endTime - this.startTime;
                resolve(duration);
            }, 300);
        });
    }

    /**
     * Mengukur FPS saat scroll
     */
    measureScrollFPS(duration: number = 2000): Promise<number> {
        return new Promise((resolve) => {
            this.frameCount = 0;
            this.lastFrameTime = performance.now();

            const countFrame = () => {
                this.frameCount++;
                const currentTime = performance.now();

                if (currentTime - this.lastFrameTime >= duration) {
                    const fps = Math.round((this.frameCount * 1000) / duration);
                    resolve(fps);
                    return;
                }

                requestAnimationFrame(countFrame);
            };

            requestAnimationFrame(countFrame);
        });
    }

    /**
     * Mengukur layout shifts
     */
    measureLayoutShifts(): Promise<number> {
        return new Promise((resolve) => {
            let layoutShifts = 0;

            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
                        layoutShifts += (entry as any).value;
                    }
                }
            });

            observer.observe({ entryTypes: ['layout-shift'] });

            // Stop observing after 2 seconds
            setTimeout(() => {
                observer.disconnect();
                resolve(layoutShifts);
            }, 2000);
        });
    }

    /**
     * Mengukur penggunaan memori
     */
    getMemoryUsage(): number {
        if ('memory' in performance) {
            return (performance as any).memory.usedJSHeapSize / 1048576; // MB
        }
        return 0;
    }

    /**
     * Menjalankan semua tes performa
     */
    async runFullTest(): Promise<PerformanceMetrics> {
        console.log('🧪 Mulai tes performa navbar...');

        // Tes menu toggle
        const menuButton = document.querySelector('[aria-label*="menu"]');
        if (menuButton) {
            console.log('📱 Mengukur performa buka/tutup menu...');
            this.metrics.menuOpenTime = await this.measureMenuToggle(() => {
                (menuButton as HTMLElement).click();
            });

            // Tutup menu
            const closeButton = document.querySelector('[aria-label="Tutup menu"]');
            if (closeButton) {
                this.metrics.menuCloseTime = await this.measureMenuToggle(() => {
                    (closeButton as HTMLElement).click();
                });
            }
        }

        // Tes pergantian tema
        const themeButton = document.querySelector('[aria-label*="Switch to"]');
        if (themeButton) {
            console.log('🌓 Mengukur performa pergantian tema...');
            this.metrics.themeChangeTime = await this.measureThemeChange(() => {
                (themeButton as HTMLElement).click();
            });
        }

        // Tes FPS saat scroll
        console.log('📊 Mengukur FPS saat scroll...');
        this.metrics.scrollFPS = await this.measureScrollFPS();

        // Tes layout shifts
        console.log('🔄 Mengukur layout shifts...');
        this.metrics.layoutShifts = await this.measureLayoutShifts();

        // Tes memori
        console.log('💾 Mengukur penggunaan memori...');
        this.metrics.memoryUsage = this.getMemoryUsage();

        console.log('✅ Tes performa selesai!');
        return this.metrics;
    }

    /**
     * Membandingkan hasil tes dengan baseline
     */
    compareWithBaseline(baseline: PerformanceMetrics): PerformanceComparison {
        return {
            menuOpenImprovement: ((baseline.menuOpenTime - this.metrics.menuOpenTime) / baseline.menuOpenTime) * 100,
            menuCloseImprovement: ((baseline.menuCloseTime - this.metrics.menuCloseTime) / baseline.menuCloseTime) * 100,
            themeChangeImprovement: ((baseline.themeChangeTime - this.metrics.themeChangeTime) / baseline.themeChangeTime) * 100,
            scrollFPSImprovement: ((this.metrics.scrollFPS - baseline.scrollFPS) / baseline.scrollFPS) * 100,
            layoutShiftReduction: ((baseline.layoutShifts - this.metrics.layoutShifts) / baseline.layoutShifts) * 100,
            memoryImprovement: ((baseline.memoryUsage - this.metrics.memoryUsage) / baseline.memoryUsage) * 100
        };
    }

    /**
     * Menampilkan hasil tes
     */
    displayResults(): void {
        console.table(this.metrics);
        console.log(`📱 Menu Open: ${this.metrics.menuOpenTime.toFixed(2)}ms`);
        console.log(`📱 Menu Close: ${this.metrics.menuCloseTime.toFixed(2)}ms`);
        console.log(`🌓 Theme Change: ${this.metrics.themeChangeTime.toFixed(2)}ms`);
        console.log(`📊 Scroll FPS: ${this.metrics.scrollFPS}`);
        console.log(`🔄 Layout Shifts: ${this.metrics.layoutShifts.toFixed(4)}`);
        console.log(`💾 Memory Usage: ${this.metrics.memoryUsage.toFixed(2)}MB`);
    }
}

interface PerformanceComparison {
    menuOpenImprovement: number;
    menuCloseImprovement: number;
    themeChangeImprovement: number;
    scrollFPSImprovement: number;
    layoutShiftReduction: number;
    memoryImprovement: number;
}

export default NavbarPerformanceTester;