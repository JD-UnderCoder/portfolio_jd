// ===== Navigation Scroll Effect =====
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Active Navigation Link on Scroll =====
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Skill Progress Animation on Scroll =====
const skillCards = document.querySelectorAll('.skill-card');

const animateSkills = () => {
    skillCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (cardPosition < screenPosition) {
            const progressBar = card.querySelector('.skill-progress');
            const progress = progressBar.getAttribute('data-progress');
            progressBar.style.width = progress + '%';
        }
    });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ===== Intersection Observer for Fade-in Animations =====
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

// Observe all cards and sections
document.querySelectorAll('.skill-card, .project-card, .blog-card, .about-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link (you can replace this with actual form submission)
    const mailtoLink = `mailto:1111rishabhagrawal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    // Show success message (optional)
    alert('Thank you for your message! Your default email client will open.');
    
    // Reset form
    contactForm.reset();
});

// ===== Typing Effect for Hero Title (Alternative Animation) =====
// You can uncomment this if you want a typing effect instead of fade-in
/*
const animatedTitle = document.querySelector('.animated-title');
const titleText = 'Front-End Web Designer & MCA Student';
let charIndex = 0;

function typeTitle() {
    if (charIndex < titleText.length) {
        animatedTitle.textContent += titleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeTitle, 100);
    }
}

window.addEventListener('load', () => {
    animatedTitle.textContent = '';
    setTimeout(typeTitle, 1000);
});
*/

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll('.section-header, .hero-text, .hero-image');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Parallax Effect for Hero Section ===== (DISABLED to prevent overlap)
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     
//     if (hero) {
//         hero.style.transform = `translateY(${scrolled * 0.4}px)`;
//     }
// });

// ===== Cursor Custom Effect (Optional Enhancement) =====
// Uncomment if you want a custom cursor effect
/*
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(1.5)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});
*/

// ===== Preloader (Optional) =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== Project Card Click Effect =====
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (!e.target.closest('.project-link')) {
            // Add click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        }
    });
});

// ===== Dynamic Year in Footer =====
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-content p');
if (footerYear) {
    footerYear.innerHTML = `&copy; ${currentYear} Rishabh Agrawal. All rights reserved.`;
}



// ===== Initialize All Animations on Load =====
window.addEventListener('load', () => {
    // Trigger initial animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2').forEach(el => {
            el.style.opacity = '1';
        });
    }, 100);
});

// ===== Digital Clock =====
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// Update clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);

// ===== Video Background Fallback =====
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
    heroVideo.addEventListener('error', function() {
        console.log('Video background not found - using gradient fallback');
        this.style.display = 'none';
    });
}

console.log('🌟 Futuristic Portfolio Loaded Successfully!');
console.log('⚡ Created by Rishabh Agrawal');
console.log('🎨 Dark Theme Activated');
