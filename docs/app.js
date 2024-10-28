// Initialize translations object if it doesn't exist
window.translations = window.translations || {};

// Create a promise that resolves when translations are loaded
const translationsLoaded = new Promise((resolve, reject) => {
    // Check if translations are already loaded
    if (window.translations && Object.keys(window.translations).length > 0) {
        resolve();
    } else {
        // Set a timeout for translations loading
        const timeout = setTimeout(() => {
            reject(new Error('Translations loading timeout'));
        }, 5000);

        // Wait for translations to load
        window.addEventListener('translationsLoaded', () => {
            clearTimeout(timeout);
            resolve();
        });
    }
});

// Function to retry initialization
function retryInitialization(maxRetries = 3, currentRetry = 0) {
    Promise.all([
        translationsLoaded,
        new Promise(resolve => {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', resolve);
            } else {
                resolve();
            }
        })
    ]).then(() => {
        window.calculator = new FermiCalculator();
        window.calculator.initialize();
    }).catch(error => {
        console.error('Failed to initialize calculator:', error);
        if (currentRetry < maxRetries) {
            setTimeout(() => retryInitialization(maxRetries, currentRetry + 1), 1000);
        }
    });
}

// Start initialization with retries
retryInitialization();

class FermiCalculator {
    // Rest of the FermiCalculator class remains the same
    [Previous FermiCalculator class implementation...]
}
