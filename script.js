
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuButton && navLinks) {
      mobileMenuButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = mobileMenuButton.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
      });
    }
    
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple form validation
        if (!name || !email || !message) {
          alert('Please fill in all the fields.');
          return;
        }
        
        // Here you would normally send the form data to a server
        // For now, let's just show a success message
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
      });
    }
    
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    function revealOnScroll() {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    }
    
    // Initial check on page load
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
  });
  document.getElementById("multiMobile").addEventListener("click", function (event) {
    event.preventDefault(); // منع السلوك الافتراضي للرابط
    window.location.href = "index.html"; // توجيه المستخدم إلى الصفحة الرئيسية
  });
  