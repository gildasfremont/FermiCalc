class FermiCalculator {
    constructor() {
        // Initialize state
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

        // Initialize options and clear button
        this.initializeOptions();
        this.initializeClearButton();
        this.initialize();
    }

    initialize() {
        try {
            this.loadFromStorage();
            this.initializeEventListeners();
            this.render();
        } catch (error) {
            console.error('Initialization error:', error);
            this.handleError('initialization', error);
        }
    }

    // ... [previous methods remain unchanged until scrollToNextQuestion] ...

    scrollToNextQuestion(field) {
        const nextField = this.findNextQuestion(field);
        if (nextField) {
            const optionsContainer = document.getElementById(`${nextField}Options`);
            if (optionsContainer) {
                const container = optionsContainer.closest('.fermi-question');
                if (container) {
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const containerTop = container.getBoundingClientRect().top + window.pageYOffset;
                    
                    window.scrollTo({
                        top: containerTop - navbarHeight - 20,
                        behavior: 'smooth'
                    });
                }
            }
        } else {
            // If no next question, scroll to analysis
            const analysisContent = document.getElementById('analysis-content');
            if (analysisContent) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const analysisTop = analysisContent.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: analysisTop - navbarHeight - 20,
                    behavior: 'smooth'
                });
            }
        }
    }

    scrollToQuestion(field) {
        const optionsContainer = document.getElementById(`${field}Options`);
        if (optionsContainer) {
            const container = optionsContainer.closest('.fermi-question');
            if (container) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const containerTop = container.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: containerTop - navbarHeight - 20,
                    behavior: 'smooth'
                });
            }
        }
    }

    // ... [rest of the code remains unchanged] ...

    clearAllSelections() {
        // Reset state to initial values
        this.state = {
            revenue: undefined,
            customerReach: undefined,
            customerCare: undefined,
            insight: undefined,
            productPayoff: undefined,
            effort: undefined,
            teamExcitement: undefined,
            confidence: undefined,
            language: this.state.language // Preserve language setting
        };

        // Save cleared state and re-render
        this.saveToStorage();
        this.render();

        // Add a small delay before scrolling to top
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 100);
    }

    // ... [include all other methods unchanged] ...
}

// Initialize calculator when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.calculator = new FermiCalculator();
});
