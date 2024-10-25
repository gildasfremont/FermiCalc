const translations = {
    EN: {
        'fermi-intro': "Make better product decisions with Fermi estimation - a powerful method that uses educated guesses to quickly evaluate ideas. Break down complex problems into simpler parts to get reliable order-of-magnitude estimates.",
        'cohen-attribution': "Inspired by Jason Cohen's 'Fermi ROI' methodology, this calculator helps prioritize features by applying Fermi estimation principles to both impact and effort calculations, making ROI assessments more meaningful and actionable.",
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

        // Revenue options (unchanged)
        'revenue-1000': "$1,000/year",
        'revenue-1000-desc': "A minor improvement for a few customers",
        'revenue-10000': "$10,000/year",
        'revenue-10000-desc': "Noticeable value for several customers",
        'revenue-100000': "$100,000/year",
        'revenue-100000-desc': "Major value for many customers",
        'revenue-1000000': "$1,000,000/year",
        'revenue-1000000-desc': "Transformative value for most customers",

        // Customer Reach options (new)
        'reach-0': "No one (0)",
        'reach-0-desc': "Can't think of anyone who cares",
        'reach-30': "Some (30)",
        'reach-30-desc': "A specific segment of customers",
        'reach-70': "Most (70)",
        'reach-70-desc': "The majority of our customers",
        'reach-100': "Everyone (100)",
        'reach-100-desc': "All customers would benefit",

        // Customer Care options (updated)
        'care-0': "Don't waste my time",
        'care-0-desc': "Actively opposed to this feature",
        'care-1': "Meh, whatever",
        'care-1-desc': "Indifferent to the feature",
        'care-10': "I'm curious",
        'care-10-desc': "Interested in learning more",
        'care-100': "Serious concern",
        'care-100-desc': "This addresses a significant pain point",
        'care-1000': "Mission critical",
        'care-1000-desc': "Essential for customer success",

        // Insight options (new)
        'insight-0': "No clue",
        'insight-0-desc': "We don't understand the problem space",
        'insight-1': "Obviously",
        'insight-1-desc': "Common knowledge in the industry",
        'insight-10': "Makes sense",
        'insight-10-desc': "Logical extension of known principles",
        'insight-100': "Great point",
        'insight-100-desc': "Novel insight worth noting",
        'insight-1000': "Game changer",
        'insight-1000-desc': "Revolutionary perspective",

        // Product Payoff options (new)
        'payoff-0': "Actively harmful",
        'payoff-0-desc': "Would make things worse",
        'payoff-1': "So what?",
        'payoff-1-desc': "Minimal impact on the problem",
        'payoff-10': "It's fine",
        'payoff-10-desc': "Adequately addresses the need",
        'payoff-100': "Very nice",
        'payoff-100-desc': "Strong solution to the problem",
        'payoff-1000': "Must have",
        'payoff-1000-desc': "Worth buying just for this feature",

        // Effort options (updated)
        'effort-2d': "2 days",
        'effort-2d-desc': "Small, well-defined task",
        'effort-2w': "2 weeks",
        'effort-2w-desc': "Medium complexity, clear requirements",
        'effort-2m': "2 months",
        'effort-2m-desc': "Large project, may have unknowns",

        // Team Excitement options (new)
        'excitement-0': "No excitement",
        'excitement-0-desc': "No one wants to work on this",
        'excitement-1': "One person",
        'excitement-1-desc': "Single team member is interested",
        'excitement-10': "Half the team",
        'excitement-10-desc': "Mixed excitement levels",
        'excitement-100': "Everyone",
        'excitement-100-desc': "Full team enthusiasm",

        // Confidence options (updated)
        'confidence-0': "No way",
        'confidence-0-desc': "We can't pull this off",
        'confidence-1': "We can try...",
        'confidence-1-desc': "High uncertainty, expect issues",
        'confidence-10': "Probably doable",
        'confidence-10-desc': "Some unknowns but familiar ground",
        'confidence-100': "Got this",
        'confidence-100-desc': "Completely within our expertise",

        // Analysis messages
        'high-team-excitement': "The team is highly motivated to work on this feature",
        'low-team-excitement': "Consider team morale impact - no one is excited about this",
        'high-confidence': "We have high confidence in our ability to execute this successfully",
        'low-confidence': "Consider running a spike or prototype first due to low confidence",
        'quick-win': "This is a quick win that could be delivered in days",
        'large-effort': "This is a significant investment - consider breaking it into smaller deliverables"
    }
};
