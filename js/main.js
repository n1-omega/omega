/**
 * Ω (OMEGA) Clan Official Website
 * JavaScript
 */

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initFadeInAnimations();
});

/**
 * Navigation functionality
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Mobile menu toggle
 */
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.querySelector('.nav-toggle');
    
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
}

/**
 * Fade-in animations on scroll
 */
function initFadeInAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Initial check for elements in view
    checkFadeElements(fadeElements);
    
    // Check on scroll
    window.addEventListener('scroll', function() {
        checkFadeElements(fadeElements);
    });
}

function checkFadeElements(elements) {
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.85;
    
    elements.forEach(function(element) {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerPoint) {
            element.classList.add('visible');
        }
    });
}

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
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
