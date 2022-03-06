// MOBILE MENU
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');

// Open menu
navToggle.addEventListener('click', () => {
    console.log('ok');
    navMenu.classList.add('nav__menu--show');
})

// Close menu
navClose.addEventListener('click', () => {
    navMenu.classList.remove('nav__menu--show');
})
navLink.forEach(
    link => link.addEventListener('click', () => {
        navMenu.classList.remove('nav__menu--show');
    })
)

// ACTIVE HEADER
const header = document.getElementById('header');
function scrollHeader() {
    this.scrollY > 60 ? header.classList.add('header--active') : header.classList.remove('header--active');
}
window.addEventListener('scroll',scrollHeader);

// SCROLL UP
const scrollUp = document.getElementById('scroll-up');
function scrollPage() {
    this.scrollY >= 300 ? scrollUp.classList.add('scroll-up--show') : scrollUp.classList.remove('scroll-up--show');
}
window.addEventListener('scroll', scrollPage);

// SCROLL SECTIONS
const sections = document.querySelectorAll('section[id]');
function changeActiveMenuSection() {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const menuNavLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
        (sectionTop < scrollY && scrollY <= sectionTop + sectionHeight) 
            ? menuNavLink.classList.add('nav__link--active') 
            : menuNavLink.classList.remove('nav__link--active'); 
    })
}
window.addEventListener('scroll', changeActiveMenuSection);

// SWIPER
const testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 35,
    loop: true,
    navigation: {
        nextEl: ".testimonial-swiper__button-next",
        prevEl: ".testimonial-swiper__button-prev"
    }
})

// DARK/LIGHT MODE
const changeThemeBtn = document.getElementById('change-mode');
const darkModeClass = 'dark-mode';
const iconDarkMode = 'ri-sun-line';
const iconLightMode = 'ri-moon-line';
// Get local sets
const initialMode = localStorage.getItem('selected-mode') || 'light';
// Get current sets
const selectedMode = () => document.body.classList.contains(darkModeClass) ? 'dark' : 'light';
// Set initial class and icon for dark mode
if(initialMode!=='light') {
    document.body.classList.add(darkModeClass);
    changeThemeBtn.classList.remove(iconLightMode);
    changeThemeBtn.classList.add(iconDarkMode);
} 
// Change light/dark mode
const switchMode = () => {
    document.body.classList.toggle(darkModeClass);
    changeThemeBtn.classList.toggle(iconDarkMode);
    changeThemeBtn.classList.toggle(iconLightMode);
    // Save current state
    localStorage.setItem('selected-mode', selectedMode());
}
changeThemeBtn.addEventListener('click',switchMode);