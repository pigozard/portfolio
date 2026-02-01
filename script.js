// ==========================================
// MENU HAMBURGER
// ==========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu mobile
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animation du hamburger en X
        hamburger.classList.toggle('active');
    });
}

// Fermer le menu au clic sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

// Observer pour animations au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

// Observer tous les éléments de timeline
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const aboutCards = document.querySelectorAll('.about-card');
    const skillCategories = document.querySelectorAll('.skill-category');

    timelineItems.forEach(item => observer.observe(item));
    aboutCards.forEach(card => observer.observe(card));
    skillCategories.forEach(skill => observer.observe(skill));
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Ajouter ombre au scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ==========================================
// SMOOTH SCROLL POUR LES ANCRES
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Ignorer les liens vides
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();

            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// ACTIVE LINK DETECTION
// ==========================================

const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ==========================================
// LAZY LOADING POUR LES VIDEOS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const videoContainers = document.querySelectorAll('.video-container');

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target.querySelector('iframe');
                if (iframe && !iframe.src.includes('autoplay')) {
                    // Reload iframe pour démarrer le chargement
                    const src = iframe.getAttribute('src');
                    iframe.setAttribute('src', src);
                }
                videoObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.25
    });

    videoContainers.forEach(container => {
        videoObserver.observe(container);
    });
});

// ==========================================
// ANIMATION DES COMPTEURS (si nécessaire)
// ==========================================

function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// ==========================================
// COPIER EMAIL AU CLIC (optionnel)
// ==========================================

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.textContent.trim();

        // Copier dans le presse-papier
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                // Feedback visuel
                const originalText = link.innerHTML;
                link.innerHTML = `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Email copié !
                `;

                setTimeout(() => {
                    link.innerHTML = originalText;
                }, 2000);
            });
        }
    });
});

// ==========================================
// PREVENTION DES LIENS VIDES
// ==========================================

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// ==========================================
// CONSOLE LOG STYLISÉ (signature)
// ==========================================

console.log(
    '%c👋 Salut ! Tu fouilles dans le code ? ',
    'font-size: 16px; font-weight: bold; color: #D94A4A;'
);
console.log(
    '%cCe portfolio a été créé avec ❤️ par Pierre Gozard',
    'font-size: 14px; color: #5A7A6A;'
);
console.log(
    '%cN\'hésite pas à me contacter : pierre.gozard03@gmail.com',
    'font-size: 12px; color: #2C2C2C;'
);
