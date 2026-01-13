import { Report } from '../types';

const LOCAL_STORAGE_KEY = 'pmic_reports';

/**
 * Saves a report to LocalStorage for offline persistence.
 */
export const saveReport = async (report: Report): Promise<void> => {
    const existing = localStorage.getItem(LOCAL_STORAGE_KEY);
    const reports = existing ? JSON.parse(existing) : [];
    
    // Add new report to the beginning of the array
    const reportWithRealId = {
        ...report,
        id: report.id || Date.now().toString()
    };
    
    reports.unshift(reportWithRealId);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(reports));
    return Promise.resolve();
};

/**
 * Fetches reports from LocalStorage.
 */
export const getReports = async (): Promise<Report[]> => {
    const existing = localStorage.getItem(LOCAL_STORAGE_KEY);
    return existing ? JSON.parse(existing) : [];
};

/**
 * Helper to compress image string to keep LocalStorage usage efficient.
 */
export const compressImage = (base64Str: string, maxWidth = 800, quality = 0.7): Promise<string> => {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = base64Str;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;

            if (width > maxWidth) {
                height = Math.round((height * maxWidth) / width);
                width = maxWidth;
            }

            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            if(ctx) {
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL('image/jpeg', quality));
            } else {
                resolve(base64Str);
            }
        };
        img.onerror = () => resolve(base64Str);
    });
};
