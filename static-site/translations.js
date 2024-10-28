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
        'reach-0': "No one (0)",
        'reach-0-desc': "Can't think of anyone who cares",
        'reach-30': "Some (30)",
        'reach-30-desc': "A specific segment of customers",
        'reach-70': "Most (70)",
        'reach-70-desc': "The majority of our customers",
        'reach-100': "Everyone (100)",
        'reach-100-desc': "All customers would benefit",

        // Customer Care options
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

        // Insight options
        'insight-0': "No clue",
        'insight-0-desc': "No clue what you're even talking about",
        'insight-1': "Basic",
        'insight-1-desc': "No shit, Sherlock",
        'insight-10': "Clear",
        'insight-10-desc': "Yup, OK, makes sense",
        'insight-100': "Notable",
        'insight-100-desc': "I took notes, thanks, that's a great point",
        'insight-1000': "Revolutionary",
        'insight-1000-desc': "Wow!!! This changes everything",

        // Product Payoff options
        'payoff-0': "Negative",
        'payoff-0-desc': "I actively do not want this",
        'payoff-1': "Minimal",
        'payoff-1-desc': "So what?",
        'payoff-10': "Decent",
        'payoff-10-desc': "That's fine",
        'payoff-100': "Strong",
        'payoff-100-desc': "Ohhh, nice, ok I'll take a look",
        'payoff-1000': "Game-changing",
        'payoff-1000-desc': "Whoa, I'll buy our product just for that alone!",

        // Team Excitement options
        'excitement-0': "None",
        'excitement-0-desc': "No one is excited to work on it",
        'excitement-1': "Low",
        'excitement-1-desc': "One person is excited to work on it",
        'excitement-10': "Medium",
        'excitement-10-desc': "About half the team is excited to work on it",
        'excitement-100': "High",
        'excitement-100-desc': "All, or all but one, is excited to work on it",

        // Confidence options
        'confidence-0': "None",
        'confidence-0-desc': "There's no way we can pull this off",
        'confidence-1': "Low",
        'confidence-1-desc': "I mean we can try, but don't be surprised when it fails",
        'confidence-10': "Medium",
        'confidence-10-desc': "We can probably do this; we'll be surprised if it goes very wrong",
        'confidence-100': "High",
        'confidence-100-desc': "This is completely within our domain of expertise",

        // Effort options
        'effort-2d': "2 days",
        'effort-2d-desc': "A quick implementation",
        'effort-2w': "2 weeks",
        'effort-2w-desc': "A moderate project",
        'effort-2m': "2 months",
        'effort-2m-desc': "A major undertaking",

        // Analysis messages
        'high-team-excitement': "The team is highly motivated to work on this feature",
        'low-team-excitement': "Consider team morale impact - no one is excited about this",
        'high-confidence': "We have high confidence in our ability to execute this successfully",
        'low-confidence': "Consider running a spike or prototype first due to low confidence",
        'quick-win': "This is a quick win that could be delivered in days",
        'large-effort': "This is a significant investment - consider breaking it into smaller deliverables"
    },
    FR: {
        // Same content as in the original translations.js for French
        // Copying all French translations from the original file
        'revenue-title': "Quel est l'impact annuel attendu sur les revenus ?",
        'revenue-description': "Considérez les revenus directs des ventes, des mises à niveau ou de la réduction du churn",
        'customer-reach-title': "Combien de clients s'intéressent à ce sujet ?",
        'customer-reach-description': "Considérez la taille du segment client concerné",
        'customer-care-title': "À quel point ces clients s'en soucient-ils ?",
        'customer-care-description': "Basé sur les retours clients et l'étude de marché",
        'insight-title': "À quel point notre perspective est-elle pertinente ?",
        'insight-description': "Évaluez l'unicité et la valeur de notre compréhension",
        'product-payoff-title': "Dans quelle mesure notre produit concrétise-t-il cette perspective ?",
        'product-payoff-description': "Évaluez l'efficacité de notre solution",
        'effort-title': "Quel effort cela demanderait-il ?",
        'effort-description': "Inclure la conception, le développement, les tests et le déploiement",
        'team-excitement-title': "À quel point l'équipe est-elle enthousiaste ?",
        'team-excitement-description': "Évaluez la motivation et l'intérêt de l'équipe",
        'confidence-title': "Quelle est notre confiance dans l'exécution ?",
        'confidence-description': "Considérez la complexité technique et l'expertise de l'équipe",
        'analysis-title': "Analyse",
        'analysis-empty': "Complétez toutes les questions pour voir l'analyse",
        'cohen-attribution': "Basé sur le cadre d'estimation Fermi de Jason Cohen, cette calculatrice aide à prioriser les fonctionnalités en appliquant les principes d'estimation Fermi aux calculs d'impact et d'effort.",

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
        'reach-0': "Personne (0)",
        'reach-0-desc': "Ne peut penser à personne qui s'en soucie",
        'reach-30': "Quelques-uns (30)",
        'reach-30-desc': "Un segment spécifique de clients",
        'reach-70': "La plupart (70)",
        'reach-70-desc': "La majorité de nos clients",
        'reach-100': "Tous (100)",
        'reach-100-desc': "Tous les clients en bénéficieraient",

        // Customer Care options
        'care-0': "Ne perdez pas mon temps",
        'care-0-desc': "Activement opposé à cette fonctionnalité",
        'care-1': "Bof, peu importe",
        'care-1-desc': "Indifférent à la fonctionnalité",
        'care-10': "Je suis curieux",
        'care-10-desc': "Intéressé d'en savoir plus",
        'care-100': "Préoccupation sérieuse",
        'care-100-desc': "Cela résout un point critique",
        'care-1000': "Mission critique",
        'care-1000-desc': "Essentiel pour le succès du client",

        // Insight options
        'insight-0': "Aucune idée",
        'insight-0-desc': "Je ne comprends même pas de quoi vous parlez",
        'insight-1': "Basique",
        'insight-1-desc': "Pas besoin d'être un génie",
        'insight-10': "Claire",
        'insight-10-desc': "Oui, d'accord, ça a du sens",
        'insight-100': "Notable",
        'insight-100-desc': "J'ai pris des notes, merci, c'est un excellent point",
        'insight-1000': "Révolutionnaire",
        'insight-1000-desc': "Wow!!! Ça change tout",

        // Product Payoff options
        'payoff-0': "Négatif",
        'payoff-0-desc': "Je ne veux absolument pas de ça",
        'payoff-1': "Minimal",
        'payoff-1-desc': "Et alors ?",
        'payoff-10': "Correct",
        'payoff-10-desc': "C'est bien",
        'payoff-100': "Fort",
        'payoff-100-desc': "Oh, sympa, je vais y jeter un œil",
        'payoff-1000': "Révolutionnaire",
        'payoff-1000-desc': "Wow, j'achèterais le produit rien que pour ça !",

        // Team Excitement options
        'excitement-0': "Aucun",
        'excitement-0-desc': "Personne n'est enthousiaste",
        'excitement-1': "Faible",
        'excitement-1-desc': "Une seule personne est enthousiaste",
        'excitement-10': "Moyen",
        'excitement-10-desc': "Environ la moitié de l'équipe est enthousiaste",
        'excitement-100': "Élevé",
        'excitement-100-desc': "Toute l'équipe, ou presque, est enthousiaste",

        // Confidence options
        'confidence-0': "Aucune",
        'confidence-0-desc': "Impossible à réaliser",
        'confidence-1': "Faible",
        'confidence-1-desc': "On peut essayer, mais ne soyez pas surpris si ça échoue",
        'confidence-10': "Moyenne",
        'confidence-10-desc': "On peut probablement le faire",
        'confidence-100': "Élevée",
        'confidence-100-desc': "C'est totalement dans notre domaine d'expertise",

        // Effort options
        'effort-2d': "2 jours",
        'effort-2d-desc': "Une implémentation rapide",
        'effort-2w': "2 semaines",
        'effort-2w-desc': "Un projet modéré",
        'effort-2m': "2 mois",
        'effort-2m-desc': "Un projet majeur",

        // Analysis messages
        'high-team-excitement': "L'équipe est très motivée pour travailler sur cette fonctionnalité",
        'low-team-excitement': "Considérez l'impact sur le moral de l'équipe - personne n'est enthousiaste",
        'high-confidence': "Nous avons une grande confiance dans notre capacité à réussir",
        'low-confidence': "Envisagez un prototype d'abord en raison de la faible confiance",
        'quick-win': "C'est une victoire rapide qui pourrait être livrée en quelques jours",
        'large-effort': "C'est un investissement important - envisagez de le découper en livrables plus petits"
    },
    ES: {
        // Same content as in the original translations.js for Spanish
        // Copying all Spanish translations from the original file
        'revenue-title': "¿Cuál es el impacto anual esperado en ingresos?",
        'revenue-description': "Considere ingresos directos de ventas, actualizaciones o reducción de abandono",
        'customer-reach-title': "¿Cuántos clientes se preocupan por este tema?",
        'customer-reach-description': "Considere el tamaño del segmento de clientes afectado",
        'customer-care-title': "¿Cuánto les importa a esos clientes?",
        'customer-care-description': "Basado en comentarios de clientes e investigación de mercado",
        'insight-title': "¿Qué tan perspicaz es nuestra visión sobre este tema?",
        'insight-description': "Evalúe la singularidad y el valor de nuestra comprensión",
        'product-payoff-title': "¿Qué tan poderosamente nuestro producto materializa la perspectiva?",
        'product-payoff-description': "Evalúe la efectividad de nuestra solución",
        'effort-title': "¿Cuánto esfuerzo requeriría esto?",
        'effort-description': "Incluya diseño, desarrollo, pruebas y despliegue",
        'team-excitement-title': "¿Qué tan entusiasmado está el equipo con esto?",
        'team-excitement-description': "Evalúe la motivación e interés del equipo",
        'confidence-title': "¿Qué tan seguros estamos en nuestra ejecución?",
        'confidence-description': "Considere la complejidad técnica y la experiencia del equipo",
        'analysis-title': "Análisis",
        'analysis-empty': "Complete todas las preguntas para ver el análisis",
        'cohen-attribution': "Basado en el marco de estimación Fermi de Jason Cohen, esta calculadora ayuda a priorizar funciones aplicando principios de estimación Fermi a los cálculos de impacto y esfuerzo.",

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
        'reach-0': "Nadie (0)",
        'reach-0-desc': "No puedo pensar en nadie que le importe",
        'reach-30': "Algunos (30)",
        'reach-30-desc': "Un segmento específico de clientes",
        'reach-70': "La mayoría (70)",
        'reach-70-desc': "La mayoría de nuestros clientes",
        'reach-100': "Todos (100)",
        'reach-100-desc': "Todos los clientes se beneficiarían",

        // Customer Care options
        'care-0': "No pierda mi tiempo",
        'care-0-desc': "Activamente opuesto a esta función",
        'care-1': "Meh, lo que sea",
        'care-1-desc': "Indiferente a la función",
        'care-10': "Tengo curiosidad",
        'care-10-desc': "Interesado en saber más",
        'care-100': "Preocupación seria",
        'care-100-desc': "Esto aborda un punto crítico",
        'care-1000': "Misión crítica",
        'care-1000-desc': "Esencial para el éxito del cliente",

        // Insight options
        'insight-0': "Ninguna idea",
        'insight-0-desc': "No tengo ni idea de qué están hablando",
        'insight-1': "Básico",
        'insight-1-desc': "No hace falta ser un genio",
        'insight-10': "Claro",
        'insight-10-desc': "Sí, ok, tiene sentido",
        'insight-100': "Notable",
        'insight-100-desc': "Tomé notas, gracias, es un excelente punto",
        'insight-1000': "Revolucionario",
        'insight-1000-desc': "¡Wow! Esto lo cambia todo",

        // Product Payoff options
        'payoff-0': "Negativo",
        'payoff-0-desc': "Activamente no quiero esto",
        'payoff-1': "Mínimo",
        'payoff-1-desc': "¿Y qué?",
        'payoff-10': "Decente",
        'payoff-10-desc': "Está bien",
        'payoff-100': "Fuerte",
        'payoff-100-desc': "Oh, bien, le echaré un vistazo",
        'payoff-1000': "Revolucionario",
        'payoff-1000-desc': "¡Wow, compraría el producto solo por esto!",

        // Team Excitement options
        'excitement-0': "Ninguno",
        'excitement-0-desc': "Nadie está entusiasmado",
        'excitement-1': "Bajo",
        'excitement-1-desc': "Solo una persona está entusiasmada",
        'excitement-10': "Medio",
        'excitement-10-desc': "Aproximadamente la mitad del equipo está entusiasmado",
        'excitement-100': "Alto",
        'excitement-100-desc': "Todo el equipo, o casi todo, está entusiasmado",

        // Confidence options
        'confidence-0': "Ninguna",
        'confidence-0-desc': "No hay forma de que podamos hacer esto",
        'confidence-1': "Baja",
        'confidence-1-desc': "Podemos intentarlo, pero no se sorprenda si falla",
        'confidence-10': "Media",
        'confidence-10-desc': "Probablemente podamos hacerlo",
        'confidence-100': "Alta",
        'confidence-100-desc': "Está completamente dentro de nuestro dominio de experiencia",

        // Effort options
        'effort-2d': "2 días",
        'effort-2d-desc': "Una implementación rápida",
        'effort-2w': "2 semanas",
        'effort-2w-desc': "Un proyecto moderado",
        'effort-2m': "2 meses",
        'effort-2m-desc': "Un proyecto mayor",

        // Analysis messages
        'high-team-excitement': "El equipo está muy motivado para trabajar en esta función",
        'low-team-excitement': "Considere el impacto en la moral del equipo - nadie está entusiasmado",
        'high-confidence': "Tenemos alta confianza en nuestra capacidad para ejecutar esto con éxito",
        'low-confidence': "Considere hacer un prototipo primero debido a la baja confianza",
        'quick-win': "Esta es una victoria rápida que podría entregarse en días",
        'large-effort': "Esta es una inversión significativa - considere dividirla en entregas más pequeñas"
    }
};

// Make translations globally available
window.translations = translations;

// Trigger the translations loaded event
window.dispatchEvent(new Event('translationsLoaded'));
