// Main JavaScript for Portfolio Website

// ===================================
// Initialization
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollEffects();
    initAnimations();
    initLoadingScreen();
    updateYear();
});

// ===================================
// Loading Screen
// ===================================

function initLoadingScreen() {
    window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loading-screen');
        
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            
            // Remove from DOM after transition
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000);
    });
}

// ===================================
// Navigation
// ===================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Active link highlighting based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Scroll Effects
// ===================================

function initScrollEffects() {
    // Back to top button
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.timeline-item, .stat-item, .skill-category, .cert-card, .project-card, .contact-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// ===================================
// Animations
// ===================================

function initAnimations() {
    // Typing effect for hero name (optional enhancement)
    const heroName = document.querySelector('.name');
    if (heroName) {
        heroName.style.opacity = '0';
        setTimeout(() => {
            heroName.style.transition = 'opacity 0.8s ease';
            heroName.style.opacity = '1';
        }, 500);
    }

    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground && scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Animate stats numbers
    animateNumbers();

    // Skill tags hover effect enhancement
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Project cards tilt effect (subtle)
    document.querySelectorAll('.project-card, .cert-card').forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ===================================
// Number Animation
// ===================================

function animateNumbers() {
    const numberElements = document.querySelectorAll('.stat-content h3');
    const observerOptions = {
        threshold: 0.5
    };

    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateNumber(entry.target);
            }
        });
    }, observerOptions);

    numberElements.forEach(el => {
        // Only animate if it contains a number
        const text = el.textContent;
        const hasNumber = /\d+/.test(text);
        
        if (hasNumber) {
            numberObserver.observe(el);
        }
    });
}

function animateNumber(element) {
    const text = element.textContent;
    const match = text.match(/(\d+)/);
    
    if (!match) return;
    
    const targetNumber = parseInt(match[0]);
    const suffix = text.replace(/\d+/, '');
    const duration = 2000;
    const steps = 60;
    const increment = targetNumber / steps;
    const stepDuration = duration / steps;
    
    let currentNumber = 0;
    
    const counter = setInterval(() => {
        currentNumber += increment;
        
        if (currentNumber >= targetNumber) {
            element.textContent = targetNumber + suffix;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(currentNumber) + suffix;
        }
    }, stepDuration);
}

// ===================================
// Utility Functions
// ===================================

function updateYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ===================================
// Performance Optimization
// ===================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===================================
// Console Message
// ===================================

console.log('%c👋 Welcome to Gautam Manglani\'s Portfolio!', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%c🔒 Interested in Cybersecurity? Let\'s connect on LinkedIn!', 'color: #00ffcc; font-size: 14px;');
console.log('%c🔗 https://www.linkedin.com/in/gautammanglani', 'color: #ffffff; font-size: 12px;');

// ===================================
// Error Handling
// ===================================

window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
});

// ===================================
// Export Functions (if needed)
// ===================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initNavigation,
        initScrollEffects,
        initAnimations,
        animateNumbers
    };
}
