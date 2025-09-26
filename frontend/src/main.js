// frontend/src/main.js
import 'aos/dist/aos.css';
import AOS from 'aos';

// Inject HTML template
import appHtml from './app.html?raw';

document.getElementById('app').innerHTML = appHtml;

// Bootstrap and FontAwesome via CDN are in index.html
// Initialize AOS
AOS.init({ duration: 1000, once: false, easing: 'ease-in-out' });

// Particles.js via CDN
const particlesScript = document.createElement('script');
particlesScript.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
particlesScript.onload = () => {
  if (window.particlesJS) {
    window.particlesJS('particles-js', {
      particles: {
        number: { value: window.innerWidth < 768 ? 40 : 80, density: { enable: true, value_area: 800 } },
        color: { value: ['#2ecc71', '#3498db', '#f1c40f'] },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#2ecc71', opacity: 0.2, width: 1 },
        move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
      },
      retina_detect: true
    });
  }
};
document.head.appendChild(particlesScript);

// Typewriter effect
const roles = ["Web Developer", "Java Programmer", "Spring Boot Enthusiast", "React Developer"];
let index = 0, charIndex = 0, isDeleting = false;
const dynamicText = () => document.getElementById('dynamic-text');
function typeEffect() {
  const node = dynamicText();
  if (!node) return;
  const currentText = roles[index];
  if (!isDeleting) {
    node.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }
  } else {
    node.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index = (index + 1) % roles.length;
      setTimeout(typeEffect, 600);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 120);
}
setTimeout(typeEffect, 1200);

// Navbar scroll effect
const navbar = document.getElementById('mainNavbar');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth scrolling and mobile navbar auto-close
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.getElementById('navbarNav');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
    if (navbarCollapse && navbarCollapse.classList.contains('show') && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
    }
  });
});

// Active nav item
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-hover');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
});

// Highlight skills and project tech
const skillBadges = document.querySelectorAll('.skill-badge');
const techBadges = document.querySelectorAll('.tech-badge');
skillBadges.forEach(skill => {
  skill.addEventListener('mouseover', () => {
    const skillName = skill.getAttribute('data-skill');
    skill.classList.add('highlighted');
    techBadges.forEach(tech => {
      if (tech.getAttribute('data-skill') === skillName) tech.classList.add('highlighted');
    });
  });
  skill.addEventListener('mouseout', () => {
    const skillName = skill.getAttribute('data-skill');
    skill.classList.remove('highlighted');
    techBadges.forEach(tech => {
      if (tech.getAttribute('data-skill') === skillName) tech.classList.remove('highlighted');
    });
  });
});

// Project Live links via env (optional)
const biteflowLive = import.meta.env.VITE_BITEFLOW_URL || '';
const shoppingLive = import.meta.env.VITE_SHOPPING_URL || '';
const biteflowDemoLink = document.getElementById('biteflow-demo-link');
const shoppingDemoLink = document.getElementById('shopping-demo-link');
if (biteflowDemoLink) {
  if (biteflowLive) biteflowDemoLink.href = biteflowLive; else biteflowDemoLink.style.display = 'none';
}
if (shoppingDemoLink) {
  if (shoppingLive) shoppingDemoLink.href = shoppingLive; else shoppingDemoLink.style.display = 'none';
}

// Contact form submission to backend
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
let API_BASE = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
if (contactForm) {
  // If API_BASE is not configured, fall back to same-origin '/api/contact'
  const contactEndpoint = API_BASE ? `${API_BASE}/api/contact` : `/api/contact`;
  contactForm.action = contactEndpoint;
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitButton = contactForm.querySelector('button');
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    try {
      const name = contactForm.elements['name'].value.trim();
      const email = contactForm.elements['email'].value.trim();
      const subject = contactForm.elements['subject'].value.trim();
      const message = contactForm.elements['message'].value.trim();
      const website = contactForm.elements['website'] ? contactForm.elements['website'].value : '';

      // If API_BASE is not set, attempt same-origin endpoint (useful for local proxy or unified hosting)
      if (!API_BASE) {
        formStatus.innerHTML = '<div class="alert alert-warning">Using same-origin API endpoint. For Vercel + Render deploys, set VITE_API_BASE_URL in your Vercel project settings.</div>';
      }
      if (!name || !email || !message) throw new Error('Please fill in name, email, and message.');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) throw new Error('Please enter a valid email address.');

      const response = await fetch(contactForm.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, website })
      });

      const data = await response.json().catch(() => ({}));
      if (response.ok && data.ok !== false) {
        formStatus.innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
        contactForm.reset();
      } else {
        const errMsg = (data && data.error) ? data.error : 'Failed to send message';
        throw new Error(errMsg);
      }
    } catch (error) {
      formStatus.innerHTML = '<div class="alert alert-danger">Error: ' + error.message + '</div>';
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Send Message';
    }
  });
}
