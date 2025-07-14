import { CountUp } from "countup.js";

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-out',
    once: true,
    offset: 100
});

new Swiper('.testimonial-swiper', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 32,
    autoplay: {
        delay: 2000,
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

const expertMentors = new CountUp('expert-mentors', 50, {duration: 5,  enableScrollSpy: true});
const satisfaction = new CountUp('satisfaction', 99, {duration: 4,  enableScrollSpy: true});
const successfulStudents = new CountUp('successful-students', 10, {duration: 4,  enableScrollSpy: true});
const yearsOfExperience = new CountUp('years-of-experience', 15, {duration: 5,  enableScrollSpy: true});
expertMentors.start();
satisfaction.start();
successfulStudents.start();
yearsOfExperience.start();

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
