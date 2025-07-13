import { CountUp } from "countup.js";

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-out',
    once: true,
    offset: 100
});

// Typed.js for hero text animation
// const typed = new Typed('#typed-text', {
//     strings: [
//         'Transformasi Masa Depan Anak dengan Cerdas Academy',
//         'Bimbingan Belajar Terpercaya #1 di Indonesia',
//         'Guru Berpengalaman & Metode Pembelajaran Inovatif'
//     ],
//     typeSpeed: 50,
//     backSpeed: 30,
//     backDelay: 2000,
//     loop: true,
//     showCursor: true,
//     cursorChar: '|'
// });

// // Swiper for testimonials
// const testimonialSwiper = new Swiper('.testimonial-swiper', {
//     loop: true,
//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//         },
//     },
// });

new Swiper('.testimonial-swiper', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 32,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.testimonial-swiper-next',
      prevEl: '.testimonial-swiper-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  // CountUp.js for stats
  const students = new CountUp('students-count', 2345, {duration: 4,  enableScrollSpy: true});
  const teachers = new CountUp('teachers-count', 67, {duration: 3,  enableScrollSpy: true});
  const facilities = new CountUp('facilities-count', 18, {duration: 3,  enableScrollSpy: true});
  students.start();
  teachers.start();
  facilities.start();

  const yoe = new CountUp('yoe-count', 52, {duration: 4,  enableScrollSpy: true});
  const certif = new CountUp('certified-count', 124, {duration: 3,  enableScrollSpy: true});
  const graduation = new CountUp('graduation-count', 98, {duration: 3,  enableScrollSpy: true});
  yoe.start();
  certif.start();
  graduation.start();

// Swiper for teachers
const teacherSwiper = new Swiper('.teacher-swiper', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 32,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.teacher-swiper-next',
      prevEl: '.teacher-swiper-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

// GLightbox for image gallery
const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
});

// CountUp animation for statistics
const observerOptions = {
    threshold: 0.7,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-count');
            const countUp = new CountUp(counter, target, {
                duration: 2,
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                decimalPlaces: target % 1 !== 0 ? 1 : 0
            });
            
            if (!countUp.error) {
                countUp.start();
            }
            
            observer.unobserve(counter);
        }
    });
});

document.querySelectorAll('.counter').forEach(counter => {
    observer.observe(counter);
});

// Particles.js background
// particlesJS('particles-js', {
//     particles: {
//         number: {
//             value: 80,
//             density: {
//                 enable: true,
//                 value_area: 800
//             }
//         },
//         color: {
//             value: '#ffffff'
//         },
//         shape: {
//             type: 'circle',
//             stroke: {
//                 width: 0,
//                 color: '#000000'
//             }
//         },
//         opacity: {
//             value: 0.1,
//             random: false
//         },
//         size: {
//             value: 3,
//             random: true
//         },
//         line_linked: {
//             enable: true,
//             distance: 150,
//             color: '#ffffff',
//             opacity: 0.1,
//             width: 1
//         },
//         move: {
//             enable: true,
//             speed: 2,
//             direction: 'none',
//             random: false,
//             straight: false,
//             out_mode: 'out',
//             bounce: false
//         }
//     },
//     interactivity: {
//         detect_on: 'canvas',
//         events: {
//             onhover: {
//                 enable: true,
//                 mode: 'grab'
//             },
//             onclick: {
//                 enable: true,
//                 mode: 'push'
//             },
//             resize: true
//         },
//         modes: {
//             grab: {
//                 distance: 140,
//                 line_linked: {
//                     opacity: 0.2
//                 }
//             },
//             push: {
//                 particles_nb: 4
//             }
//         }
//     },
//     retina_detect: true
// });

