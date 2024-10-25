class FermiCalculator {
    constructor() {
        // Initialize state
        this.state = {
            revenue: 0,
            customerCare: 0,
            effort: 0,
            confidence: 0,
            language: 'EN'
        };

        // Initialize options arrays
        this.revenueOptions = [
            { value: 1000, labelKey: 'revenue-1000', descriptionKey: 'revenue-1000-desc' },
            { value: 10000, labelKey: 'revenue-10000', descriptionKey: 'revenue-10000-desc' },
            { value: 100000, labelKey: 'revenue-100000', descriptionKey: 'revenue-100000-desc' },
            { value: 1000000, labelKey: 'revenue-1000000', descriptionKey: 'revenue-1000000-desc' }
        ];

        this.customerCareOptions = [
            { value: 1, labelKey: 'care-1', descriptionKey: 'care-1-desc' },
            { value: 10, labelKey: 'care-10', descriptionKey: 'care-10-desc' },
            { value: 100, labelKey: 'care-100', descriptionKey: 'care-100-desc' },
            { value: 1000, labelKey: 'care-1000', descriptionKey: 'care-1000-desc' }
        ];

        this.effortOptions = [
            { value: 2, labelKey: 'effort-2', descriptionKey: 'effort-2-desc' },
            { value: 10, labelKey: 'effort-10', descriptionKey: 'effort-10-desc' },
            { value: 45, labelKey: 'effort-45', descriptionKey: 'effort-45-desc' }
        ];

        this.confidenceOptions = [
            { value: 1, labelKey: 'confidence-1', descriptionKey: 'confidence-1-desc' },
            { value: 10, labelKey: 'confidence-10', descriptionKey: 'confidence-10-desc' },
            { value: 100, labelKey: 'confidence-100', descriptionKey: 'confidence-100-desc' }
        ];

        // Bind all methods to this instance
        this.initialize = this._initialize.bind(this);
        this.translate = this._translate.bind(this);
        this.initializeEventListeners = this._initializeEventListeners.bind(this);
        this.initializeOptionGrids = this._initializeOptionGrids.bind(this);
        this.renderOptionGrid = this._renderOptionGrid.bind(this);
        this.calculateROI = this._calculateROI.bind(this);
        this.updateState = this._updateState.bind(this);
        this.getAnalysis = this._getAnalysis.bind(this);
        this.saveToStorage = this._saveToStorage.bind(this);
        this.loadFromStorage = this._loadFromStorage.bind(this);
        this.render = this._render.bind(this);
        this.renderOptionSelections = this._renderOptionSelections.bind(this);
        this.renderAnalysis = this._renderAnalysis.bind(this);
    }

    _translate(key, params = {}) {
        try {
            if (!translations || !translations[this.state.language]) {
                console.error('Translations not loaded');
                return key;
            }
            
            let text = translations[this.state.language][key];
            if (!text) return key;
            
            Object.entries(params).forEach(([param, value]) => {
                text = text.replace(`{${param}}`, value);
            });
            return text;
        } catch (error) {
            console.error('Translation error:', error);
            return key;
        }
    }

    _initialize() {
        try {
            this.loadFromStorage();
            this.initializeEventListeners();
            this.render();
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }

    _initializeEventListeners() {
        try {
            // Set up language select
            const languageSelect = document.getElementById('languageSelect');
            if (languageSelect) {
                languageSelect.value = this.state.language;
                languageSelect.addEventListener('change', () => {
                    this.updateState('language', languageSelect.value);
                });
            }
            
            this.initializeOptionGrids();
        } catch (error) {
            console.error('Error initializing event listeners:', error);
        }
    }

    _initializeOptionGrids() {
        try {
            const optionSets = [
                { containerId: 'revenueOptions', options: this.revenueOptions, field: 'revenue' },
                { containerId: 'customerCareOptions', options: this.customerCareOptions, field: 'customerCare' },
                { containerId: 'effortOptions', options: this.effortOptions, field: 'effort' },
                { containerId: 'confidenceOptions', options: this.confidenceOptions, field: 'confidence' }
            ];

            optionSets.forEach(({ containerId, options, field }) => {
                const container = document.querySelector(`.${containerId}`);
                if (!container) {
                    console.warn(`Container .${containerId} not found`);
                    return;
                }
                this.renderOptionGrid(container, options, field);
            });
        } catch (error) {
            console.error('Error initializing option grids:', error);
        }
    }

    _renderOptionGrid(container, options, field) {
        try {
            if (!container) return;
            
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
        }
    }

    _calculateROI() {
        try {
            if (!this.state.effort) return 0;
            const impact = (this.state.revenue * this.state.customerCare * this.state.confidence) / 100;
            return Math.round(impact / this.state.effort);
        } catch (error) {
            console.error('Error calculating ROI:', error);
            return 0;
        }
    }

    _updateState(field, value) {
        try {
            this.state[field] = value;
            this.saveToStorage();
            this.render();
        } catch (error) {
            console.error('Error updating state:', error);
        }
    }

    _getAnalysis() {
        try {
            const roi = this.calculateROI();
            const isComplete = this.state.revenue && this.state.customerCare && 
                            this.state.effort && this.state.confidence;
            
            if (!isComplete) return null;

            const analysis = [];

            if (roi > 0) {
                analysis.push({
                    type: 'primary',
                    content: `ROI: ${roi.toLocaleString()}`
                });
            }

            if (this.state.confidence === 100) {
                analysis.push({
                    type: 'positive',
                    content: this.translate('high-confidence')
                });
            } else if (this.state.confidence === 1) {
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

            return analysis;
        } catch (error) {
            console.error('Error getting analysis:', error);
            return null;
        }
    }

    _saveToStorage() {
        try {
            localStorage.setItem('fermiCalculator', JSON.stringify(this.state));
        } catch (error) {
            console.error('Error saving to storage:', error);
        }
    }

    _loadFromStorage() {
        try {
            const saved = localStorage.getItem('fermiCalculator');
            if (saved) {
                this.state = JSON.parse(saved);
            }
        } catch (error) {
            console.error('Error loading from storage:', error);
        }
    }

    _render() {
        try {
            // Update all translatable elements
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
        }
    }

    _renderOptionSelections() {
        try {
            ['revenue', 'customerCare', 'effort', 'confidence'].forEach(field => {
                const container = document.querySelector(`.${field}Options`);
                if (container) {
                    this.renderOptionGrid(container, this[`${field}Options`], field);
                }
            });
        } catch (error) {
            console.error('Error rendering option selections:', error);
        }
    }

    _renderAnalysis() {
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

            let html = `
                <div class="card-body p-5">
                    <h5 class="text-white mb-4" data-translate="analysis-title">Analysis</h5>
                    <div class="analysis-points">
                        ${analysis.map(point => `
                            <div class="analysis-point ${point.type}">
                                ${point.content}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;

            analysisContent.innerHTML = html;
        } catch (error) {
            console.error('Error rendering analysis:', error);
        }
    }
}

// Initialize the calculator when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    try {
        window.calculator = new FermiCalculator();
        window.calculator.initialize();
    } catch (error) {
        console.error('Error initializing calculator:', error);
    }
});
