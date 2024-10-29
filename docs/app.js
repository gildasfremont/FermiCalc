// Wrap everything in a self-executing function
(function() {
    // Define translations object if not already defined
    window.translations = window.translations || {};

    // Wait for translations to load
    const translationsLoaded = new Promise((resolve, reject) => {
        if (window.translations && Object.keys(window.translations).length > 0) {
            resolve();
        } else {
            const timeout = setTimeout(() => {
                reject(new Error('Translations loading timeout'));
            }, 5000);

            window.addEventListener('translationsLoaded', () => {
                clearTimeout(timeout);
                resolve();
            });
        }
    });

    // FermiCalculator class definition
    class FermiCalculator {
        constructor() {
            this.selectedOptions = {};
            this.currentLanguage = 'EN';
        }

        initialize() {
            this.setupLanguageSelector();
            this.setupClearButton();
            this.setupOptions();
            this.translateUI();
            this.attachScrollBehavior();
        }

        setupLanguageSelector() {
            const languageSelect = document.getElementById('languageSelect');
            if (languageSelect) {
                languageSelect.addEventListener('change', (e) => {
                    this.currentLanguage = e.target.value;
                    this.translateUI();
                });
            }
        }

        setupClearButton() {
            const clearButton = document.getElementById('clearButton');
            if (clearButton) {
                clearButton.addEventListener('click', () => this.clearAllSelections());
            }
        }

        clearAllSelections() {
            this.selectedOptions = {};
            document.querySelectorAll('.option-card').forEach(card => {
                card.classList.remove('selected');
            });
            this.updateAnalysis();
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
        }

        setupOptions() {
            const optionsData = {
                revenue: [
                    { value: 1000, translation: 'revenue-1000', description: 'revenue-1000-desc' },
                    { value: 10000, translation: 'revenue-10000', description: 'revenue-10000-desc' },
                    { value: 100000, translation: 'revenue-100000', description: 'revenue-100000-desc' },
                    { value: 1000000, translation: 'revenue-1000000', description: 'revenue-1000000-desc' }
                ],
                customerReach: [
                    { value: 100, translation: 'customer-reach-100', description: 'customer-reach-100-desc' },
                    { value: 70, translation: 'customer-reach-70', description: 'customer-reach-70-desc' },
                    { value: 30, translation: 'customer-reach-30', description: 'customer-reach-30-desc' },
                    { value: 0, translation: 'customer-reach-0', description: 'customer-reach-0-desc' }
                ],
                customerCare: [
                    { value: 1000, translation: 'customer-care-1000', description: 'customer-care-1000-desc' },
                    { value: 100, translation: 'customer-care-100', description: 'customer-care-100-desc' },
                    { value: 10, translation: 'customer-care-10', description: 'customer-care-10-desc' },
                    { value: 1, translation: 'customer-care-1', description: 'customer-care-1-desc' },
                    { value: 0, translation: 'customer-care-0', description: 'customer-care-0-desc' }
                ],
                insight: [
                    { value: 1000, translation: 'insight-1000', description: 'insight-1000-desc' },
                    { value: 100, translation: 'insight-100', description: 'insight-100-desc' },
                    { value: 10, translation: 'insight-10', description: 'insight-10-desc' },
                    { value: 1, translation: 'insight-1', description: 'insight-1-desc' },
                    { value: 0, translation: 'insight-0', description: 'insight-0-desc' }
                ],
                productPayoff: [
                    { value: 1000, translation: 'product-payoff-1000', description: 'product-payoff-1000-desc' },
                    { value: 100, translation: 'product-payoff-100', description: 'product-payoff-100-desc' },
                    { value: 10, translation: 'product-payoff-10', description: 'product-payoff-10-desc' },
                    { value: 1, translation: 'product-payoff-1', description: 'product-payoff-1-desc' },
                    { value: 0, translation: 'product-payoff-0', description: 'product-payoff-0-desc' }
                ],
                effort: [
                    { value: 2, translation: 'effort-2d', description: 'effort-2d-desc' },
                    { value: 14, translation: 'effort-2w', description: 'effort-2w-desc' },
                    { value: 60, translation: 'effort-2m', description: 'effort-2m-desc' }
                ],
                teamExcitement: [
                    { value: 100, translation: 'team-excitement-100', description: 'team-excitement-100-desc' },
                    { value: 10, translation: 'team-excitement-10', description: 'team-excitement-10-desc' },
                    { value: 1, translation: 'team-excitement-1', description: 'team-excitement-1-desc' },
                    { value: 0, translation: 'team-excitement-0', description: 'team-excitement-0-desc' }
                ],
                confidence: [
                    { value: 100, translation: 'confidence-100', description: 'confidence-100-desc' },
                    { value: 10, translation: 'confidence-10', description: 'confidence-10-desc' },
                    { value: 1, translation: 'confidence-1', description: 'confidence-1-desc' },
                    { value: 0, translation: 'confidence-0', description: 'confidence-0-desc' }
                ]
            };

            Object.entries(optionsData).forEach(([category, options]) => {
                const container = document.getElementById(`${category}Options`);
                if (container) {
                    options.forEach(option => {
                        const card = document.createElement('div');
                        card.className = 'option-card';
                        card.innerHTML = `
                            <div class="option-title" data-translate="${option.translation}"></div>
                            <div class="option-description small" data-translate="${option.description}"></div>
                        `;
                        card.addEventListener('click', () => {
                            container.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
                            card.classList.add('selected');
                            this.selectedOptions[category] = option.value;
                            this.updateAnalysis();
                            
                            // Find next unanswered question
                            const questions = document.querySelectorAll('.fermi-question');
                            const currentIndex = Array.from(questions).findIndex(q => 
                                q.contains(container));
                            if (currentIndex < questions.length - 1) {
                                questions[currentIndex + 1].scrollIntoView({ 
                                    behavior: 'smooth',
                                    block: 'center'
                                });
                            } else {
                                document.getElementById('analysis-content').scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'center'
                                });
                            }
                        });
                        container.appendChild(card);
                    });
                }
            });
        }

        translateUI() {
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[this.currentLanguage] && translations[this.currentLanguage][key]) {
                    element.textContent = translations[this.currentLanguage][key];
                }
            });
            this.updateAnalysis();
        }

        getUnansweredQuestions() {
            const questions = [
                { id: 'revenue', translation: 'revenue-title' },
                { id: 'customerReach', translation: 'customer-reach-title' },
                { id: 'customerCare', translation: 'customer-care-title' },
                { id: 'insight', translation: 'insight-title' },
                { id: 'productPayoff', translation: 'product-payoff-title' },
                { id: 'effort', translation: 'effort-title' },
                { id: 'teamExcitement', translation: 'team-excitement-title' },
                { id: 'confidence', translation: 'confidence-title' }
            ];

            return questions.filter(q => this.selectedOptions[q.id] === undefined)
                .map(q => ({
                    id: q.id,
                    title: translations[this.currentLanguage][q.translation]
                }));
        }

        updateAnalysis() {
            const analysisContent = document.getElementById('analysis-content');
            if (!analysisContent) return;

            const unanswered = this.getUnansweredQuestions();
            if (unanswered.length > 0) {
                analysisContent.innerHTML = `
                    <div class="card-body p-5">
                        <div class="alert alert-warning">
                            ${unanswered.map(q => `
                                <a href="#${q.id}Options" class="d-block mb-2">${q.title}</a>
                            `).join('')}
                        </div>
                    </div>
                `;
                return;
            }

            // Calculate ROI and impact
            const impact = (
                this.selectedOptions.revenue *
                this.selectedOptions.customerReach *
                this.selectedOptions.customerCare *
                this.selectedOptions.insight *
                this.selectedOptions.productPayoff
            ) / 1000000; // Normalize the large numbers

            const roi = impact / this.selectedOptions.effort;
            const excitement = this.selectedOptions.teamExcitement;
            const confidence = this.selectedOptions.confidence;

            let recommendationClass = 'warning';
            let recommendation = '';

            if (roi > 1000 && excitement >= 10 && confidence >= 10) {
                recommendationClass = 'primary';
                recommendation = translations[this.currentLanguage]['analysis-do-it'];
            } else if (roi < 100 || excitement === 0 || confidence === 0) {
                recommendationClass = 'warning';
                recommendation = translations[this.currentLanguage]['analysis-skip-it'];
            } else {
                recommendationClass = 'positive';
                recommendation = translations[this.currentLanguage]['analysis-maybe'];
            }

            analysisContent.innerHTML = `
                <div class="card-body p-5">
                    <h4 class="mb-4" data-translate="analysis-title">Analysis</h4>
                    <div class="analysis-point ${recommendationClass} mb-4">
                        ${recommendation}
                    </div>
                </div>
            `;
        }

        attachScrollBehavior() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const element = document.querySelector(this.getAttribute('href'));
                    if (element) {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }
                });
            });
        }
    }

    // Make FermiCalculator available globally
    window.FermiCalculator = FermiCalculator;

    // Initialization with retries
    function retryInitialization(maxRetries = 3, currentRetry = 0) {
        Promise.all([
            translationsLoaded,
            new Promise(resolve => {
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', resolve);
                } else {
                    resolve();
                }
            })
        ]).then(() => {
            window.calculator = new FermiCalculator();
            window.calculator.initialize();
        }).catch(error => {
            console.error('Failed to initialize calculator:', error);
            if (currentRetry < maxRetries) {
                setTimeout(() => retryInitialization(maxRetries, currentRetry + 1), 1000);
            }
        });
    }

    // Start initialization
    retryInitialization();
})();
