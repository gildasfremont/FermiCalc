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

        this.initialize();
    }

    initialize() {
        try {
            this.loadFromStorage();
            this.initializeEventListeners();
            this.initializeClearButton();
            this.initializeLanguageSelect();
            this.initializeOptions();
            this.render();
        } catch (error) {
            console.error('Initialization error:', error);
            this.handleError('initialization', error);
        }
    }

    initializeLanguageSelect() {
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.value = this.state.language;
            languageSelect.addEventListener('change', (event) => {
                this.updateState('language', event.target.value);
            });
        }
    }

    initializeOptions() {
        // Revenue options
        this.createOptionsForField('revenue', [
            { value: 1000, label: 'revenue-1000', description: 'revenue-1000-desc' },
            { value: 10000, label: 'revenue-10000', description: 'revenue-10000-desc' },
            { value: 100000, label: 'revenue-100000', description: 'revenue-100000-desc' },
            { value: 1000000, label: 'revenue-1000000', description: 'revenue-1000000-desc' }
        ]);

        // Customer Reach options
        this.createOptionsForField('customerReach', [
            { value: 0, label: 'reach-0', description: 'reach-0-desc' },
            { value: 30, label: 'reach-30', description: 'reach-30-desc' },
            { value: 70, label: 'reach-70', description: 'reach-70-desc' },
            { value: 100, label: 'reach-100', description: 'reach-100-desc' }
        ]);

        // Customer Care options
        this.createOptionsForField('customerCare', [
            { value: 0, label: 'care-0', description: 'care-0-desc' },
            { value: 1, label: 'care-1', description: 'care-1-desc' },
            { value: 10, label: 'care-10', description: 'care-10-desc' },
            { value: 100, label: 'care-100', description: 'care-100-desc' },
            { value: 1000, label: 'care-1000', description: 'care-1000-desc' }
        ]);

        // Insight options
        this.createOptionsForField('insight', [
            { value: 0, label: 'insight-0', description: 'insight-0-desc' },
            { value: 1, label: 'insight-1', description: 'insight-1-desc' },
            { value: 10, label: 'insight-10', description: 'insight-10-desc' },
            { value: 100, label: 'insight-100', description: 'insight-100-desc' },
            { value: 1000, label: 'insight-1000', description: 'insight-1000-desc' }
        ]);

        // Product Payoff options
        this.createOptionsForField('productPayoff', [
            { value: 0, label: 'payoff-0', description: 'payoff-0-desc' },
            { value: 1, label: 'payoff-1', description: 'payoff-1-desc' },
            { value: 10, label: 'payoff-10', description: 'payoff-10-desc' },
            { value: 100, label: 'payoff-100', description: 'payoff-100-desc' },
            { value: 1000, label: 'payoff-1000', description: 'payoff-1000-desc' }
        ]);

        // Effort options
        this.createOptionsForField('effort', [
            { value: 2, label: 'effort-2d', description: 'effort-2d-desc' },
            { value: 10, label: 'effort-2w', description: 'effort-2w-desc' },
            { value: 60, label: 'effort-2m', description: 'effort-2m-desc' }
        ]);

        // Team Excitement options
        this.createOptionsForField('teamExcitement', [
            { value: 0, label: 'excitement-0', description: 'excitement-0-desc' },
            { value: 1, label: 'excitement-1', description: 'excitement-1-desc' },
            { value: 10, label: 'excitement-10', description: 'excitement-10-desc' },
            { value: 100, label: 'excitement-100', description: 'excitement-100-desc' }
        ]);

        // Confidence options
        this.createOptionsForField('confidence', [
            { value: 0, label: 'confidence-0', description: 'confidence-0-desc' },
            { value: 1, label: 'confidence-1', description: 'confidence-1-desc' },
            { value: 10, label: 'confidence-10', description: 'confidence-10-desc' },
            { value: 100, label: 'confidence-100', description: 'confidence-100-desc' }
        ]);
    }

    createOptionsForField(field, options) {
        const container = document.getElementById(`${field}Options`);
        if (!container) {
            console.error(`Container for ${field} not found`);
            return;
        }

        container.innerHTML = '';
        options.forEach(option => {
            const card = document.createElement('div');
            card.className = 'option-card';
            if (this.state[field] === option.value) {
                card.classList.add('selected');
            }

            card.innerHTML = `
                <div class="option-label fw-bold">${this.translate(option.label)}</div>
                <div class="option-description small text-gray-300">${this.translate(option.description)}</div>
            `;

            card.addEventListener('click', () => {
                this.updateState(field, option.value);
                this.scrollToNextQuestion(field);
            });

            container.appendChild(card);
        });
    }

    // ... rest of the class implementation remains the same ...
    [Previous implementation of other methods]
}

// Initialize calculator only after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    window.calculator = new FermiCalculator();
});
