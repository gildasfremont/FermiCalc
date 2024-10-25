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

        // Bind all methods
        this.addFeature = this.addFeature.bind(this);
        this.removeFeature = this.removeFeature.bind(this);
        this.updateFeature = this.updateFeature.bind(this);
        this.calculateROI = this.calculateROI.bind(this);
        this.getAnalysis = this.getAnalysis.bind(this);
        this.saveToStorage = this.saveToStorage.bind(this);
        this.loadFromStorage = this.loadFromStorage.bind(this);
        this.render = this.render.bind(this);
        this.renderFeatureTabs = this.renderFeatureTabs.bind(this);
        this.renderOptionSelections = this.renderOptionSelections.bind(this);
        this.renderAnalysis = this.renderAnalysis.bind(this);
        this.renderOptionGrid = this.renderOptionGrid.bind(this);
        this.translate = this.translate.bind(this);
        this.initialize = this.initialize.bind(this);
        this.initializeApp = this.initializeApp.bind(this);
        this.initializeEventListeners = this.initializeEventListeners.bind(this);
        this.initializeOptionGrids = this.initializeOptionGrids.bind(this);

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

    // ... rest of the class methods remain the same ...
}

// Initialize the calculator
const calculator = new FermiCalculator();
calculator.initialize();
