// Main JavaScript for Professional Organizer

document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const htmlElement = document.documentElement;
    const getThemeToggles = () => document.querySelectorAll('#themeToggle, #themeToggleMobile, .theme-toggle');

    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);

    document.addEventListener('click', (e) => {
        if (e.target.closest('#themeToggle') || e.target.closest('#themeToggleMobile') || e.target.closest('.theme-toggle')) {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcons(newTheme);
        }
    });

    function updateThemeIcons(theme) {
        getThemeToggles().forEach(toggle => {
            toggle.innerHTML = theme === 'light' ? '<i class="bi bi-moon-stars"></i>' : '<i class="bi bi-sun"></i>';
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.padding = '8px 0';
                navbar.style.boxShadow = 'var(--shadow-md)';
            } else {
                navbar.style.padding = '16px 0';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // RTL Toggle
    window.toggleRTL = function() {
        const currentDir = htmlElement.getAttribute('dir');
        const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        htmlElement.setAttribute('dir', newDir);
        localStorage.setItem('dir', newDir);
    };

    // Load saved RTL preference
    const savedDir = localStorage.getItem('dir') || 'ltr';
    htmlElement.setAttribute('dir', savedDir);

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.style.display = 'flex';
            } else {
                backToTop.style.display = 'none';
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
