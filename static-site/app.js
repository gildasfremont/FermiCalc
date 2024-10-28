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

    // Rest of the FermiCalculator implementation stays exactly the same
}

// Initialize translations loading state
let translationsLoaded = false;

window.addEventListener('load', () => {
    // Check if translations are already loaded
    if (window.translations) {
        translationsLoaded = true;
    }
    
    // Add event listener for translations
    window.addEventListener('translationsLoaded', () => {
        translationsLoaded = true;
        initializeCalculator();
    });
    
    // Try to initialize after a short delay
    setTimeout(() => {
        if (translationsLoaded) {
            initializeCalculator();
        }
    }, 200);
});

function initializeCalculator() {
    try {
        window.calculator = new FermiCalculator();
        window.calculator.initialize();
    } catch (error) {
        console.error('Failed to initialize calculator:', error);
    }
}
