// Moving content from static/js/app.js
// The entire FermiCalculator class implementation remains unchanged
class FermiCalculator {
    // ... rest of the implementation stays exactly the same
}

// Initialize calculator only after DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.calculator = new FermiCalculator();
        window.calculator.initialize();
    });
} else {
    window.calculator = new FermiCalculator();
    window.calculator.initialize();
}
