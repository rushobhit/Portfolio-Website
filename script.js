// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    }
});

// Responsive Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
