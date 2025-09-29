// Simple JavaScript for enhanced user experience
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    
    // Font size controls
    const fontIncrease = document.getElementById('font-increase');
    const fontDecrease = document.getElementById('font-decrease');
    const body = document.body;
    
    // Check for saved font size preference
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';
    applyFontSize(savedFontSize);
    
    fontIncrease.addEventListener('click', function() {
        const currentClass = getCurrentFontClass();
        let newClass = 'font-large';
        
        if (currentClass === 'normal') newClass = 'font-large';
        else if (currentClass === 'font-large') newClass = 'font-xl';
        else if (currentClass === 'font-small') newClass = 'normal';
        
        applyFontSize(newClass);
        localStorage.setItem('fontSize', newClass);
    });
    
    fontDecrease.addEventListener('click', function() {
        const currentClass = getCurrentFontClass();
        let newClass = 'font-small';
        
        if (currentClass === 'normal') newClass = 'font-small';
        else if (currentClass === 'font-large') newClass = 'normal';
        else if (currentClass === 'font-xl') newClass = 'font-large';
        
        applyFontSize(newClass);
        localStorage.setItem('fontSize', newClass);
    });
    
    function getCurrentFontClass() {
        if (body.classList.contains('font-small')) return 'font-small';
        if (body.classList.contains('font-large')) return 'font-large';
        if (body.classList.contains('font-xl')) return 'font-xl';
        return 'normal';
    }
    
    function applyFontSize(sizeClass) {
        body.classList.remove('font-small', 'font-large', 'font-xl');
        if (sizeClass !== 'normal') {
            body.classList.add(sizeClass);
        }
    }

    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation when elements come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add loading class removal after page loads
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Add hover effect for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add typing effect for the title (optional enhancement)
    const titleElement = document.querySelector('.title');
    if (titleElement) {
        const originalText = titleElement.textContent;
        titleElement.textContent = '';
        
        function typeWriter(text, element, speed = 100) {
            let i = 0;
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }
        
        // Start typing effect after a short delay
        setTimeout(() => {
            typeWriter(originalText, titleElement, 80);
        }, 1000);
    }
});