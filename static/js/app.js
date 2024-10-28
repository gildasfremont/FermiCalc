[Previous content remains the same until scrollToNextQuestion method]

scrollToNextQuestion(field) {
    const nextField = this.findNextQuestion(field);
    if (nextField) {
        const container = document.getElementById(`${nextField}Options`);
        if (container) {
            container.scrollIntoView({ behavior: 'smooth' });
            container.classList.add('highlight-container');
            setTimeout(() => container.classList.remove('highlight-container'), 2000);
        }
    } else {
        // If no next question, scroll to analysis
        const analysisContent = document.getElementById('analysis-content');
        if (analysisContent) {
            analysisContent.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

scrollToQuestion(field) {
    const container = document.getElementById(`${field}Options`);
    if (container) {
        container.scrollIntoView({ behavior: 'smooth' });
        container.classList.add('highlight-container');
        setTimeout(() => container.classList.remove('highlight-container'), 2000);
    }
}

[Rest of the code remains the same]
