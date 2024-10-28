class FermiCalculator {
    // ... [previous code until scrollToNextQuestion remains the same] ...

    scrollToNextQuestion(field) {
        const nextField = this.findNextQuestion(field);
        if (nextField) {
            const container = document.getElementById(`${nextField}Options`);
            if (container) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const rect = container.getBoundingClientRect();
                const scrollTop = window.pageYOffset + rect.top - navbarHeight - 20;
                
                window.scrollTo({
                    top: scrollTop,
                    behavior: 'smooth'
                });
            }
        } else {
            // If no next question, scroll to analysis
            const analysisSection = document.getElementById('analysis-content');
            if (analysisSection) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const rect = analysisSection.getBoundingClientRect();
                const scrollTop = window.pageYOffset + rect.top - navbarHeight - 20;
                
                window.scrollTo({
                    top: scrollTop,
                    behavior: 'smooth'
                });
            }
        }
    }

    scrollToQuestion(field) {
        const container = document.getElementById(`${field}Options`);
        if (container) {
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const rect = container.getBoundingClientRect();
            const scrollTop = window.pageYOffset + rect.top - navbarHeight - 20;
            
            window.scrollTo({
                top: scrollTop,
                behavior: 'smooth'
            });
        }
    }

    // ... [rest of the code remains the same] ...
}
