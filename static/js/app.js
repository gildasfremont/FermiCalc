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

    initialize() {
        try {
            this.loadFromStorage();
            this.initializeEventListeners();
            this.initializeClearButton();
            this.initializeLanguageSelect();
            this.render();
            this.initializeOptions();
        } catch (error) {
            console.error('Initialization error:', error);
            this.handleError('initialization', error);
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

    saveToStorage() {
        try {
            localStorage.setItem('fermiCalculator', JSON.stringify(this.state));
        } catch (error) {
            console.error('Error saving to storage:', error);
            this.handleError('storage', error);
        }
    }

    initializeEventListeners() {
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.value = this.state.language;
            languageSelect.addEventListener('change', (event) => {
                this.updateState('language', event.target.value);
            });
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

    initializeClearButton() {
        const clearButton = document.getElementById('clearButton');
        if (clearButton) {
            clearButton.addEventListener('click', () => {
                this.clearAllSelections();
            });
        }
    }

    clearAllSelections() {
        this.state = {
            revenue: undefined,
            customerReach: undefined,
            customerCare: undefined,
            insight: undefined,
            productPayoff: undefined,
            effort: undefined,
            teamExcitement: undefined,
            confidence: undefined,
            language: this.state.language
        };

        this.saveToStorage();
        this.render();
        this.initializeOptions();

        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 100);
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
                <div class="option-description small">${this.translate(option.description)}</div>
            `;

            card.addEventListener('click', () => {
                this.updateState(field, option.value);
                this.scrollToNextQuestion(field);
            });

            container.appendChild(card);
        });
    }

    translate(key, params = {}) {
        try {
            if (!translations || !translations[this.state.language]) {
                console.error('Translations not loaded');
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

    updateState(field, value) {
        this.state[field] = value;
        this.saveToStorage();
        this.render();
        this.initializeOptions();
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
                        <h5 class="mb-4" data-translate="analysis-title">Analysis</h5>
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
                    <h5 class="mb-4" data-translate="analysis-title">Analysis</h5>
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

            if (roi > 0) {
                analysis.push({
                    type: 'primary',
                    content: `ROI: ${roi.toLocaleString()}`
                });
            }

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
                const titleKey = field.replace(/([A-Z])/g, '-$1').toLowerCase() + '-title';
                const title = this.translate(titleKey);
                if (title) {
                    unanswered.push({
                        field,
                        title
                    });
                }
            }
        });

        return unanswered;
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

            if (factors.some(factor => factor === undefined)) return 0;

            const impactScore = factors.reduce((a, b) => a * b, 1);
            const baseROI = impactScore / this.state.effort;
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

    scrollToQuestion(field) {
        const container = document.getElementById(`${field}Options`);
        if (container) {
            const questionContainer = container.closest('.fermi-question');
            if (questionContainer) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const containerTop = questionContainer.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: containerTop - navbarHeight - 20,
                    behavior: 'smooth'
                });
            }
        }
    }

    scrollToNextQuestion(field) {
        const nextField = this.findNextQuestion(field);
        if (nextField) {
            this.scrollToQuestion(nextField);
        } else {
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

    handleError(type, error) {
        const errorMessages = {
            'initialization': 'Failed to initialize calculator',
            'event-listeners': 'Failed to set up event listeners',
            'option-grids': 'Failed to set up option grids',
            'render': 'Failed to render calculator',
            'analysis': 'Failed to generate analysis',
            'storage': 'Failed to access local storage',
            'translation': 'Translation error occurred',
            'state-update': 'Failed to update state'
        };

        const message = errorMessages[type] || 'An unknown error occurred';
        console.error(`${message}:`, error);
    }
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
