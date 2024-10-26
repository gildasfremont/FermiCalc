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

        // Initialize clear button
        this.initializeClearButton();

        // Revenue options
        this.revenueOptions = [{
            value: 1000000,
            labelKey: 'revenue-1000000',
            descriptionKey: 'revenue-1000000-desc'
        },
        {
            value: 100000,
            labelKey: 'revenue-100000',
            descriptionKey: 'revenue-100000-desc'
        },
        {
            value: 10000,
            labelKey: 'revenue-10000',
            descriptionKey: 'revenue-10000-desc'
        },
        {
            value: 1000,
            labelKey: 'revenue-1000',
            descriptionKey: 'revenue-1000-desc'
        }];

        // Customer Reach options (0-100)
        this.customerReachOptions = [{
            value: 100,
            labelKey: 'reach-100',
            descriptionKey: 'reach-100-desc'
        },
        {
            value: 70,
            labelKey: 'reach-70',
            descriptionKey: 'reach-70-desc'
        },
        {
            value: 30,
            labelKey: 'reach-30',
            descriptionKey: 'reach-30-desc'
        },
        {
            value: 0,
            labelKey: 'reach-0',
            descriptionKey: 'reach-0-desc'
        }];

        // Rest of the options remain the same...
        [Previous options code for customerCare, insight, productPayoff, effort, teamExcitement, and confidence]
    }

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
    }

    initializeOptionGrids() {
        try {
            const optionSets = [
                {
                    containerId: 'revenueOptions',
                    options: this.revenueOptions,
                    field: 'revenue'
                },
                {
                    containerId: 'customerReachOptions',
                    options: this.customerReachOptions,
                    field: 'customerReach'
                },
                {
                    containerId: 'customerCareOptions',
                    options: this.customerCareOptions,
                    field: 'customerCare'
                },
                {
                    containerId: 'insightOptions',
                    options: this.insightOptions,
                    field: 'insight'
                },
                {
                    containerId: 'productPayoffOptions',
                    options: this.productPayoffOptions,
                    field: 'productPayoff'
                },
                {
                    containerId: 'effortOptions',
                    options: this.effortOptions,
                    field: 'effort'
                },
                {
                    containerId: 'teamExcitementOptions',
                    options: this.teamExcitementOptions,
                    field: 'teamExcitement'
                },
                {
                    containerId: 'confidenceOptions',
                    options: this.confidenceOptions,
                    field: 'confidence'
                }
            ];

            optionSets.forEach(({ containerId, options, field }) => {
                const container = document.getElementById(containerId);
                if (container) {
                    this.renderOptionGrid(container, options, field);
                }
            });
        } catch (error) {
            console.error('Error initializing option grids:', error);
            this.handleError('option-grids', error);
        }
    }

    // Rest of the class implementation remains the same...
    [Previous code for other methods]
}

// Initialize the calculator when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    try {
        if (!window.calculator) {
            window.calculator = new FermiCalculator();
            window.calculator.initialize();
        }
    } catch (error) {
        console.error('Error initializing calculator:', error);
        const container = document.getElementById('analysis-content');
        if (container) {
            container.innerHTML = `
                <div class="error-container">
                    <p class="error-message">
                        <i class="bi bi-exclamation-triangle"></i>
                        Failed to initialize calculator. Please refresh the page.
                    </p>
                </div>
            `;
        }
    }
});
