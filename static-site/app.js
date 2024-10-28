// The complete FermiCalculator implementation
class FermiCalculator {
    constructor() {
        this.state = {
            revenue: undefined,
            customerReach: undefined,
            customerCare: undefined,
            insight: undefined,
            productPayoff: undefined,
            effort: undefined,
            teamExcitement: undefined,
            confidence: undefined,
            language: 'EN'
        };
    }

    // ... rest of the implementation stays exactly the same ...
}

// Wait for both DOM and translations to be loaded
window.addEventListener('load', () => {
    // Add a small delay to ensure translations are loaded
    setTimeout(() => {
        if (!window.translations) {
            console.error('Translations not loaded. Make sure translations.js is loaded before app.js');
            return;
        }
        
        try {
            window.calculator = new FermiCalculator();
            window.calculator.initialize();
        } catch (error) {
            console.error('Failed to initialize calculator:', error);
        }
    }, 100);
});
