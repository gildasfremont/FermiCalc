class FermiCalculator {
    // ... [previous code remains unchanged until scrollToNextQuestion] ...

    scrollToNextQuestion(field) {
        const nextField = this.findNextQuestion(field);
        if (nextField) {
            const container = document.getElementById(`${nextField}Options`);
            if (container) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const containerTop = container.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: containerTop - navbarHeight - 20,
                    behavior: 'smooth'
                });
            }
        } else {
            // If no next question, scroll to analysis
            const analysisContent = document.getElementById('analysis-content');
            if (analysisContent) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const analysisTop = analysisContent.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: analysisTop - navbarHeight - 20,
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
            const containerTop = container.getBoundingClientRect().top + window.pageYOffset;
            
            window.scrollTo({
                top: containerTop - navbarHeight - 20,
                behavior: 'smooth'
            });
        }
    }

    // ... [rest of the code remains unchanged] ...
