class FermiCalculator {
    // The entire FermiCalculator class implementation remains unchanged
    // ... (copying the complete implementation)
}

// Initialize calculator only after translations are loaded
document.addEventListener('DOMContentLoaded', () => {
    // Function to initialize calculator
    const initializeCalculator = () => {
        if (!window.translations) {
            console.error('Translations not loaded. Make sure translations.js is loaded before app.js');
            return;
        }
        window.calculator = new FermiCalculator();
        window.calculator.initialize();
    };

    // Check if translations are already loaded
    if (window.translations) {
        initializeCalculator();
    } else {
        // Listen for translations loaded event
        window.addEventListener('translationsLoaded', initializeCalculator);
    }
});
