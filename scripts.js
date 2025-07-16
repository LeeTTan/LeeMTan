document.addEventListener('DOMContentLoaded', function() {
    // Project hover effects
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const link = card.querySelector('.project-link');
        
        card.addEventListener('click', function(e) {
            // If clicking directly on the link, let it handle the navigation
            if (e.target !== link && !link.contains(e.target)) {
                link.click();
            }
        });
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                link.click();
            }
        });
    });
    
    // Add to scripts.js
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        // Add to animateOnScroll() function
        document.querySelectorAll('.skill-level').forEach(bar => {
            if (bar.parentElement.getBoundingClientRect().top < window.innerHeight) {
                bar.style.width = bar.style.width; // Triggers animation
            }
        });
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    }

    // Trigger on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Make project cards keyboard accessible
    projectCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
