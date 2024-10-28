/* Keep all the code before scrollToNextQuestion method exactly the same */

    scrollToNextQuestion(field) {
        const nextField = this.findNextQuestion(field);
        if (nextField) {
            const container = document.getElementById(`${nextField}Options`);
            if (container) {
                setTimeout(() => {
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 80;
                    const containerRect = container.getBoundingClientRect();
                    const targetScroll = window.pageYOffset + containerRect.top - navbarHeight;
                    
                    window.scrollTo({
                        top: targetScroll,
                        behavior: 'smooth'
                    });
                    container.classList.add('highlight-container');
                    setTimeout(() => container.classList.remove('highlight-container'), 2000);
                }, 100);
            }
        }
    }

    scrollToQuestion(field) {
        const container = document.getElementById(`${field}Options`);
        if (container) {
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            const containerRect = container.getBoundingClientRect();
            const targetScroll = window.pageYOffset + containerRect.top - navbarHeight;
            
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth'
            });
            container.classList.add('highlight-container');
            setTimeout(() => container.classList.remove('highlight-container'), 2000);
        }
    }

/* Keep all the code after scrollToQuestion method exactly the same */
