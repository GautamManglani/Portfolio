// Main JavaScript for Portfolio Website

// ===================================
// Initialization
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollEffects();
    initAnimations();
    initLoadingScreen();
    initContactForm();
    updateYear();
});

// ===================================
// Loading Screen
// ===================================

function initLoadingScreen() {
    window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loading-screen');
        if (!loadingScreen) return;

        setTimeout(() => {
            loadingScreen.classList.add('hidden');

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

    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

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

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

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
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (!backToTop) return;
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

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

    document.querySelectorAll('.timeline-item, .stat-item, .skill-category, .project-card, .contact-card, .detail-panel, .cert-sidebar-panel, .cert-display-card').forEach(el => {
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
    const heroName = document.querySelector('.name');
    if (heroName) {
        heroName.style.opacity = '0';
        setTimeout(() => {
            heroName.style.transition = 'opacity 0.8s ease';
            heroName.style.opacity = '1';
        }, 500);
    }

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');

        if (heroBackground && scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    animateNumbers();

    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    document.querySelectorAll('.project-card, .cert-display-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 35;
            const rotateY = (centerX - x) / 35;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ===================================
// Contact Form
// ===================================

function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    const submitButton = document.getElementById('contact-submit-btn');

    if (!form || !status || !submitButton) return;

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        status.textContent = 'Sending your message...';
        status.className = 'form-status is-pending';
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Form submission failed');
            }

            status.textContent = 'Message sent successfully. Gautam will receive it in the configured Gmail inbox.';
            status.className = 'form-status is-success';
            form.reset();
        } catch (error) {
            console.error(error);
            status.textContent = 'The form could not be submitted right now. Please try again or use the email link below.';
            status.className = 'form-status is-error';
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        }
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

    const targetNumber = parseInt(match[0], 10);
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
console.log('%c🔒 Interested in Cybersecurity? Let\'s connect on LinkedIn and GitHub!', 'color: #00ffcc; font-size: 14px;');
console.log('%c🔗 https://www.linkedin.com/in/gautammanglani', 'color: #ffffff; font-size: 12px;');
console.log('%c💻 https://github.com/GautamManglani', 'color: #ffffff; font-size: 12px;');

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
        initContactForm,
        animateNumbers
    };
}
