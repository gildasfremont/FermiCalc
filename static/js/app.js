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

        this.revenueOptions = [
            { value: 1000, label: "$1,000/year", description: "A minor improvement for a few customers" },
            { value: 10000, label: "$10,000/year", description: "Noticeable value for several customers" },
            { value: 100000, label: "$100,000/year", description: "Major value for many customers" },
            { value: 1000000, label: "$1,000,000/year", description: "Transformative value for most customers" }
        ];

        this.customerCareOptions = [
            { value: 1, label: "Meh, whatever", description: "Customers are indifferent or mildly interested" },
            { value: 10, label: "I'm curious", description: "Customers want to learn more about this" },
            { value: 100, label: "Serious concern", description: "This addresses a significant pain point" },
            { value: 1000, label: "Mission critical", description: "This is essential for customer success" }
        ];

        this.effortOptions = [
            { value: 2, label: "2 days", description: "Small, well-defined task" },
            { value: 10, label: "2 weeks", description: "Medium complexity, clear requirements" },
            { value: 45, label: "2 months", description: "Large project, may have unknowns" }
        ];

        this.confidenceOptions = [
            { value: 1, label: "I mean, we can try...", description: "High uncertainty, novel problem space" },
            { value: 10, label: "We can probably do this", description: "Some unknowns but familiar territory" },
            { value: 100, label: "Completely within expertise", description: "We've done this before successfully" }
        ];

        // Wait for DOM to be fully loaded before initializing
        document.addEventListener('DOMContentLoaded', () => {
            this.initialize();
        });
    }

    initialize() {
        try {
            this.initializeEventListeners();
            this.loadFromStorage();
            this.render();
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }

    initializeEventListeners() {
        try {
            const addFeatureBtn = document.getElementById('add-feature');
            if (addFeatureBtn) {
                addFeatureBtn.addEventListener('click', () => this.addFeature());
            }

            // Initialize language switcher
            const languageBtns = document.querySelectorAll('.language-btn');
            if (languageBtns) {
                languageBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        this.currentLanguage = btn.dataset.lang;
                        this.render();
                    });
                });
            }
            
            // Initialize option grids
            this.initializeOptionGrids();
        } catch (error) {
            console.error('Event listener initialization error:', error);
        }
    }

    initializeOptionGrids() {
        const optionSets = [
            { containerId: 'revenue-options', options: this.revenueOptions, field: 'revenue' },
            { containerId: 'customer-care-options', options: this.customerCareOptions, field: 'customerCare' },
            { containerId: 'effort-options', options: this.effortOptions, field: 'effort' },
            { containerId: 'confidence-options', options: this.confidenceOptions, field: 'confidence' }
        ];

        optionSets.forEach(({ containerId, options, field }) => {
            this.renderOptionGrid(containerId, options, field);
        });
    }

    renderOptionGrid(containerId, options, field) {
        try {
            const container = document.querySelector(`.${containerId}`);
            if (!container) {
                console.warn(`Container not found: ${containerId}`);
                return;
            }
            
            container.innerHTML = '';
            
            options.forEach(option => {
                const card = document.createElement('div');
                card.className = 'option-card';
                card.innerHTML = `
                    <div class="option-label fw-bold">${option.label}</div>
                    <div class="option-description small text-muted">${option.description}</div>
                `;
                
                card.addEventListener('click', () => {
                    this.updateFeature(field, option.value);
                    this.render();
                });
                
                container.appendChild(card);
            });
        } catch (error) {
            console.error(`Error rendering option grid for ${containerId}:`, error);
        }
    }

    calculateROI(feature) {
        if (!feature.effort) return 0;
        const impact = (feature.revenue * feature.customerCare * feature.confidence) / 100;
        return Math.round(impact / feature.effort);
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
        this.features = this.features.filter((_, i) => i !== index);
        if (this.activeFeature >= index && this.activeFeature > 0) {
            this.activeFeature--;
        }
        this.saveToStorage();
        this.render();
    }

    updateFeature(field, value) {
        this.features[this.activeFeature][field] = value;
        this.saveToStorage();
        this.render();
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
                content: `${best.name} is the most efficient choice with an ROI of ${best.roi.toLocaleString()}`
            });

            if (complete.length > 1 && bestRatio > 50) {
                analysis.push({
                    type: 'highlight',
                    content: `Its ROI is ${bestRatio}% higher than the next best option`
                });
            }
        }

        if (best.confidence === 100) {
            analysis.push({
                type: 'positive',
                content: 'We have high confidence in our ability to execute this feature successfully'
            });
        } else if (best.confidence === 1) {
            analysis.push({
                type: 'warning',
                content: 'Consider running a spike or prototype first due to low confidence'
            });
        }

        if (best.effort === 2) {
            analysis.push({
                type: 'positive',
                content: 'This is a quick win that could be delivered in days'
            });
        } else if (best.effort === 45) {
            analysis.push({
                type: 'warning',
                content: 'This is a significant investment - consider breaking it into smaller deliverables'
            });
        }

        return { analysis, sortedFeatures: complete };
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

    render() {
        try {
            this.renderFeatureTabs();
            this.renderOptionSelections();
            this.renderAnalysis();
        } catch (error) {
            console.error('Render error:', error);
        }
    }

    renderFeatureTabs() {
        try {
            const tabsContainer = document.getElementById('feature-tabs');
            if (!tabsContainer) {
                console.warn('Feature tabs container not found');
                return;
            }
            
            tabsContainer.innerHTML = '';

            this.features.forEach((feature, index) => {
                const tab = document.createElement('div');
                tab.className = 'feature-tab';
                tab.innerHTML = `
                    <button class="btn ${index === this.activeFeature ? 'btn-primary' : 'btn-outline-secondary'}">
                        ${feature.name}
                    </button>
                    ${this.features.length > 1 ? `
                        <button class="btn btn-danger btn-sm remove-feature">
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
            const currentFeature = this.features[this.activeFeature];
            
            // Clear all selected states
            const optionCards = document.querySelectorAll('.option-card');
            optionCards?.forEach(card => {
                card.classList.remove('selected');
            });

            // Update selected states with null checks
            ['revenue', 'customerCare', 'effort', 'confidence'].forEach(field => {
                const value = currentFeature[field];
                const container = document.querySelector(`.${field}-options`);
                if (!container) {
                    console.warn(`Options container not found: ${field}-options`);
                    return;
                }
                
                const cards = container.querySelectorAll('.option-card');
                if (!cards || cards.length === 0) {
                    console.warn(`No option cards found for ${field}`);
                    return;
                }
                
                cards.forEach((card, index) => {
                    const option = this[`${field}Options`][index];
                    if (option.value === value) {
                        card.classList.add('selected');
                    }
                });
            });
        } catch (error) {
            console.error('Error rendering option selections:', error);
        }
    }

    renderAnalysis() {
        try {
            const analysisContent = document.getElementById('analysis-content');
            if (!analysisContent) {
                console.warn('Analysis content container not found');
                return;
            }
            
            const result = this.getAnalysis();

            if (!result) {
                analysisContent.innerHTML = `
                    <div class="text-muted">
                        <i class="bi bi-info-circle"></i>
                        Complete all questions for at least one feature to see analysis
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
                    <div class="fw-bold mb-2">Complete Rankings:</div>
                    ${sortedFeatures.map((feature, index) => `
                        <div class="d-flex align-items-center gap-2 mb-2">
                            <i class="bi bi-arrow-right ${index === 0 ? 'text-success' : 'text-muted'}"></i>
                            <span class="${index === 0 ? 'fw-bold' : ''}">
                                ${feature.name}: ${feature.roi.toLocaleString()} ROI
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

// Initialize the calculator when the page loads
const calculator = new FermiCalculator();
