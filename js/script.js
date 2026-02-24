/**
 * Aman Sharma Portfolio - Enhanced JavaScript
 * Features: GSAP Animations, Interactive Effects, Smooth Scrolling
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functions
  initPreloader();
  initNavbar();
  initGSAPAnimations();
  initScrollEffects();
  initCounterAnimation();
  initSmoothScroll();
});

/**
 * Preloader
 */
function initPreloader() {
  const preloader = document.querySelector('.preloader');
  
  window.addEventListener('load', function() {
    gsap.to(preloader, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: function() {
        preloader.style.display = 'none';
        // Trigger hero animations after preloader
        animateHeroOnLoad();
      }
    });
  });
  
  // Fallback timeout
  setTimeout(function() {
    if (preloader.style.display !== 'none') {
      gsap.to(preloader, {
        opacity: 0,
        duration: 0.5,
        onComplete: function() {
          preloader.style.display = 'none';
          animateHeroOnLoad();
        }
      });
    }
  }, 2000);
}

function animateHeroOnLoad() {
  // Animate hero content on load
  const heroElements = document.querySelectorAll('.hero .gsap-reveal');
  
  gsap.fromTo(heroElements, 
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    }
  );
  
  // Animate hero image
  const heroImage = document.querySelector('.hero-image-wrapper');
  if (heroImage) {
    gsap.fromTo(heroImage,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1.2, delay: 0.5, ease: 'power3.out' }
    );
  }
  
  // Animate stats counter
  initCounterAnimation();
}

/**
 * Navbar Scroll Effect
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  // Scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Active link on scroll
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
  
  // Mobile menu close on link click
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    });
  });
  
  // Initial check
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  }
}

/**
 * GSAP Animations
 */
function initGSAPAnimations() {
  gsap.registerPlugin(ScrollTrigger);
  
  // Reveal animations for all sections
  const revealElements = document.querySelectorAll('.gsap-reveal');
  
  revealElements.forEach((element, index) => {
    gsap.fromTo(element,
      { 
        opacity: 0, 
        y: 60 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
  
  // Skills progress bar animation
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach((bar, index) => {
    const width = bar.getAttribute('data-width');
    
    gsap.fromTo(bar,
      { width: '0%' },
      {
        width: width,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bar,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
  
  // Timeline items animation
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    gsap.fromTo(item,
      { 
        opacity: 0, 
        x: index % 2 === 0 ? 50 : -50 
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
  
  // Project cards hover effect
  const projectCards = document.querySelectorAll('.project-card-large');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      gsap.to(this.querySelector('.project-image img'), {
        scale: 1.1,
        duration: 0.6,
        ease: 'power2.out'
      });
    });
    
    card.addEventListener('mouseleave', function() {
      gsap.to(this.querySelector('.project-image img'), {
        scale: 1,
        duration: 0.6,
        ease: 'power2.out'
      });
    });
  });
  
  // Education cards animation
  const educationCards = document.querySelectorAll('.education-card');
  educationCards.forEach((card, index) => {
    gsap.fromTo(card,
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
  
  // Contact items animation
  const contactItems = document.querySelectorAll('.contact-item');
  contactItems.forEach((item, index) => {
    gsap.fromTo(item,
      { 
        opacity: 0, 
        x: -30 
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
  
  // Feature items stagger animation
  const featureItems = document.querySelectorAll('.feature-item');
  if (featureItems.length > 0) {
    gsap.fromTo(featureItems,
      { 
        opacity: 0, 
        x: -20 
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: featureItems[0],
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }
  
  // Skill tags animation
  const skillTags = document.querySelectorAll('.skill-tag');
  if (skillTags.length > 0) {
    gsap.fromTo(skillTags,
      { 
        opacity: 0, 
        scale: 0.8 
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: skillTags[0],
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }
  
  // Footer animation
  const footerBrand = document.querySelector('.footer-brand');
  if (footerBrand) {
    gsap.fromTo(footerBrand,
      { 
        opacity: 0, 
        y: 30 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }
}

/**
 * Scroll Effects
 */
function initScrollEffects() {
  // Parallax effect for hero orbs
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.hero-gradient-orb');
    
    orbs.forEach((orb, index) => {
      const speed = (index + 1) * 0.05;
      gsap.set(orb, {
        y: scrolled * speed
      });
    });
  });
  
  // Navbar background opacity on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    const scrollPercent = Math.min(window.scrollY / 500, 1);
    if (navbar.classList.contains('scrolled')) {
      navbar.style.background = `rgba(10, 15, 26, ${0.85 + scrollPercent * 0.15})`;
    }
  });
}

/**
 * Counter Animation
 */
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    
    gsap.to(counter, {
      innerHTML: target,
      duration: 2,
      snap: { innerHTML: 1 },
      ease: 'power2.out',
      scrollTrigger: {
        trigger: counter,
        start: 'top 85%',
        once: true
      },
      onComplete: function() {
        counter.textContent = target + '+';
      }
    });
  });
}

/**
 * Smooth Scroll
 */
function initSmoothScroll() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        gsap.to(window, {
          scrollTo: { y: targetPosition, autoKill: false },
          duration: 1,
          ease: 'power3.inOut'
        });
      }
    });
  });
}

/**
 * Form Submit Handler
 */
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name') || this.querySelector('input[type="text"]').value;
    const email = formData.get('email') || this.querySelector('input[type="email"]').value;
    const message = formData.get('message') || this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Show success message (in production, you'd send to backend)
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    
    // Reset form
    this.reset();
    
    // Reset button after 3 seconds
    setTimeout(function() {
      submitBtn.innerHTML = originalText;
      submitBtn.style.background = '';
    }, 3000);
  });
}

/**
 * Intersection Observer for lazy loading
 */
if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(function(img) {
    imageObserver.observe(img);
  });
}

/**
 * Mouse cursor trail effect (optional, can be disabled)
 */
// Uncomment to enable cursor trail
// let mouseX = 0, mouseY = 0;
// let cursorX = 0, cursorY = 0;
// 
// document.addEventListener('mousemove', function(e) {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// });
// 
// function animateCursor() {
//   const dx = mouseX - cursorX;
//   const dy = mouseY - cursorY;
//   
//   cursorX += dx * 0.1;
//   cursorY += dy * 0.1;
//   
//   requestAnimationFrame(animateCursor);
// }
// animateCursor();
