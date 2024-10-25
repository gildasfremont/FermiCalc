class FermiCalculator {
    constructor() {
        this.features = [{
            id: 1,
            name: 'Feature A',
            revenue: 0,
            customerCare: 0,
            effort: 0,
            confidence: 0
        }];
        this.activeFeature = 0;
        this.currentLanguage = 'EN';

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

        // Bind all methods
        this.bindMethods();
    }

    bindMethods() {
        try {
            const methodsToBind = [
                'initialize', 'initializeApp', 'initializeEventListeners', 'initializeOptionGrids',
                'addFeature', 'removeFeature', 'updateFeature', 'calculateROI',
                'getAnalysis', 'saveToStorage', 'loadFromStorage', 'render',
                'renderFeatureTabs', 'renderOptionSelections', 'renderAnalysis',
                'renderOptionGrid', 'translate'
            ];

            methodsToBind.forEach(method => {
                if (typeof this[method] === 'function') {
                    this[method] = this[method].bind(this);
                } else {
                    console.warn(`Method ${method} not found during binding`);
                }
            });
        } catch (error) {
            console.error('Error binding methods:', error);
        }
    }

    translate(key, params = {}) {
        try {
            let text = translations[this.currentLanguage][key];
            if (!text) return key;
            
            Object.entries(params).forEach(([param, value]) => {
                text = text.replace(`{${param}}`, value);
            });
            return text;
        } catch (error) {
            console.warn(`Translation not found for key: ${key}`);
            return key;
        }
    }

    initialize() {
        try {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', this.initializeApp);
            } else {
                this.initializeApp();
            }
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }

    initializeApp() {
        try {
            this.loadFromStorage();
            this.initializeEventListeners();
            this.render();
        } catch (error) {
            console.error('App initialization error:', error);
        }
    }

    initializeEventListeners() {
        try {
            const addFeatureBtn = document.getElementById('add-feature');
            if (addFeatureBtn) {
                addFeatureBtn.addEventListener('click', this.addFeature);
            }

            const languageBtns = document.querySelectorAll('.language-btn');
            languageBtns?.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.currentLanguage = btn.dataset.lang;
                    this.saveToStorage();
                    this.render();
                });
            });

            this.initializeOptionGrids();
        } catch (error) {
            console.error('Error initializing event listeners:', error);
        }
    }

    initializeOptionGrids() {
        try {
            const optionSets = [
                { containerId: 'revenueOptions', options: this.revenueOptions, field: 'revenue' },
                { containerId: 'customerCareOptions', options: this.customerCareOptions, field: 'customerCare' },
                { containerId: 'effortOptions', options: this.effortOptions, field: 'effort' },
                { containerId: 'confidenceOptions', options: this.confidenceOptions, field: 'confidence' }
            ];

            optionSets.forEach(({ containerId, options, field }) => {
                const container = document.querySelector(`.${containerId}`);
                if (container) {
                    this.renderOptionGrid(container, options, field);
                }
            });
        } catch (error) {
            console.error('Error initializing option grids:', error);
        }
    }

    addFeature() {
        try {
            const newFeature = {
                id: this.features.length + 1,
                name: `Feature ${String.fromCharCode(65 + this.features.length)}`,
                revenue: 0,
                customerCare: 0,
                effort: 0,
                confidence: 0
            };
            this.features.push(newFeature);
            this.activeFeature = this.features.length - 1;
            this.saveToStorage();
            this.render();
        } catch (error) {
            console.error('Error adding feature:', error);
        }
    }

    updateFeature(field, value) {
        try {
            if (this.features[this.activeFeature]) {
                this.features[this.activeFeature][field] = value;
                this.saveToStorage();
                this.render();
            }
        } catch (error) {
            console.error('Error updating feature:', error);
        }
    }

    removeFeature(index) {
        try {
            if (this.features.length <= 1) return;
            
            this.features = this.features.filter((_, i) => i !== index);
            if (this.activeFeature >= index && this.activeFeature > 0) {
                this.activeFeature--;
            }
            this.saveToStorage();
            this.render();
        } catch (error) {
            console.error('Error removing feature:', error);
        }
    }

    calculateROI(feature) {
        try {
            if (!feature?.effort) return 0;
            const impact = (feature.revenue * feature.customerCare * feature.confidence) / 100;
            return Math.round(impact / feature.effort);
        } catch (error) {
            console.error('Error calculating ROI:', error);
            return 0;
        }
    }

    getAnalysis() {
        try {
            const sortedFeatures = [...this.features]
                .map(f => ({
                    ...f,
                    roi: this.calculateROI(f),
                    isComplete: f.revenue && f.customerCare && f.effort && f.confidence
                }))
                .sort((a, b) => b.roi - a.roi);

            const complete = sortedFeatures.filter(f => f.isComplete);
            if (complete.length === 0) return null;

            const best = complete[0];
            const bestRatio = complete.length > 1 ? 
                Math.round((best.roi / complete[1].roi) * 100 - 100) : 0;

            const analysis = [];

            if (best.roi > 0) {
                analysis.push({
                    type: 'primary',
                    content: this.translate('best-roi', { name: best.name, roi: best.roi.toLocaleString() })
                });

                if (complete.length > 1 && bestRatio > 50) {
                    analysis.push({
                        type: 'highlight',
                        content: this.translate('roi-comparison', { ratio: bestRatio })
                    });
                }
            }

            return { analysis, sortedFeatures: complete };
        } catch (error) {
            console.error('Error getting analysis:', error);
            return null;
        }
    }

    saveToStorage() {
        try {
            localStorage.setItem('fermiFeatures', JSON.stringify({
                features: this.features,
                activeFeature: this.activeFeature,
                language: this.currentLanguage
            }));
        } catch (error) {
            console.error('Error saving to storage:', error);
        }
    }

    loadFromStorage() {
        try {
            const saved = localStorage.getItem('fermiFeatures');
            if (saved) {
                const data = JSON.parse(saved);
                this.features = data.features;
                this.activeFeature = data.activeFeature;
                this.currentLanguage = data.language || 'EN';
            }
        } catch (error) {
            console.error('Error loading from storage:', error);
        }
    }

    renderOptionGrid(container, options, field) {
        try {
            container.innerHTML = '';
            
            options.forEach(option => {
                const card = document.createElement('div');
                card.className = 'option-card';
                if (this.features[this.activeFeature]?.[field] === option.value) {
                    card.classList.add('selected');
                }

                card.innerHTML = `
                    <div class="option-label fw-bold">${this.translate(option.labelKey)}</div>
                    <div class="option-description small text-muted">${this.translate(option.descriptionKey)}</div>
                `;
                
                card.addEventListener('click', () => {
                    this.updateFeature(field, option.value);
                });
                
                container.appendChild(card);
            });
        } catch (error) {
            console.error('Error rendering option grid:', error);
        }
    }

    render() {
        try {
            // Update all translatable elements
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (key) {
                    element.textContent = this.translate(key);
                }
            });

            this.renderFeatureTabs();
            this.renderOptionSelections();
            this.renderAnalysis();
        } catch (error) {
            console.error('Error rendering:', error);
        }
    }

    renderFeatureTabs() {
        try {
            const tabsContainer = document.getElementById('feature-tabs');
            if (!tabsContainer) return;
            
            tabsContainer.innerHTML = '';

            this.features.forEach((feature, index) => {
                const tab = document.createElement('div');
                tab.className = 'feature-tab';
                
                tab.innerHTML = `
                    <button class="btn ${index === this.activeFeature ? 'btn-primary' : 'btn-outline-secondary'} w-100">
                        ${feature.name}
                    </button>
                    ${this.features.length > 1 ? `
                        <button class="btn btn-danger btn-sm remove-feature" aria-label="Remove feature">
                            <i class="bi bi-x"></i>
                        </button>
                    ` : ''}
                `;

                const mainButton = tab.querySelector('button:first-child');
                if (mainButton) {
                    mainButton.addEventListener('click', () => {
                        this.activeFeature = index;
                        this.render();
                    });
                }

                if (this.features.length > 1) {
                    const removeBtn = tab.querySelector('.remove-feature');
                    if (removeBtn) {
                        removeBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            this.removeFeature(index);
                        });
                    }
                }

                tabsContainer.appendChild(tab);
            });
        } catch (error) {
            console.error('Error rendering feature tabs:', error);
        }
    }

    renderOptionSelections() {
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

    renderAnalysis() {
        try {
            const analysisContent = document.getElementById('analysis-content');
            if (!analysisContent) return;
            
            const result = this.getAnalysis();

            if (!result) {
                analysisContent.innerHTML = `
                    <div class="text-muted">
                        <i class="bi bi-info-circle"></i>
                        ${this.translate('analysis-empty')}
                    </div>
                `;
                return;
            }

            const { analysis, sortedFeatures } = result;
            
            let html = `
                <div class="analysis-points mb-4">
                    ${analysis.map(point => `
                        <div class="analysis-point ${point.type}">
                            ${point.content}
                        </div>
                    `).join('')}
                </div>
                
                <div class="rankings mt-4 pt-4 border-top">
                    <div class="fw-bold mb-2">${this.translate('complete-rankings')}:</div>
                    ${sortedFeatures.map((feature, index) => `
                        <div class="d-flex align-items-center gap-2 mb-2">
                            <i class="bi bi-arrow-right ${index === 0 ? 'text-success' : 'text-muted'}"></i>
                            <span class="${index === 0 ? 'fw-bold' : ''}">
                                ${feature.name}: ${feature.roi.toLocaleString()} ${this.translate('roi-suffix')}
                            </span>
                        </div>
                    `).join('')}
                </div>
            `;

            analysisContent.innerHTML = html;
        } catch (error) {
            console.error('Error rendering analysis:', error);
        }
    }
}

// Initialize the calculator
const calculator = new FermiCalculator();
calculator.initialize();
