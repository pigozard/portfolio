// ==========================================
// MENU HAMBURGER
// ==========================================

const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav-menu');
const navLinks  = document.querySelectorAll('.nav-link');

if (hamburger) {
  // Cache le menu au clavier quand il est fermé
  navMenu.setAttribute('aria-hidden', 'true');

  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    navMenu.setAttribute('aria-hidden', !isOpen);
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger?.classList.remove('active');
    hamburger?.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('aria-hidden', 'true');
  });
});

// ==========================================
// SCROLL ANIMATIONS (IntersectionObserver)
// ==========================================

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

document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(
    '.timeline-item, .timeline-item-esante, .about-card, .skill-category'
  );
  targets.forEach(el => observer.observe(el));
});

// ==========================================
// NAVBAR — OMBRE AU SCROLL
// ==========================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset > 50;
  navbar.style.boxShadow = scrolled
    ? '0 4px 12px rgba(0, 0, 0, 0.15)'
    : '0 4px 6px rgba(0, 0, 0, 0.1)';
});

// ==========================================
// SMOOTH SCROLL POUR LES ANCRES
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') { e.preventDefault(); return; }

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      window.scrollTo({
        top: target.offsetTop - navHeight - 20,
        behavior: 'smooth'
      });
    }
  });
});

// ==========================================
// ACTIVE LINK AU SCROLL
// ==========================================

const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
  const scrollPosition = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop    = section.offsetTop - 150;
    const sectionBottom = sectionTop + section.offsetHeight;
    const sectionId     = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
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
// LAZY LOADING VIDÉOS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const iframe = entry.target.querySelector('iframe');
        if (iframe) {
          // Force le chargement en réassignant src
          const src = iframe.getAttribute('src');
          iframe.setAttribute('src', src);
        }
        videoObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll('.video-container').forEach(container => {
    videoObserver.observe(container);
  });
});

// ==========================================
// COPIER L'EMAIL AU CLIC
// ==========================================

document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const email = link.textContent.trim();

    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        const original = link.innerHTML;
        link.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Email copié !
        `;
        setTimeout(() => { link.innerHTML = original; }, 2000);
      });
    }
  });
});

// ==========================================
// PRÉVENTION LIENS VIDES
// ==========================================

document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', e => e.preventDefault());
});

// ==========================================
// SIGNATURE CONSOLE
// ==========================================

console.log('%c👋 Salut ! Tu fouilles dans le code ?', 'font-size:16px; font-weight:bold; color:#D94A4A;');
console.log('%cCe portfolio a été créé par Pierre Gozard',    'font-size:14px; color:#5A7A6A;');
console.log('%cContact : pierre.gozard03@gmail.com',          'font-size:12px; color:#2C2C2C;');
