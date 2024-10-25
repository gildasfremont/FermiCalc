// Create a self-executing function to avoid global scope pollution
(function() {
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

            // Initialize options
            this.initializeOptions();
            
            // Bind methods
            this.bindMethods();

            // Initialize the app
            this.initialize();
        }

        bindMethods() {
            const methods = [
                'initialize',
                'initializeEventListeners',
                'addFeature',
                'removeFeature',
                'updateFeature',
                'calculateROI',
                'getAnalysis',
                'saveToStorage',
                'loadFromStorage',
                'render',
                'renderFeatureSelect',
                'renderOptionSelections',
                'renderAnalysis',
                'renderOptionGrid',
                'translate'
            ];

            methods.forEach(method => {
                if (typeof this[method] === 'function') {
                    this[method] = this[method].bind(this);
                }
            });
        }

        initializeOptions() {
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
        }

        initialize() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this.loadFromStorage();
                    this.initializeEventListeners();
                    this.render();
                });
            } else {
                this.loadFromStorage();
                this.initializeEventListeners();
                this.render();
            }
        }

        initializeEventListeners() {
            // Add feature button
            const addFeatureBtn = document.getElementById('add-feature');
            if (addFeatureBtn) {
                addFeatureBtn.addEventListener('click', this.addFeature);
            }

            // Feature select
            const featureSelect = document.getElementById('feature-select');
            if (featureSelect) {
                featureSelect.addEventListener('change', (e) => {
                    const selectedIndex = parseInt(e.target.value);
                    if (!isNaN(selectedIndex) && selectedIndex >= 0 && selectedIndex < this.features.length) {
                        this.activeFeature = selectedIndex;
                        this.render();
                    }
                });
            }

            // Language buttons
            const languageBtns = document.querySelectorAll('.language-btn');
            languageBtns?.forEach(btn => {
                btn.addEventListener('click', () => {
                    const lang = btn.dataset.lang;
                    if (lang && translations[lang]) {
                        this.currentLanguage = lang;
                        this.saveToStorage();
                        this.render();
                    }
                });
            });

            // Initialize option grids
            this.renderOptionSelections();
        }

        addFeature() {
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
        }

        removeFeature(index) {
            if (this.features.length <= 1) return;
            
            this.features = this.features.filter((_, i) => i !== index);
            if (this.activeFeature >= index && this.activeFeature > 0) {
                this.activeFeature--;
            }
            this.saveToStorage();
            this.render();
        }

        updateFeature(field, value) {
            if (this.features[this.activeFeature]) {
                this.features[this.activeFeature][field] = value;
                this.saveToStorage();
                this.render();
            }
        }

        calculateROI(feature) {
            if (!feature?.effort) return 0;
            const impact = (feature.revenue * feature.customerCare * feature.confidence) / 100;
            return Math.round(impact / feature.effort);
        }

        getAnalysis() {
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
        }

        translate(key, params = {}) {
            try {
                let text = translations[this.currentLanguage][key] || key;
                Object.entries(params).forEach(([param, value]) => {
                    text = text.replace(`{${param}}`, value);
                });
                return text;
            } catch (error) {
                return key;
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
                    this.features = data.features || [this.features[0]];
                    this.activeFeature = Math.min(data.activeFeature || 0, this.features.length - 1);
                    this.currentLanguage = data.language || 'EN';
                }
            } catch (error) {
                console.error('Error loading from storage:', error);
            }
        }

        renderFeatureSelect() {
            const select = document.getElementById('feature-select');
            if (!select) return;

            select.innerHTML = this.features.map((feature, index) => `
                <option value="${index}" ${index === this.activeFeature ? 'selected' : ''}>
                    ${feature.name}
                </option>
            `).join('');

            // Update remove button
            const removeButton = document.getElementById('remove-feature-button');
            if (removeButton) {
                removeButton.style.display = this.features.length > 1 ? 'block' : 'none';
            } else if (this.features.length > 1) {
                const button = document.createElement('button');
                button.id = 'remove-feature-button';
                button.className = 'btn btn-outline-danger ms-2';
                button.innerHTML = '<i class="bi bi-trash"></i>';
                button.onclick = () => this.removeFeature(this.activeFeature);
                select.parentNode.appendChild(button);
            }
        }

        renderOptionGrid(container, options, field) {
            if (!container) return;
            
            container.innerHTML = '';
            
            options.forEach(option => {
                const card = document.createElement('div');
                card.className = 'option-card';
                if (this.features[this.activeFeature]?.[field] === option.value) {
                    card.classList.add('selected');
                }

                card.innerHTML = `
                    <div class="option-label">${this.translate(option.labelKey)}</div>
                    <div class="option-description">${this.translate(option.descriptionKey)}</div>
                `;
                
                card.addEventListener('click', () => this.updateFeature(field, option.value));
                container.appendChild(card);
            });
        }

        renderOptionSelections() {
            ['revenue', 'customerCare', 'effort', 'confidence'].forEach(field => {
                const container = document.querySelector(`.${field}Options`);
                if (container) {
                    this.renderOptionGrid(container, this[`${field}Options`], field);
                }
            });
        }

        renderAnalysis() {
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
            analysisContent.innerHTML = `
                <div class="analysis-points mb-4">
                    ${analysis.map(point => `
                        <div class="analysis-point ${point.type}">
                            ${point.content}
                        </div>
                    `).join('')}
                </div>
                
                <div class="rankings">
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
        }

        render() {
            // Update translations
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (key) {
                    element.textContent = this.translate(key);
                }
            });

            this.renderFeatureSelect();
            this.renderOptionSelections();
            this.renderAnalysis();
        }
    }

    // Initialize the calculator
    window.calculator = new FermiCalculator();
})();
