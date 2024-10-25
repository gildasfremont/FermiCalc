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
    }

    translate(key, params = {}) {
        try {
            let text = translations[this.state.language][key];
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
        this.loadFromStorage();
        this.initializeEventListeners();
        this.render();
    }

    initializeEventListeners() {
        // Set up language buttons
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.updateState('language', btn.dataset.lang);
            });
        });

        this.initializeOptionGrids();
    }

    initializeOptionGrids() {
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
    }

    renderOptionGrid(container, options, field) {
        container.innerHTML = '';
        
        options.forEach(option => {
            const card = document.createElement('div');
            card.className = 'option-card';
            if (this.state[field] === option.value) {
                card.classList.add('selected');
            }

            card.innerHTML = `
                <div class="option-label fw-bold">${this.translate(option.labelKey)}</div>
                <div class="option-description small text-muted">${this.translate(option.descriptionKey)}</div>
            `;
            
            card.addEventListener('click', () => {
                this.updateState(field, option.value);
            });
            
            container.appendChild(card);
        });
    }

    calculateROI() {
        if (!this.state.effort) return 0;
        const impact = (this.state.revenue * this.state.customerCare * this.state.confidence) / 100;
        return Math.round(impact / this.state.effort);
    }

    updateState(field, value) {
        this.state[field] = value;
        this.saveToStorage();
        this.render();
    }

    getAnalysis() {
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
    }

    saveToStorage() {
        try {
            localStorage.setItem('fermiCalculator', JSON.stringify(this.state));
        } catch (error) {
            console.error('Error saving to storage:', error);
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
        }
    }

    render() {
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (key) {
                element.textContent = this.translate(key);
            }
        });

        this.renderOptionSelections();
        this.renderAnalysis();
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
        
        const analysis = this.getAnalysis();

        if (!analysis) {
            analysisContent.innerHTML = `
                <div class="text-muted">
                    <i class="bi bi-info-circle"></i>
                    ${this.translate('analysis-empty')}
                </div>
            `;
            return;
        }

        let html = `
            <div class="analysis-points">
                ${analysis.map(point => `
                    <div class="analysis-point ${point.type}">
                        ${point.content}
                    </div>
                `).join('')}
            </div>
        `;

        analysisContent.innerHTML = html;
    }
}

// Initialize the calculator when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const calculator = new FermiCalculator();
    window.calculator = calculator;
    calculator.initialize();
});
