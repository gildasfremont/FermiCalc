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

        // Initialize revenue options
        this.revenueOptions = [
            { value: 1000, labelKey: 'revenue-1000', descriptionKey: 'revenue-1000-desc' },
            { value: 10000, labelKey: 'revenue-10000', descriptionKey: 'revenue-10000-desc' },
            { value: 100000, labelKey: 'revenue-100000', descriptionKey: 'revenue-100000-desc' },
            { value: 1000000, labelKey: 'revenue-1000000', descriptionKey: 'revenue-1000000-desc' }
        ];

        // Initialize customer reach options
        this.customerReachOptions = [
            { value: 100, labelKey: 'reach-100', descriptionKey: 'reach-100-desc' },
            { value: 70, labelKey: 'reach-70', descriptionKey: 'reach-70-desc' },
            { value: 30, labelKey: 'reach-30', descriptionKey: 'reach-30-desc' },
            { value: 0, labelKey: 'reach-0', descriptionKey: 'reach-0-desc' }
        ];

        // Initialize customer care options
        this.customerCareOptions = [
            { value: 1000, labelKey: 'care-1000', descriptionKey: 'care-1000-desc' },
            { value: 100, labelKey: 'care-100', descriptionKey: 'care-100-desc' },
            { value: 10, labelKey: 'care-10', descriptionKey: 'care-10-desc' },
            { value: 1, labelKey: 'care-1', descriptionKey: 'care-1-desc' },
            { value: 0, labelKey: 'care-0', descriptionKey: 'care-0-desc' }
        ];

        // Initialize insight options
        this.insightOptions = [
            { value: 1000, labelKey: 'insight-1000', descriptionKey: 'insight-1000-desc' },
            { value: 100, labelKey: 'insight-100', descriptionKey: 'insight-100-desc' },
            { value: 10, labelKey: 'insight-10', descriptionKey: 'insight-10-desc' },
            { value: 1, labelKey: 'insight-1', descriptionKey: 'insight-1-desc' },
            { value: 0, labelKey: 'insight-0', descriptionKey: 'insight-0-desc' }
        ];

        // Initialize product payoff options
        this.productPayoffOptions = [
            { value: 1000, labelKey: 'payoff-1000', descriptionKey: 'payoff-1000-desc' },
            { value: 100, labelKey: 'payoff-100', descriptionKey: 'payoff-100-desc' },
            { value: 10, labelKey: 'payoff-10', descriptionKey: 'payoff-10-desc' },
            { value: 1, labelKey: 'payoff-1', descriptionKey: 'payoff-1-desc' },
            { value: 0, labelKey: 'payoff-0', descriptionKey: 'payoff-0-desc' }
        ];

        // Initialize effort options
        this.effortOptions = [
            { value: 2, labelKey: 'effort-2d', descriptionKey: 'effort-2d-desc' },
            { value: 10, labelKey: 'effort-2w', descriptionKey: 'effort-2w-desc' },
            { value: 45, labelKey: 'effort-2m', descriptionKey: 'effort-2m-desc' }
        ];

        // Initialize team excitement options
        this.teamExcitementOptions = [
            { value: 100, labelKey: 'excitement-100', descriptionKey: 'excitement-100-desc' },
            { value: 10, labelKey: 'excitement-10', descriptionKey: 'excitement-10-desc' },
            { value: 1, labelKey: 'excitement-1', descriptionKey: 'excitement-1-desc' },
            { value: 0, labelKey: 'excitement-0', descriptionKey: 'excitement-0-desc' }
        ];

        // Initialize confidence options
        this.confidenceOptions = [
            { value: 100, labelKey: 'confidence-100', descriptionKey: 'confidence-100-desc' },
            { value: 10, labelKey: 'confidence-10', descriptionKey: 'confidence-10-desc' },
            { value: 1, labelKey: 'confidence-1', descriptionKey: 'confidence-1-desc' },
            { value: 0, labelKey: 'confidence-0', descriptionKey: 'confidence-0-desc' }
        ];

        // Define all methods and bind them
        this.initialize = function() {
            try {
                this.loadFromStorage();
                this.initializeEventListeners();
                this.render();
            } catch (error) {
                console.error('Initialization error:', error);
                this.handleError('initialization', error);
            }
        };

        this.handleError = function(type, error) {
            const errorMessages = {
                'missing-containers': `Missing containers: ${error.containers?.join(', ')}`,
                'initialization': 'Failed to initialize calculator',
                'event-listeners': 'Failed to set up event listeners',
                'option-grids': 'Failed to set up option grids',
                'render': 'Failed to render calculator',
                'analysis': 'Failed to generate analysis',
                'storage': 'Failed to access local storage'
            };

            const message = errorMessages[type] || 'An unknown error occurred';
            console.error(`${message}:`, error);
        };

        this.initializeEventListeners = function() {
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
        };

        this.initializeOptionGrids = function() {
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

                let missingContainers = [];
                optionSets.forEach(({ containerId, options, field }) => {
                    const container = document.getElementById(containerId);
                    if (!container) {
                        missingContainers.push(containerId);
                        return;
                    }
                    this.renderOptionGrid(container, options, field);
                });

                if (missingContainers.length > 0) {
                    this.handleError('missing-containers', { containers: missingContainers });
                }
            } catch (error) {
                console.error('Error initializing option grids:', error);
                this.handleError('option-grids', error);
            }
        };

        this.renderOptionGrid = function(container, options, field) {
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
                    });
                    
                    container.appendChild(card);
                });
            } catch (error) {
                console.error('Error rendering option grid:', error);
                this.handleError('render', error);
            }
        };

        this.calculateROI = function() {
            try {
                if (!this.state.effort) return 0;
                
                const impact = (
                    this.state.customerReach * 
                    this.state.customerCare * 
                    this.state.insight * 
                    this.state.productPayoff
                ) / 10000;
                
                const roi = Math.round((this.state.revenue * impact) / this.state.effort);
                return roi;
            } catch (error) {
                console.error('Error calculating ROI:', error);
                this.handleError('analysis', error);
                return 0;
            }
        };

        this.updateState = function(field, value) {
            try {
                this.state[field] = value;
                this.saveToStorage();
                this.render();
            } catch (error) {
                console.error('Error updating state:', error);
                this.handleError('state-update', error);
            }
        };

        this.getUnansweredQuestions = function() {
            const unanswered = [];
            Object.entries(this.state)
                .filter(([key]) => key !== 'language')
                .forEach(([field, value]) => {
                    if (value === undefined || value === null) {
                        const titleKey = {
                            revenue: 'revenue-title',
                            customerReach: 'customer-reach-title',
                            customerCare: 'customer-care-title',
                            insight: 'insight-title',
                            productPayoff: 'product-payoff-title',
                            effort: 'effort-title',
                            teamExcitement: 'team-excitement-title',
                            confidence: 'confidence-title'
                        }[field];
                        
                        unanswered.push({
                            field,
                            title: this.translate(titleKey)
                        });
                    }
                });
            return unanswered;
        };

        this.getAnalysis = function() {
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

                if (roi > 0) {
                    analysis.push({
                        type: 'primary',
                        content: `ROI: ${roi.toLocaleString()}`
                    });
                }

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

                if (this.state.effort === 2) {
                    analysis.push({
                        type: 'positive',
                        content: this.translate('quick-win')
                    });
                } else if (this.state.effort === 45) {
                    analysis.push({
                        type: 'warning',
                        content: this.translate('large-effort')
                    });
                }

                return {
                    complete: true,
                    points: analysis
                };
            } catch (error) {
                console.error('Error getting analysis:', error);
                this.handleError('analysis', error);
                return null;
            }
        };

        this.saveToStorage = function() {
            try {
                localStorage.setItem('fermiCalculator', JSON.stringify(this.state));
            } catch (error) {
                console.error('Error saving to storage:', error);
                this.handleError('storage', error);
            }
        };

        this.loadFromStorage = function() {
            try {
                const saved = localStorage.getItem('fermiCalculator');
                if (saved) {
                    this.state = JSON.parse(saved);
                }
            } catch (error) {
                console.error('Error loading from storage:', error);
                this.handleError('storage', error);
            }
        };

        this.translate = function(key, params = {}) {
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
        };

        this.render = function() {
            try {
                document.querySelectorAll('[data-translate]').forEach(element => {
                    const key = element.getAttribute('data-translate');
                    if (key) {
                        element.textContent = this.translate(key);
                    }
                });

                this.renderOptionSelections();
                this.renderAnalysis();
            } catch (error) {
                console.error('Error rendering:', error);
                this.handleError('render', error);
            }
        };

        this.renderOptionSelections = function() {
            try {
                const fields = [
                    'revenue', 'customerReach', 'customerCare', 'insight',
                    'productPayoff', 'effort', 'teamExcitement', 'confidence'
                ];
                
                fields.forEach(field => {
                    const container = document.getElementById(`${field}Options`);
                    if (container) {
                        this.renderOptionGrid(container, this[`${field}Options`], field);
                    }
                });
            } catch (error) {
                console.error('Error rendering option selections:', error);
                this.handleError('render', error);
            }
        };

        this.renderAnalysis = function() {
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
        };

        this.scrollToQuestion = function(field) {
            const container = document.getElementById(`${field}Options`);
            if (container) {
                container.scrollIntoView({ behavior: 'smooth' });
                container.classList.add('highlight-container');
                setTimeout(() => container.classList.remove('highlight-container'), 2000);
            }
        };

        // Bind all methods to this
        Object.getOwnPropertyNames(Object.getPrototypeOf(this))
            .filter(method => method !== 'constructor')
            .forEach(method => {
                this[method] = this[method].bind(this);
            });
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
