
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navList.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navList.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // In a real application, you would send this data to a server
      console.log('Form submitted with:', { name, email, subject, message });
      
      // Show success message
      alert('Thank you for your message! I will get back to you soon.');
      
      // Reset form
      contactForm.reset();
    });
  }

  // Add active class to nav links on scroll
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(navItem => {
      navItem.classList.remove('active');
      if (navItem.getAttribute('href').substring(1) === current) {
        navItem.classList.add('active');
      }
    });
  });

  // Add scroll animations
  function revealOnScroll() {
    const elements = document.querySelectorAll('.section-title, .about-content, .timeline-item, .project-card, .contact-content');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('fade-in');
      }
    });
  }

  // Add CSS class for animations
  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      animation: fadeIn 1s ease forwards;
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .section-title, .about-content, .timeline-item, .project-card, .contact-content {
      opacity: 0;
    }
    .nav-link.active {
      color: var(--primary-color);
    }
    .nav-link.active::after {
      width: 100%;
    }
    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }
    .hamburger.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  `;
  document.head.appendChild(style);

  // Run initial animations
  revealOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', revealOnScroll);
});