// Navbar background/color on scroll
window.addEventListener('scroll', function() {
    
    const header = document.getElementById('header');
    const nav = header.querySelector('nav');
    if (window.scrollY > 10) {
      header.classList.remove('bg-transparent');
      header.classList.add('bg-white', 'shadow', 'backdrop-blur-md');
      nav.querySelectorAll('a').forEach(el => {
        el.classList.remove('text-gray-900');
        el.classList.add('text-emerald-600');
      });
    } else {
      header.classList.remove('bg-white', 'shadow');
      header.classList.add('bg-transparent');
      nav.querySelectorAll('a').forEach(el => {
        el.classList.remove('text-emerald-600');
        el.classList.add('text-gray-900');
      });
    }
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenuBtn.addEventListener('click', () => {
    console.log('asdasd');
    
    mobileMenu.classList.toggle('active');
  });
  // Close mobile menu on link click
  document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Back to top button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('scale-100');
        backToTopBtn.classList.remove('scale-0');
    } else {
        backToTopBtn.classList.add('scale-0');
        backToTopBtn.classList.remove('scale-100');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Accordion functionality for FAQ
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('.accordion-icon');
        
        // Close all other accordions
        document.querySelectorAll('.accordion-content').forEach(otherContent => {
            if (otherContent !== content) {
                otherContent.classList.remove('active');
                const otherIcon = otherContent.previousElementSibling.querySelector('.accordion-icon');
                otherIcon.style.transform = 'rotate(0deg)';
            }
        });
        
        // Toggle current accordion
        content.classList.toggle('active');
        if (content.classList.contains('active')) {
            icon.style.transform = 'rotate(180deg)';
        } else {
            icon.style.transform = 'rotate(0deg)';
        }
    });
});

// Form validation and submission
const registrationForm = document.getElementById('registrationForm');
const contactForm = document.getElementById('contactForm');

if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const requiredFields = registrationForm.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('border-red-500');
            } else {
                field.classList.remove('border-red-500');
            }
        });
        
        if (isValid) {
            // Show success message
            showNotification('Pendaftaran berhasil! Tim kami akan menghubungi Anda dalam 24 jam.', 'success');
            registrationForm.reset();
        } else {
            showNotification('Mohon lengkapi semua field yang diperlukan.', 'error');
        }
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const requiredFields = contactForm.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('border-red-500');
            } else {
                field.classList.remove('border-red-500');
            }
        });
        
        if (isValid) {
            showNotification('Pesan berhasil dikirim! Kami akan membalas dalam 24 jam.', 'success');
            contactForm.reset();
        } else {
            showNotification('Mohon lengkapi semua field yang diperlukan.', 'error');
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-md transform transition-all duration-300 translate-x-full ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    
    notification.innerHTML = `
        <div class="flex items-center space-x-3">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                ${type === 'success' ? 
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>' :
                    type === 'error' ? 
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>' :
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
                }
            </svg>
            <span>${message}</span>
            <button class="ml-4 hover:opacity-70" onclick="this.parentElement.parentElement.remove()">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Intersection Observer for fade-in animations
const observerOptionsAnim = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observerAnim = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptionsAnim);

document.querySelectorAll('.fade-in').forEach(el => {
    observerAnim.observe(el);
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance optimizations
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

// Optimize scroll events
window.addEventListener('scroll', debounce(() => {
    // Scroll-based animations and effects
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-pattern');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}, 16));

// Preload critical images
const criticalImages = [
    'https://images.pexels.com/photos/8500513/pexels-photo-8500513.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/8923181/pexels-photo-8923181.jpeg?auto=compress&cs=tinysrgb&w=400'
];

criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Service Worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => {
            console.log('Service Worker registration failed');
        });
    });
}

// Dark mode toggle (optional feature)
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
}

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
}

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    // Google Analytics or other tracking service integration
    console.log('Event tracked:', eventName, eventData);
}

// Track form submissions
document.addEventListener('submit', (e) => {
    const form = e.target;
    if (form.id === 'registrationForm') {
        trackEvent('registration_form_submit');
    } else if (form.id === 'contactForm') {
        trackEvent('contact_form_submit');
    }
});

// Track CTA button clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        trackEvent('cta_click', {
            button_text: e.target.textContent,
            button_location: e.target.closest('section')?.id || 'unknown'
        });
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('Cerdas Academy website loaded successfully!');
    
    // Initialize tooltips if needed
    // Initialize other components
    
    // Show loading complete
    document.body.classList.add('loaded');
});