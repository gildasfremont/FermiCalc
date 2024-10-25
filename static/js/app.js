class FermiCalculator {
    constructor() {
        // Initialize containers using parent fermi-question elements
        this.containers = {
            revenue: document.querySelector('.fermi-question:has(#revenueOptions)'),
            customerReach: document.querySelector('.fermi-question:has(#customerReachOptions)'),
            customerCare: document.querySelector('.fermi-question:has(#customerCareOptions)'),
            insight: document.querySelector('.fermi-question:has(#insightOptions)'),
            productPayoff: document.querySelector('.fermi-question:has(#productPayoffOptions)'),
            effort: document.querySelector('.fermi-question:has(#effortOptions)'),
            teamExcitement: document.querySelector('.fermi-question:has(#teamExcitementOptions)'),
            confidence: document.querySelector('.fermi-question:has(#confidenceOptions)')
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
            const optionsContainer = container.querySelector('.options-stack');
            if (!optionsContainer) return;
            
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

    getUnansweredQuestions() {
        const unanswered = [];
        Object.entries(this.state)
            .filter(([key]) => key !== 'language')
            .forEach(([field, value]) => {
                // Special cases for fields where 0 means unanswered
                const isZeroMeansUnanswered = ['confidence', 'teamExcitement'].includes(field);
                
                // For fields where 0 is a valid answer
                const isValidZero = ['customerReach', 'customerCare', 'insight', 'productPayoff'].includes(field) && value === 0;
                
                // Check if question is unanswered
                const isUnanswered = isZeroMeansUnanswered ? value === 0 : 
                                   isValidZero ? false : !value;
                
                if (isUnanswered) {
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
    }

    scrollToQuestion(field) {
        const container = this.containers[field];
        if (container) {
            container.scrollIntoView({ behavior: 'smooth' });
            container.classList.add('highlight-container');
            setTimeout(() => container.classList.remove('highlight-container'), 2000);
        }
    }

    handleOptionClick(field, value) {
        try {
            this.state[field] = value;
            this.saveToStorage();
            this.renderOptionSelections();
            this.renderAnalysis();
        } catch (error) {
            console.error('Error handling option click:', error);
            this.handleError('option-click', error);
        }
    }

    calculateROI() {
        try {
            // Only block calculation if effort is missing
            if (!this.state.effort) return 0;
            
            // Calculate impact even with zero values
            const impact = (
                this.state.customerReach * 
                this.state.customerCare * 
                this.state.insight * 
                this.state.productPayoff * 
                (this.state.confidence || 1) // Use 1 if confidence is 0
            ) / 10000;
            
            const roi = Math.round((this.state.revenue * impact) / this.state.effort);
            return roi;
        } catch (error) {
            console.error('Error calculating ROI:', error);
            this.handleError('analysis', error);
            return 0;
        }
    }

    getAnalysis() {
        try {
            const roi = this.calculateROI();
            const unanswered = this.getUnansweredQuestions();
            
            // Only block analysis for truly unanswered questions
            if (unanswered.length > 0) {
                return {
                    complete: false,
                    unanswered,
                    points: []
                };
            }

            const analysis = [];

            // Always show analysis points even if ROI is 0
            analysis.push({
                type: 'primary',
                content: `ROI: ${roi.toLocaleString()}`
            });

            // Update confidence handling
            if (this.state.confidence === 0) {
                analysis.push({
                    type: 'warning',
                    content: this.translate('confidence-0-desc')
                });
            } else if (this.state.confidence === 100) {
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

            // Update team excitement handling
            if (this.state.teamExcitement === 0) {
                analysis.push({
                    type: 'warning',
                    content: this.translate('excitement-0-desc')
                });
            } else if (this.state.teamExcitement === 100) {
                analysis.push({
                    type: 'positive',
                    content: this.translate('high-team-excitement')
                });
            } else if (this.state.teamExcitement < 10) {
                analysis.push({
                    type: 'warning',
                    content: this.translate('low-team-excitement')
                });
            }

            // Always include effort analysis
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
    }

    renderAnalysis() {
        try {
            const analysisContent = document.querySelector('#analysis-content');
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
                                       onclick="calculator.scrollToQuestion('${q.field}'); return false;">
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
                this.state = { ...this.state, ...JSON.parse(saved) };
            }
        } catch (error) {
            console.error('Error loading from storage:', error);
            this.handleError('storage', error);
        }
    }
}

// Create instance when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.calculator = new FermiCalculator();
});
