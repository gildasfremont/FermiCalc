// Initialize translations object
const translations = {
    EN: {
        // English translations remain the same
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
        // French translations
        'revenue-title': "Quel est l'impact attendu sur les revenus annuels ?",
        'revenue-description': "Considérez les revenus directs des ventes, des mises à niveau ou de la réduction du désabonnement",
        'customer-reach-title': "Combien de clients sont concernés par ce sujet ?",
        'customer-reach-description': "Considérez la taille du segment de clients affecté",
        'customer-care-title': "Dans quelle mesure ces clients s'en soucient-ils ?",
        'customer-care-description': "Basé sur les retours clients et l'étude de marché",
        'insight-title': "Notre perspective sur ce sujet est-elle pertinente ?",
        'insight-description': "Évaluez l'unicité et la valeur de notre compréhension",
        'product-payoff-title': "Dans quelle mesure notre produit répond-il à cette perspective ?",
        'product-payoff-description': "Évaluez l'efficacité de notre solution",
        'effort-title': "Quel effort cela nécessiterait-il ?",
        'effort-description': "Incluez la conception, le développement, les tests et le déploiement",
        'team-excitement-title': "L'équipe est-elle enthousiaste ?",
        'team-excitement-description': "Évaluez la motivation et l'intérêt de l'équipe",
        'confidence-title': "Quelle est notre confiance dans l'exécution ?",
        'confidence-description': "Considérez la complexité technique et l'expertise de l'équipe",
        'analysis-title': "Analyse",
        'analysis-empty': "Complétez toutes les questions pour voir l'analyse",
        'cohen-attribution': "Basé sur le cadre d'estimation Fermi de Jason Cohen, cette calculatrice aide à prioriser les fonctionnalités en appliquant les principes d'estimation Fermi aux calculs d'impact et d'effort.",
        'analysis-do-it': "Faites-le ! Le ROI et les facteurs d'équipe soutiennent fortement cette initiative.",
        'analysis-skip-it': "Passez. Le ROI ou les facteurs d'équipe ne justifient pas cette initiative.",
        'analysis-maybe': "Peut-être. Considérez ceci comme une priorité secondaire.",

        // Revenue options
        'revenue-1000': "1 000 €/an",
        'revenue-1000-desc': "Une amélioration mineure pour quelques clients",
        'revenue-10000': "10 000 €/an",
        'revenue-10000-desc': "Valeur notable pour plusieurs clients",
        'revenue-100000': "100 000 €/an",
        'revenue-100000-desc': "Valeur majeure pour de nombreux clients",
        'revenue-1000000': "1 000 000 €/an",
        'revenue-1000000-desc': "Valeur transformative pour la plupart des clients",

        // Customer Reach options
        'customer-reach-100': "Tout le monde est concerné (100%)",
        'customer-reach-100-desc': "Par définition, tout le monde",
        'customer-reach-70': "La plupart sont concernés (70%)",
        'customer-reach-70-desc': "Une majorité significative des clients",
        'customer-reach-30': "Certains sont concernés (30%)",
        'customer-reach-30-desc': "Une minorité notable de clients",
        'customer-reach-0': "Presque personne (0%)",
        'customer-reach-0-desc': "Un ou deux clients tout au plus",

        // Customer Care options
        'customer-care-1000': "Critique pour la mission",
        'customer-care-1000-desc': "Crucial pour le succès de leur projet",
        'customer-care-100': "Préoccupation sérieuse",
        'customer-care-100-desc': "Activement discuté en interne",
        'customer-care-10': "Intéressé",
        'customer-care-10-desc': "Curieux d'en savoir plus",
        'customer-care-1': "Indifférent",
        'customer-care-1-desc': "Pas particulièrement concerné",
        'customer-care-0': "Opposé",
        'customer-care-0-desc': "Activement contre",

        // Insight options
        'insight-1000': "Perspective révolutionnaire",
        'insight-1000-desc': "Change complètement la donne",
        'insight-100': "Perspective précieuse",
        'insight-100-desc': "Point de vue notable et utile",
        'insight-10': "Perspective basique",
        'insight-10-desc': "Compréhension commune",
        'insight-1': "Perspective évidente",
        'insight-1-desc': "Point de vue largement connu",
        'insight-0': "Aucune perspective",
        'insight-0-desc': "Manque de compréhension",

        // Product Payoff options
        'product-payoff-1000': "Solution convaincante",
        'product-payoff-1000-desc': "Vaut l'achat rien que pour ça",
        'product-payoff-100': "Solution forte",
        'product-payoff-100-desc': "Approche notablement efficace",
        'product-payoff-10': "Solution adéquate",
        'product-payoff-10-desc': "Répond aux besoins de base",
        'product-payoff-1': "Solution faible",
        'product-payoff-1-desc': "Efficacité minimale",
        'product-payoff-0': "Mauvaise solution",
        'product-payoff-0-desc': "Approche contre-productive",

        // Effort options
        'effort-2d': "2 jours",
        'effort-2d-desc': "Implémentation rapide",
        'effort-2w': "2 semaines",
        'effort-2w-desc': "Implémentation modérée",
        'effort-2m': "2 mois",
        'effort-2m-desc': "Implémentation majeure",

        // Team Excitement options
        'team-excitement-100': "Enthousiasme total",
        'team-excitement-100-desc': "Toute l'équipe est impatiente de travailler dessus",
        'team-excitement-10': "Enthousiasme partiel",
        'team-excitement-10-desc': "Environ la moitié de l'équipe est enthousiaste",
        'team-excitement-1': "Faible enthousiasme",
        'team-excitement-1-desc': "Une seule personne est enthousiaste",
        'team-excitement-0': "Aucun enthousiasme",
        'team-excitement-0-desc': "Personne ne veut travailler dessus",

        // Confidence options
        'confidence-100': "Haute confiance",
        'confidence-100-desc': "Expertise et expérience prouvées",
        'confidence-10': "Confiance modérée",
        'confidence-10-desc': "Probablement réalisable",
        'confidence-1': "Faible confiance",
        'confidence-1-desc': "Risque élevé d'échec",
        'confidence-0': "Aucune confiance",
        'confidence-0-desc': "Presque certain d'échouer"
    },
    ES: {
        // Spanish translations
        'revenue-title': "¿Cuál es el impacto esperado en los ingresos anuales?",
        'revenue-description': "Considere los ingresos directos de ventas, actualizaciones o reducción de cancelaciones",
        'customer-reach-title': "¿Cuántos clientes se preocupan por este tema?",
        'customer-reach-description': "Considere el tamaño del segmento de clientes afectado",
        'customer-care-title': "¿Cuánto les importa a esos clientes?",
        'customer-care-description': "Basado en comentarios de clientes e investigación de mercado",
        'insight-title': "¿Qué tan perspicaz es nuestro punto de vista sobre este tema?",
        'insight-description': "Evalúe la singularidad y el valor de nuestra comprensión",
        'product-payoff-title': "¿Qué tan efectivamente nuestro producto aprovecha la perspectiva?",
        'product-payoff-description': "Evalúe la efectividad de nuestra solución",
        'effort-title': "¿Cuánto esfuerzo requeriría?",
        'effort-description': "Incluya diseño, desarrollo, pruebas y despliegue",
        'team-excitement-title': "¿Qué tan entusiasmado está el equipo?",
        'team-excitement-description': "Evalúe la motivación e interés del equipo",
        'confidence-title': "¿Qué tan seguros estamos en nuestra ejecución?",
        'confidence-description': "Considere la complejidad técnica y la experiencia del equipo",
        'analysis-title': "Análisis",
        'analysis-empty': "Complete todas las preguntas para ver el análisis",
        'cohen-attribution': "Basado en el marco de estimación Fermi de Jason Cohen, esta calculadora ayuda a priorizar funciones aplicando principios de estimación Fermi a los cálculos de impacto y esfuerzo.",
        'analysis-do-it': "¡Hazlo! El ROI y los factores del equipo respaldan firmemente esta iniciativa.",
        'analysis-skip-it': "Sáltalo. El ROI o los factores del equipo no justifican esta iniciativa.",
        'analysis-maybe': "Tal vez. Considera esto como una prioridad secundaria.",

        // Revenue options
        'revenue-1000': "$1.000/año",
        'revenue-1000-desc': "Una mejora menor para algunos clientes",
        'revenue-10000': "$10.000/año",
        'revenue-10000-desc': "Valor notable para varios clientes",
        'revenue-100000': "$100.000/año",
        'revenue-100000-desc': "Valor importante para muchos clientes",
        'revenue-1000000': "$1.000.000/año",
        'revenue-1000000-desc': "Valor transformador para la mayoría de los clientes",

        // Customer Reach options
        'customer-reach-100': "Todos se preocupan (100%)",
        'customer-reach-100-desc': "Por definición, todos",
        'customer-reach-70': "La mayoría se preocupa (70%)",
        'customer-reach-70-desc': "Una mayoría significativa de clientes",
        'customer-reach-30': "Algunos se preocupan (30%)",
        'customer-reach-30-desc': "Una minoría notable de clientes",
        'customer-reach-0': "Casi ninguno (0%)",
        'customer-reach-0-desc': "Uno o dos clientes como máximo",

        // Customer Care options
        'customer-care-1000': "Crítico para la misión",
        'customer-care-1000-desc': "Crucial para el éxito de su proyecto",
        'customer-care-100': "Preocupación seria",
        'customer-care-100-desc': "Activamente discutido internamente",
        'customer-care-10': "Interesado",
        'customer-care-10-desc': "Curioso por saber más",
        'customer-care-1': "Indiferente",
        'customer-care-1-desc': "No particularmente preocupado",
        'customer-care-0': "Opuesto",
        'customer-care-0-desc': "Activamente en contra",

        // Insight options
        'insight-1000': "Perspectiva revolucionaria",
        'insight-1000-desc': "Cambia completamente el juego",
        'insight-100': "Perspectiva valiosa",
        'insight-100-desc': "Punto de vista notable y útil",
        'insight-10': "Perspectiva básica",
        'insight-10-desc': "Entendimiento común",
        'insight-1': "Perspectiva obvia",
        'insight-1-desc': "Punto de vista ampliamente conocido",
        'insight-0': "Sin perspectiva",
        'insight-0-desc': "Falta de entendimiento",

        // Product Payoff options
        'product-payoff-1000': "Solución convincente",
        'product-payoff-1000-desc': "Vale la pena comprarlo solo por esto",
        'product-payoff-100': "Solución fuerte",
        'product-payoff-100-desc': "Enfoque notablemente efectivo",
        'product-payoff-10': "Solución adecuada",
        'product-payoff-10-desc': "Cumple las necesidades básicas",
        'product-payoff-1': "Solución débil",
        'product-payoff-1-desc': "Efectividad mínima",
        'product-payoff-0': "Mala solución",
        'product-payoff-0-desc': "Enfoque contraproducente",

        // Effort options
        'effort-2d': "2 días",
        'effort-2d-desc': "Implementación rápida",
        'effort-2w': "2 semanas",
        'effort-2w-desc': "Implementación moderada",
        'effort-2m': "2 meses",
        'effort-2m-desc': "Implementación mayor",

        // Team Excitement options
        'team-excitement-100': "Entusiasmo total",
        'team-excitement-100-desc': "Todo el equipo está ansioso por trabajar en esto",
        'team-excitement-10': "Entusiasmo parcial",
        'team-excitement-10-desc': "Aproximadamente la mitad del equipo está entusiasmado",
        'team-excitement-1': "Bajo entusiasmo",
        'team-excitement-1-desc': "Solo una persona está entusiasmada",
        'team-excitement-0': "Sin entusiasmo",
        'team-excitement-0-desc': "Nadie quiere trabajar en esto",

        // Confidence options
        'confidence-100': "Alta confianza",
        'confidence-100-desc': "Experiencia y experticia comprobada",
        'confidence-10': "Confianza moderada",
        'confidence-10-desc': "Probable éxito",
        'confidence-1': "Baja confianza",
        'confidence-1-desc': "Alto riesgo de fracaso",
        'confidence-0': "Sin confianza",
        'confidence-0-desc': "Casi seguro que fallará"
    }
};

// Make translations available and trigger event
window.translations = translations;
window.dispatchEvent(new Event('translationsLoaded'));
