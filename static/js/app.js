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

        // Initialize all options
        this.initializeOptions();

        // Initialize clear button
        this.initializeClearButton();
    }

    initializeOptions() {
        // Revenue options
        this.revenueOptions = [{
            value: 1000000,
            labelKey: 'revenue-1000000',
            descriptionKey: 'revenue-1000000-desc'
        }, {
            value: 100000,
            labelKey: 'revenue-100000',
            descriptionKey: 'revenue-100000-desc'
        }, {
            value: 10000,
            labelKey: 'revenue-10000',
            descriptionKey: 'revenue-10000-desc'
        }, {
            value: 1000,
            labelKey: 'revenue-1000',
            descriptionKey: 'revenue-1000-desc'
        }];

        // Customer Reach options (0-100)
        this.customerReachOptions = [{
            value: 100,
            labelKey: 'reach-100',
            descriptionKey: 'reach-100-desc'
        }, {
            value: 70,
            labelKey: 'reach-70',
            descriptionKey: 'reach-70-desc'
        }, {
            value: 30,
            labelKey: 'reach-30',
            descriptionKey: 'reach-30-desc'
        }, {
            value: 0,
            labelKey: 'reach-0',
            descriptionKey: 'reach-0-desc'
        }];

        // Customer Care options
        this.customerCareOptions = [{
            value: 1000,
            labelKey: 'care-1000',
            descriptionKey: 'care-1000-desc'
        }, {
            value: 100,
            labelKey: 'care-100',
            descriptionKey: 'care-100-desc'
        }, {
            value: 10,
            labelKey: 'care-10',
            descriptionKey: 'care-10-desc'
        }, {
            value: 1,
            labelKey: 'care-1',
            descriptionKey: 'care-1-desc'
        }, {
            value: 0,
            labelKey: 'care-0',
            descriptionKey: 'care-0-desc'
        }];

        // Insight options
        this.insightOptions = [{
            value: 1000,
            labelKey: 'insight-1000',
            descriptionKey: 'insight-1000-desc'
        }, {
            value: 100,
            labelKey: 'insight-100',
            descriptionKey: 'insight-100-desc'
        }, {
            value: 10,
            labelKey: 'insight-10',
            descriptionKey: 'insight-10-desc'
        }, {
            value: 1,
            labelKey: 'insight-1',
            descriptionKey: 'insight-1-desc'
        }, {
            value: 0,
            labelKey: 'insight-0',
            descriptionKey: 'insight-0-desc'
        }];

        // Product Payoff options
        this.productPayoffOptions = [{
            value: 1000,
            labelKey: 'payoff-1000',
            descriptionKey: 'payoff-1000-desc'
        }, {
            value: 100,
            labelKey: 'payoff-100',
            descriptionKey: 'payoff-100-desc'
        }, {
            value: 10,
            labelKey: 'payoff-10',
            descriptionKey: 'payoff-10-desc'
        }, {
            value: 1,
            labelKey: 'payoff-1',
            descriptionKey: 'payoff-1-desc'
        }, {
            value: 0,
            labelKey: 'payoff-0',
            descriptionKey: 'payoff-0-desc'
        }];

        // Effort options
        this.effortOptions = [{
            value: 60,  // 2 months
            labelKey: 'effort-2m',
            descriptionKey: 'effort-2m-desc'
        }, {
            value: 10,  // 2 weeks
            labelKey: 'effort-2w',
            descriptionKey: 'effort-2w-desc'
        }, {
            value: 2,   // 2 days
            labelKey: 'effort-2d',
            descriptionKey: 'effort-2d-desc'
        }];

        // Team Excitement options
        this.teamExcitementOptions = [{
            value: 100,
            labelKey: 'excitement-100',
            descriptionKey: 'excitement-100-desc'
        }, {
            value: 10,
            labelKey: 'excitement-10',
            descriptionKey: 'excitement-10-desc'
        }, {
            value: 1,
            labelKey: 'excitement-1',
            descriptionKey: 'excitement-1-desc'
        }, {
            value: 0,
            labelKey: 'excitement-0',
            descriptionKey: 'excitement-0-desc'
        }];

        // Confidence options
        this.confidenceOptions = [{
            value: 100,
            labelKey: 'confidence-100',
            descriptionKey: 'confidence-100-desc'
        }, {
            value: 10,
            labelKey: 'confidence-10',
            descriptionKey: 'confidence-10-desc'
        }, {
            value: 1,
            labelKey: 'confidence-1',
            descriptionKey: 'confidence-1-desc'
        }, {
            value: 0,
            labelKey: 'confidence-0',
            descriptionKey: 'confidence-0-desc'
        }];
    }

    initializeClearButton() {
        const clearButton = document.getElementById('clearButton');
        if (clearButton) {
            clearButton.addEventListener('click', () => {
                this.clearAllSelections();
            });
        }
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

        // Add a small delay before scrolling to top
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 100);
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

    handleError(type, error) {
        const errorMessages = {
            'initialization': 'Failed to initialize calculator',
            'event-listeners': 'Failed to set up event listeners',
            'option-grids': 'Failed to set up option grids',
            'render': 'Failed to render calculator',
            'analysis': 'Failed to generate analysis',
            'storage': 'Failed to access local storage',
            'translation': 'Translation error occurred'
        };

        const message = errorMessages[type] || 'An unknown error occurred';
        console.error(`${message}:`, error);
    }

    initializeEventListeners() {
        try {
            const languageSelect = document.getElementById('languageSelect');
            if (languageSelect) {
                languageSelect.value = this.state.language;
                languageSelect.addEventListener('change', (event) => {
                    this.updateState('language', event.target.value);
                });
            }
            this.initializeOptionGrids();
        } catch (error) {
            console.error('Error initializing event listeners:', error);
            this.handleError('event-listeners', error);
        }
    }

    // Helper function to find the next unanswered question
    findNextQuestion(currentField) {
        const questionOrder = [
            'revenue',
            'customerReach',
            'customerCare',
            'insight',
            'productPayoff',
            'effort',
            'teamExcitement',
            'confidence'
        ];

        const currentIndex = questionOrder.indexOf(currentField);
        if (currentIndex === -1 || currentIndex === questionOrder.length - 1) {
            return null;
        }

        for (let i = currentIndex + 1; i < questionOrder.length; i++) {
            const nextField = questionOrder[i];
            if (this.state[nextField] === undefined) {
                return nextField;
            }
        }

        return null;
    }

    // Helper function to scroll to a specific question
    scrollToNextQuestion(field) {
        const nextField = this.findNextQuestion(field);
        if (nextField) {
            const container = document.getElementById(`${nextField}Options`);
            if (container) {
                setTimeout(() => {
                    container.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    container.classList.add('highlight-container');
                    setTimeout(() => container.classList.remove('highlight-container'), 2000);
                }, 100);
            }
        }
    }

    initializeOptionGrids() {
        try {
            const optionSets = [
                { containerId: 'revenueOptions', options: this.revenueOptions, field: 'revenue' },
                { containerId: 'customerReachOptions', options: this.customerReachOptions, field: 'customerReach' },
                { containerId: 'customerCareOptions', options: this.customerCareOptions, field: 'customerCare' },
                { containerId: 'insightOptions', options: this.insightOptions, field: 'insight' },
                { containerId: 'productPayoffOptions', options: this.productPayoffOptions, field: 'productPayoff' },
                { containerId: 'effortOptions', options: this.effortOptions, field: 'effort' },
                { containerId: 'teamExcitementOptions', options: this.teamExcitementOptions, field: 'teamExcitement' },
                { containerId: 'confidenceOptions', options: this.confidenceOptions, field: 'confidence' }
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

    renderOptionGrid(container, options, field) {
        try {
            container.innerHTML = '';
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

                card.addEventListener('click', () => {
                    this.updateState(field, option.value);
                    this.scrollToNextQuestion(field);
                });

                container.appendChild(card);
            });
        } catch (error) {
            console.error('Error rendering option grid:', error);
            this.handleError('render', error);
        }
    }

    calculateROI() {
        try {
            if (!this.state.effort) return 0;

            const factors = [
                this.state.customerReach,
                this.state.customerCare,
                this.state.insight,
                this.state.productPayoff
            ];

            // Check if any required factors are missing
            if (factors.some(factor => factor === undefined)) return 0;

            // Multiply all factors
            const impactScore = factors.reduce((a, b) => a * b, 1);
            const baseROI = impactScore / this.state.effort;

            // Apply typical margins of error
            const conservativeROI = (baseROI * 0.8) / 1.5;

            return Math.round(conservativeROI);
        } catch (error) {
            console.error('Error calculating ROI:', error);
            this.handleError('analysis', error);
            return 0;
        }
    }

    calculateTieBreakScore() {
        if (this.state.teamExcitement === undefined || this.state.confidence === undefined) {
            return 0;
        }
        return (this.state.teamExcitement + this.state.confidence) / 200;
    }

    getAnalysis() {
        try {
            const unanswered = this.getUnansweredQuestions();

            if (unanswered.length > 0) {
                return {
                    complete: false,
                    unanswered,
                    points: []
                };
            }

            const roi = this.calculateROI();
            const analysis = [];

            // ROI Analysis
            if (roi > 0) {
                analysis.push({
                    type: 'primary',
                    content: `ROI: ${roi.toLocaleString()}`
                });
            }

            // Effort Analysis
            if (this.state.effort === 2) {
                analysis.push({
                    type: 'positive',
                    content: this.translate('quick-win')
                });
            } else if (this.state.effort === 60) {
                analysis.push({
                    type: 'warning',
                    content: this.translate('large-effort')
                });
            }

            // Team Factors Analysis
            if (this.state.teamExcitement === 100) {
                analysis.push({
                    type: 'positive',
                    content: this.translate('high-team-excitement')
                });
            } else if (this.state.teamExcitement === 0) {
                analysis.push({
                    type: 'warning',
                    content: this.translate('low-team-excitement')
                });
            }

            if (this.state.confidence === 100) {
                analysis.push({
                    type: 'positive',
                    content: this.translate('high-confidence')
                });
            } else if (this.state.confidence <= 1) {
                analysis.push({
                    type: 'warning',
                    content: this.translate('low-confidence')
                });
            }

            return {
                complete: true,
                points: analysis,
                tieBreakScore: this.calculateTieBreakScore()
            };
        } catch (error) {
            console.error('Error getting analysis:', error);
            this.handleError('analysis', error);
            return null;
        }
    }

    getUnansweredQuestions() {
        const unanswered = [];
        const requiredFields = [
            'revenue',
            'customerReach',
            'customerCare',
            'insight',
            'productPayoff',
            'effort',
            'teamExcitement',
            'confidence'
        ];

        requiredFields.forEach(field => {
            if (this.state[field] === undefined) {
                const titleKey = `${field.replace(/([A-Z])/g, '-$1').toLowerCase()}-title`;
                unanswered.push({
                    field,
                    title: this.translate(titleKey)
                });
            }
        });

        return unanswered;
    }

    updateState(field, value) {
        try {
            this.state[field] = value;
            this.saveToStorage();
            this.render();
        } catch (error) {
            console.error('Error updating state:', error);
            this.handleError('state-update', error);
        }
    }

    saveToStorage() {
        try {
            localStorage.setItem('fermiCalculator', JSON.stringify(this.state));
        } catch (error) {
            console.error('Error saving to storage:', error);
            this.handleError('storage', error);
        }
    }

    loadFromStorage() {
        try {
            const saved = localStorage.getItem('fermiCalculator');
            if (saved) {
                this.state = JSON.parse(saved);
            }
        } catch (error) {
            console.error('Error loading from storage:', error);
            this.handleError('storage', error);
        }
    }

    translate(key, params = {}) {
        try {
            if (!translations || !translations[this.state.language]) {
                return key;
            }

            let text = translations[this.state.language][key];
            if (!text) {
                return key;
            }

            Object.entries(params).forEach(([param, value]) => {
                text = text.replace(`{${param}}`, value);
            });
            return text;
        } catch (error) {
            console.error('Translation error:', error);
            this.handleError('translation', error);
            return key;
        }
    }

    render() {
        try {
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (key) {
                    element.textContent = this.translate(key);
                }
            });

            this.renderAnalysis();
            this.initializeOptionGrids();
        } catch (error) {
            console.error('Error rendering:', error);
            this.handleError('render', error);
        }
    }

    renderAnalysis() {
        try {
            const analysisContent = document.getElementById('analysis-content');
            if (!analysisContent) return;

            const analysis = this.getAnalysis();
            if (!analysis) {
                analysisContent.innerHTML = `
                    <div class="card-body p-5">
                        <h5 class="text-white mb-4" data-translate="analysis-title">Analysis</h5>
                        <div class="text-gray-300">
                            <i class="bi bi-info-circle"></i>
                            ${this.translate('analysis-empty')}
                        </div>
                    </div>
                `;
                return;
            }

            let content = `
                <div class="card-body p-5">
                    <h5 class="text-white mb-4" data-translate="analysis-title">Analysis</h5>
            `;

            if (!analysis.complete) {
                content += `
                    <div class="alert alert-warning mb-4">
                        <h6 class="alert-heading mb-3">Unanswered Questions:</h6>
                        <ul class="list-unstyled mb-0">
                            ${analysis.unanswered.map(q => `
                                <li class="mb-2">
                                    <a href="#" class="text-warning text-decoration-none" 
                                       onclick="window.calculator.scrollToQuestion('${q.field}'); return false;">
                                        <i class="bi bi-arrow-right me-2"></i>${q.title}
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `;
            }

            if (analysis.points.length > 0) {
                content += `
                    <div class="analysis-points">
                        ${analysis.points.map(point => `
                            <div class="analysis-point ${point.type}">
                                ${point.content}
                            </div>
                        `).join('')}
                    </div>
                `;
            }

            content += `</div>`;
            analysisContent.innerHTML = content;
        } catch (error) {
            console.error('Error rendering analysis:', error);
            this.handleError('render', error);
        }
    }

    scrollToQuestion(field) {
        const container = document.getElementById(`${field}Options`);
        if (container) {
            container.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            container.classList.add('highlight-container');
            setTimeout(() => container.classList.remove('highlight-container'), 2000);
        }
    }
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
