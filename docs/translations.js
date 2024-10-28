// Initialize translations object
const translations = {
    EN: {
        'revenue-title': "What's the expected annual revenue impact?",
        'revenue-description': "Consider direct revenue from sales, upgrades, or reduced churn",
        'customer-reach-title': "How many customers care about this topic?",
        'customer-reach-description': "Consider the size of the affected customer segment",
        'customer-care-title': "How much do those customers care about this?",
        'customer-care-description': "Based on customer feedback and market research",
        'insight-title': "How insightful is our perspective on this topic?",
        'insight-description': "Evaluate the uniqueness and value of our understanding",
        'product-payoff-title': "How powerfully does our product pay off the insight?",
        'product-payoff-description': "Assess the effectiveness of our solution",
        'effort-title': "How much effort would this take?",
        'effort-description': "Include design, development, testing, and deployment",
        'team-excitement-title': "How excited is the team about this?",
        'team-excitement-description': "Gauge team motivation and interest",
        'confidence-title': "How confident are we in our execution?",
        'confidence-description': "Consider technical complexity and team expertise",
        'analysis-title': "Analysis",
        'analysis-empty': "Complete all questions to see analysis",
        'cohen-attribution': "Based on Jason Cohen's Fermi estimation framework, this calculator helps prioritize features by applying Fermi estimation principles to both impact and effort calculations.",
        'analysis-do-it': "Do it! The ROI and team factors strongly support this initiative.",
        'analysis-skip-it': "Skip it. The ROI or team factors don't justify this initiative.",
        'analysis-maybe': "Maybe. Consider this as a secondary priority.",
        
        // Revenue options
        'revenue-1000': "$1,000/year",
        'revenue-1000-desc': "A minor improvement for a few customers",
        'revenue-10000': "$10,000/year",
        'revenue-10000-desc': "Noticeable value for several customers",
        'revenue-100000': "$100,000/year",
        'revenue-100000-desc': "Major value for many customers",
        'revenue-1000000': "$1,000,000/year",
        'revenue-1000000-desc': "Transformative value for most customers",

        // Customer Reach options
        'customer-reach-100': "Everyone cares (100%)",
        'customer-reach-100-desc': "Definitionally everyone",
        'customer-reach-70': "Most care (70%)",
        'customer-reach-70-desc': "A significant majority of customers",
        'customer-reach-30': "Some care (30%)",
        'customer-reach-30-desc': "A notable minority of customers",
        'customer-reach-0': "Almost none (0%)",
        'customer-reach-0-desc': "One or two customers at most",

        // Customer Care options
        'customer-care-1000': "Mission-critical",
        'customer-care-1000-desc': "Critical to their project's success",
        'customer-care-100': "Serious concern",
        'customer-care-100-desc': "Actively discussed internally",
        'customer-care-10': "Interested",
        'customer-care-10-desc': "Curious to learn more",
        'customer-care-1': "Indifferent",
        'customer-care-1-desc': "Not particularly concerned",
        'customer-care-0': "Opposed",
        'customer-care-0-desc': "Actively against it",

        // Insight options
        'insight-1000': "Game-changing insight",
        'insight-1000-desc': "Revolutionary perspective",
        'insight-100': "Valuable insight",
        'insight-100-desc': "Notable and useful viewpoint",
        'insight-10': "Basic insight",
        'insight-10-desc': "Common understanding",
        'insight-1': "Obvious insight",
        'insight-1-desc': "Widely known perspective",
        'insight-0': "No insight",
        'insight-0-desc': "Lack of understanding",

        // Product Payoff options
        'product-payoff-1000': "Compelling solution",
        'product-payoff-1000-desc': "Worth buying just for this",
        'product-payoff-100': "Strong solution",
        'product-payoff-100-desc': "Notably effective approach",
        'product-payoff-10': "Adequate solution",
        'product-payoff-10-desc': "Meets basic needs",
        'product-payoff-1': "Weak solution",
        'product-payoff-1-desc': "Minimal effectiveness",
        'product-payoff-0': "Poor solution",
        'product-payoff-0-desc': "Counterproductive approach",

        // Effort options
        'effort-2d': "2 days",
        'effort-2d-desc': "Quick implementation",
        'effort-2w': "2 weeks",
        'effort-2w-desc': "Moderate implementation",
        'effort-2m': "2 months",
        'effort-2m-desc': "Major implementation",

        // Team Excitement options
        'team-excitement-100': "Full team excitement",
        'team-excitement-100-desc': "Everyone is eager to work on it",
        'team-excitement-10': "Partial team excitement",
        'team-excitement-10-desc': "About half the team is excited",
        'team-excitement-1': "Low team excitement",
        'team-excitement-1-desc': "Only one person is excited",
        'team-excitement-0': "No team excitement",
        'team-excitement-0-desc': "No one wants to work on it",

        // Confidence options
        'confidence-100': "High confidence",
        'confidence-100-desc': "Proven expertise and experience",
        'confidence-10': "Moderate confidence",
        'confidence-10-desc': "Likely to succeed",
        'confidence-1': "Low confidence",
        'confidence-1-desc': "High risk of failure",
        'confidence-0': "No confidence",
        'confidence-0-desc': "Almost certain to fail"
    },
    FR: {
        // French translations will be added in a separate task
    },
    ES: {
        // Spanish translations will be added in a separate task
    }
};

// Make translations available and trigger event
window.translations = translations;
window.dispatchEvent(new Event('translationsLoaded'));
