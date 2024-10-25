class FermiCalculator {
    constructor() {
        // Initialize containers using closest() to find parent elements
        this.containers = {
            revenue: document.querySelector('#revenueOptions')?.closest('.fermi-question'),
            customerReach: document.querySelector('#customerReachOptions')?.closest('.fermi-question'),
            customerCare: document.querySelector('#customerCareOptions')?.closest('.fermi-question'),
            insight: document.querySelector('#insightOptions')?.closest('.fermi-question'),
            productPayoff: document.querySelector('#productPayoffOptions')?.closest('.fermi-question'),
            effort: document.querySelector('#effortOptions')?.closest('.fermi-question'),
            teamExcitement: document.querySelector('#teamExcitementOptions')?.closest('.fermi-question'),
            confidence: document.querySelector('#confidenceOptions')?.closest('.fermi-question')
        };

        this.state = {
            language: 'EN',
            revenue: null,
            customerReach: null,
            customerCare: null,
            insight: null,
            productPayoff: null,
            effort: null,
            teamExcitement: null,
            confidence: null
        };

        // Initialize options arrays
        this.revenueOptions = [
            { value: 1000, labelKey: 'revenue-1000', descriptionKey: 'revenue-1000-desc' },
            { value: 10000, labelKey: 'revenue-10000', descriptionKey: 'revenue-10000-desc' },
            { value: 100000, labelKey: 'revenue-100000', descriptionKey: 'revenue-100000-desc' },
            { value: 1000000, labelKey: 'revenue-1000000', descriptionKey: 'revenue-1000000-desc' }
        ];

        this.customerReachOptions = [
            { value: 0, labelKey: 'reach-0', descriptionKey: 'reach-0-desc' },
            { value: 30, labelKey: 'reach-30', descriptionKey: 'reach-30-desc' },
            { value: 70, labelKey: 'reach-70', descriptionKey: 'reach-70-desc' },
            { value: 100, labelKey: 'reach-100', descriptionKey: 'reach-100-desc' }
        ];

        this.customerCareOptions = [
            { value: 0, labelKey: 'care-0', descriptionKey: 'care-0-desc' },
            { value: 1, labelKey: 'care-1', descriptionKey: 'care-1-desc' },
            { value: 10, labelKey: 'care-10', descriptionKey: 'care-10-desc' },
            { value: 100, labelKey: 'care-100', descriptionKey: 'care-100-desc' },
            { value: 1000, labelKey: 'care-1000', descriptionKey: 'care-1000-desc' }
        ];

        this.insightOptions = [
            { value: 0, labelKey: 'insight-0', descriptionKey: 'insight-0-desc' },
            { value: 1, labelKey: 'insight-1', descriptionKey: 'insight-1-desc' },
            { value: 10, labelKey: 'insight-10', descriptionKey: 'insight-10-desc' },
            { value: 100, labelKey: 'insight-100', descriptionKey: 'insight-100-desc' },
            { value: 1000, labelKey: 'insight-1000', descriptionKey: 'insight-1000-desc' }
        ];

        this.productPayoffOptions = [
            { value: 0, labelKey: 'payoff-0', descriptionKey: 'payoff-0-desc' },
            { value: 1, labelKey: 'payoff-1', descriptionKey: 'payoff-1-desc' },
            { value: 10, labelKey: 'payoff-10', descriptionKey: 'payoff-10-desc' },
            { value: 100, labelKey: 'payoff-100', descriptionKey: 'payoff-100-desc' },
            { value: 1000, labelKey: 'payoff-1000', descriptionKey: 'payoff-1000-desc' }
        ];

        this.effortOptions = [
            { value: 2, labelKey: 'effort-2d', descriptionKey: 'effort-2d-desc' },
            { value: 10, labelKey: 'effort-2w', descriptionKey: 'effort-2w-desc' },
            { value: 45, labelKey: 'effort-2m', descriptionKey: 'effort-2m-desc' }
        ];

        this.teamExcitementOptions = [
            { value: 0, labelKey: 'excitement-0', descriptionKey: 'excitement-0-desc' },
            { value: 1, labelKey: 'excitement-1', descriptionKey: 'excitement-1-desc' },
            { value: 10, labelKey: 'excitement-10', descriptionKey: 'excitement-10-desc' },
            { value: 100, labelKey: 'excitement-100', descriptionKey: 'excitement-100-desc' }
        ];

        this.confidenceOptions = [
            { value: 0, labelKey: 'confidence-0', descriptionKey: 'confidence-0-desc' },
            { value: 1, labelKey: 'confidence-1', descriptionKey: 'confidence-1-desc' },
            { value: 10, labelKey: 'confidence-10', descriptionKey: 'confidence-10-desc' },
            { value: 100, labelKey: 'confidence-100', descriptionKey: 'confidence-100-desc' }
        ];

        // Bind methods
        this.initialize = this.initialize.bind(this);
        this.translate = this.translate.bind(this);
        this.renderOptionSelections = this.renderOptionSelections.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);
        this.getAnalysis = this.getAnalysis.bind(this);
        this.calculateROI = this.calculateROI.bind(this);
        this.getUnansweredQuestions = this.getUnansweredQuestions.bind(this);
        this.scrollToQuestion = this.scrollToQuestion.bind(this);
        this.renderOptionGrid = this.renderOptionGrid.bind(this);
        this.renderAnalysis = this.renderAnalysis.bind(this);
        
        // Initialize
        this.initialize();
    }

    initialize() {
        try {
            // Verify all containers exist
            const missingContainers = Object.entries(this.containers)
                .filter(([key, element]) => !element)
                .map(([key]) => key);

            if (missingContainers.length > 0) {
                throw new Error(`Missing containers: ${missingContainers.join(', ')}`);
            }

            // Load saved state
            this.loadFromStorage();

            // Initialize options for each container
            this.renderOptionSelections();
            
            // Initialize language selector
            const languageSelect = document.querySelector('#languageSelect');
            if (languageSelect) {
                languageSelect.value = this.state.language;
                languageSelect.addEventListener('change', (e) => {
                    this.state.language = e.target.value;
                    this.renderOptionSelections();
                    this.renderAnalysis();
                });
            }
        } catch (error) {
            console.error('Initialization error:', error);
            this.handleError('initialization', error);
        }
    }

    handleError(context, error) {
        console.error(`${context} error:`, error);
        
        // Display error message to user
        const container = document.createElement('div');
        container.className = 'error-container';
        
        const message = document.createElement('p');
        message.className = 'error-message';
        message.textContent = `Error: ${error.message}`;
        
        container.appendChild(message);
        
        // Insert error message at the top of the content
        const content = document.querySelector('#questions');
        if (content) {
            content.insertBefore(container, content.firstChild);
        }
    }

    renderOptionGrid(container, options, field) {
        try {
            // Ensure question title and description are visible
            const title = container.querySelector('h5');
            const description = container.querySelector('p');
            if (title) title.style.display = 'block';
            if (description) description.style.display = 'block';

            const optionsContainer = container.querySelector('.options-stack');
            if (!optionsContainer) {
                throw new Error(`Missing options container for ${field}`);
            }
            
            optionsContainer.innerHTML = '';
            options.forEach(option => {
                const card = document.createElement('div');
                card.className = 'option-card';
                if (this.state[field] === option.value) {
                    card.classList.add('selected');
                }

                card.innerHTML = `
                    <div class="option-label fw-bold">${this.translate(option.labelKey)}</div>
                    <div class="option-description small text-gray-300">${this.translate(option.descriptionKey)}</div>
                `;
                
                card.addEventListener('click', () => this.handleOptionClick(field, option.value));
                
                optionsContainer.appendChild(card);
            });
        } catch (error) {
            console.error('Error rendering option grid:', error);
            this.handleError('render', error);
        }
    }

    renderOptionSelections() {
        try {
            Object.entries(this.containers).forEach(([field, container]) => {
                if (container) {
                    this.renderOptionGrid(container, this[`${field}Options`], field);
                }
            });
        } catch (error) {
            console.error('Error rendering options:', error);
            this.handleError('render', error);
        }
    }

    // ... [Rest of the code remains unchanged] ...

}

// Create instance when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.calculator = new FermiCalculator();
});
