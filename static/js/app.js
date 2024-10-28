class FermiCalculator {
    constructor() {
        if (typeof translations === 'undefined') {
            throw new Error('Translations not loaded');
        }

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
        
        if (document.readyState === 'complete') {
            this.initialize();
        } else {
            window.addEventListener('load', () => this.initialize());
        }
    }

    initialize() {
        try {
            this.loadFromStorage();
            this.initializeEventListeners();
            this.initializeClearButton();
            this.initializeLanguageSelect();
            this.initializeOptions();
            this.render();
        } catch (error) {
            console.error('Initialization error:', error);
            this.handleError('initialization', error);
        }
    }

    translate(key, params = {}) {
        try {
            // Check if translations object exists
            if (typeof translations === 'undefined') {
                console.error('Translations not loaded');
                return key;
            }

            // Check if selected language exists
            if (!translations[this.state.language]) {
                console.error(`Language ${this.state.language} not found`);
                return key;
            }

            // Get translation
            let text = translations[this.state.language][key];
            
            // If translation not found, try English as fallback
            if (!text && this.state.language !== 'EN') {
                text = translations['EN'][key];
            }

            // If still no translation, return key
            if (!text) {
                return key;
            }

            // Replace parameters
            Object.entries(params).forEach(([param, value]) => {
                text = text.replace(`{${param}}`, value);
            });
            
            return text;
        } catch (error) {
            console.error('Translation error:', error);
            return key;
        }
    }

    // Rest of the class implementation remains the same
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

    initializeLanguageSelect() {
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.value = this.state.language;
            languageSelect.addEventListener('change', (event) => {
                this.updateState('language', event.target.value);
            });
        }
    }

    // ... Rest of the class implementation remains unchanged
}
