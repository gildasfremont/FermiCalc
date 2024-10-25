const translations = {
    EN: {
        'revenue-title': "What's the expected annual revenue impact?",
        'revenue-description': "Consider direct revenue from sales, upgrades, or reduced churn",
        'customer-care-title': "How much do customers care about this?",
        'customer-care-description': "Based on customer feedback and market research",
        'effort-title': "How much effort would this take?",
        'effort-description': "Include design, development, testing, and deployment",
        'confidence-title': "How confident are we in our execution?",
        'confidence-description': "Consider technical complexity and team expertise",
        'analysis-title': "Analysis",
        'analysis-empty': "Complete all questions for at least one feature to see analysis",
        'add-feature': "Add Feature",
        'complete-rankings': "Complete Rankings",
        'roi-suffix': "ROI",

        // Revenue options
        'revenue-1000': "$1,000/year",
        'revenue-1000-desc': "A minor improvement for a few customers",
        'revenue-10000': "$10,000/year",
        'revenue-10000-desc': "Noticeable value for several customers",
        'revenue-100000': "$100,000/year",
        'revenue-100000-desc': "Major value for many customers",
        'revenue-1000000': "$1,000,000/year",
        'revenue-1000000-desc': "Transformative value for most customers",

        // Customer care options
        'care-1': "Meh, whatever",
        'care-1-desc': "Customers are indifferent or mildly interested",
        'care-10': "I'm curious",
        'care-10-desc': "Customers want to learn more about this",
        'care-100': "Serious concern",
        'care-100-desc': "This addresses a significant pain point",
        'care-1000': "Mission critical",
        'care-1000-desc': "This is essential for customer success",

        // Effort options
        'effort-2': "2 days",
        'effort-2-desc': "Small, well-defined task",
        'effort-10': "2 weeks",
        'effort-10-desc': "Medium complexity, clear requirements",
        'effort-45': "2 months",
        'effort-45-desc': "Large project, may have unknowns",

        // Confidence options
        'confidence-1': "I mean, we can try...",
        'confidence-1-desc': "High uncertainty, novel problem space",
        'confidence-10': "We can probably do this",
        'confidence-10-desc': "Some unknowns but familiar territory",
        'confidence-100': "Completely within expertise",
        'confidence-100-desc': "We've done this before successfully",

        // Analysis messages
        'best-roi': "{name} is the most efficient choice with an ROI of {roi}",
        'roi-comparison': "Its ROI is {ratio}% higher than the next best option",
        'high-confidence': "We have high confidence in our ability to execute this feature successfully",
        'low-confidence': "Consider running a spike or prototype first due to low confidence",
        'quick-win': "This is a quick win that could be delivered in days",
        'large-effort': "This is a significant investment - consider breaking it into smaller deliverables"
    },
    FR: {
        'revenue-title': "Quel est l'impact attendu sur les revenus annuels ?",
        'revenue-description': "Considérez les revenus directs des ventes, des mises à niveau ou de la réduction du désabonnement",
        'customer-care-title': "Dans quelle mesure les clients s'en soucient-ils ?",
        'customer-care-description': "Basé sur les retours clients et l'étude de marché",
        'effort-title': "Quel effort cela nécessiterait-il ?",
        'effort-description': "Inclure la conception, le développement, les tests et le déploiement",
        'confidence-title': "Quelle est notre confiance dans l'exécution ?",
        'confidence-description': "Considérez la complexité technique et l'expertise de l'équipe",
        'analysis-title': "Analyse",
        'analysis-empty': "Complétez toutes les questions pour au moins une fonctionnalité pour voir l'analyse",
        'add-feature': "Ajouter une fonctionnalité",
        'complete-rankings': "Classements complets",
        'roi-suffix': "ROI",

        // Revenue options
        'revenue-1000': "1 000 €/an",
        'revenue-1000-desc': "Une amélioration mineure pour quelques clients",
        'revenue-10000': "10 000 €/an",
        'revenue-10000-desc': "Valeur notable pour plusieurs clients",
        'revenue-100000': "100 000 €/an",
        'revenue-100000-desc': "Valeur majeure pour de nombreux clients",
        'revenue-1000000': "1 000 000 €/an",
        'revenue-1000000-desc': "Valeur transformative pour la plupart des clients",

        // Customer care options
        'care-1': "Bof, peu importe",
        'care-1-desc': "Les clients sont indifférents ou légèrement intéressés",
        'care-10': "Je suis curieux",
        'care-10-desc': "Les clients veulent en savoir plus",
        'care-100': "Préoccupation sérieuse",
        'care-100-desc': "Cela résout un point de douleur important",
        'care-1000': "Mission critique",
        'care-1000-desc': "C'est essentiel pour le succès des clients",

        // Effort options
        'effort-2': "2 jours",
        'effort-2-desc': "Tâche simple et bien définie",
        'effort-10': "2 semaines",
        'effort-10-desc': "Complexité moyenne, exigences claires",
        'effort-45': "2 mois",
        'effort-45-desc': "Grand projet, peut avoir des inconnues",

        // Confidence options
        'confidence-1': "On peut essayer...",
        'confidence-1-desc': "Grande incertitude, domaine nouveau",
        'confidence-10': "On peut probablement le faire",
        'confidence-10-desc': "Quelques inconnues mais terrain familier",
        'confidence-100': "Totalement dans notre expertise",
        'confidence-100-desc': "Nous l'avons déjà fait avec succès",

        // Analysis messages
        'best-roi': "{name} est le choix le plus efficace avec un ROI de {roi}",
        'roi-comparison': "Son ROI est {ratio}% plus élevé que la prochaine meilleure option",
        'high-confidence': "Nous avons une grande confiance dans notre capacité à exécuter cette fonctionnalité",
        'low-confidence': "Envisagez de faire un prototype en raison de la faible confiance",
        'quick-win': "C'est une victoire rapide qui pourrait être livrée en quelques jours",
        'large-effort': "C'est un investissement important - envisagez de le diviser en plus petites livraisons"
    },
    ES: {
        'revenue-title': "¿Cuál es el impacto esperado en los ingresos anuales?",
        'revenue-description': "Considere ingresos directos de ventas, actualizaciones o reducción de cancelaciones",
        'customer-care-title': "¿Cuánto les importa esto a los clientes?",
        'customer-care-description': "Basado en comentarios de clientes e investigación de mercado",
        'effort-title': "¿Cuánto esfuerzo requeriría?",
        'effort-description': "Incluye diseño, desarrollo, pruebas y despliegue",
        'confidence-title': "¿Qué tan seguros estamos en la ejecución?",
        'confidence-description': "Considere la complejidad técnica y la experiencia del equipo",
        'analysis-title': "Análisis",
        'analysis-empty': "Complete todas las preguntas para al menos una función para ver el análisis",
        'add-feature': "Añadir función",
        'complete-rankings': "Rankings completos",
        'roi-suffix': "ROI",

        // Revenue options
        'revenue-1000': "$1,000/año",
        'revenue-1000-desc': "Una mejora menor para algunos clientes",
        'revenue-10000': "$10,000/año",
        'revenue-10000-desc': "Valor notable para varios clientes",
        'revenue-100000': "$100,000/año",
        'revenue-100000-desc': "Valor importante para muchos clientes",
        'revenue-1000000': "$1,000,000/año",
        'revenue-1000000-desc': "Valor transformador para la mayoría de los clientes",

        // Customer care options
        'care-1': "Meh, lo que sea",
        'care-1-desc': "Los clientes son indiferentes o están levemente interesados",
        'care-10': "Tengo curiosidad",
        'care-10-desc': "Los clientes quieren saber más sobre esto",
        'care-100': "Preocupación seria",
        'care-100-desc': "Esto aborda un punto de dolor significativo",
        'care-1000': "Misión crítica",
        'care-1000-desc': "Esto es esencial para el éxito del cliente",

        // Effort options
        'effort-2': "2 días",
        'effort-2-desc': "Tarea pequeña y bien definida",
        'effort-10': "2 semanas",
        'effort-10-desc': "Complejidad media, requisitos claros",
        'effort-45': "2 meses",
        'effort-45-desc': "Proyecto grande, puede tener incógnitas",

        // Confidence options
        'confidence-1': "Bueno, podemos intentar...",
        'confidence-1-desc': "Alta incertidumbre, espacio del problema nuevo",
        'confidence-10': "Probablemente podamos hacerlo",
        'confidence-10-desc': "Algunas incógnitas pero territorio familiar",
        'confidence-100': "Completamente dentro de nuestra experiencia",
        'confidence-100-desc': "Lo hemos hecho antes con éxito",

        // Analysis messages
        'best-roi': "{name} es la opción más eficiente con un ROI de {roi}",
        'roi-comparison': "Su ROI es {ratio}% más alto que la siguiente mejor opción",
        'high-confidence': "Tenemos alta confianza en nuestra capacidad para ejecutar esta función",
        'low-confidence': "Considere hacer un prototipo primero debido a la baja confianza",
        'quick-win': "Esta es una victoria rápida que podría entregarse en días",
        'large-effort': "Esta es una inversión significativa - considere dividirla en entregas más pequeñas"
    }
};
