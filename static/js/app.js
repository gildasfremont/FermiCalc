class FermiCalculator {
    // ... [previous methods remain unchanged until scrollToNextQuestion]

    scrollToQuestion(field) {
        const container = document.getElementById(`${field}Options`);
        if (container) {
            const questionContainer = container.closest('.fermi-question');
            if (questionContainer) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const containerTop = questionContainer.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: containerTop - navbarHeight - 20,
                    behavior: 'smooth'
                });
            }
        }
    }

    // ... [rest of the file content remains unchanged]
}

// Initialize calculator when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.calculator = new FermiCalculator();
});
