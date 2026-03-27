// Main JavaScript for Professional Organizer

document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggles = [document.getElementById('themeToggle'), document.getElementById('themeToggleMobile')];
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);

    themeToggles.forEach(toggle => {
        if (toggle) {
            toggle.addEventListener('click', () => {
                const currentTheme = htmlElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                htmlElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                updateThemeIcons(newTheme);
            });
        }
    });

    function updateThemeIcons(theme) {
        themeToggles.forEach(toggle => {
            if (toggle) {
                toggle.innerHTML = theme === 'light' ? '<i class="bi bi-moon-stars"></i>' : '<i class="bi bi-sun"></i>';
            }
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
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // RTL Toggle (Internal for verification)
    window.toggleRTL = function() {
        const currentDir = htmlElement.getAttribute('dir');
        htmlElement.setAttribute('dir', currentDir === 'rtl' ? 'ltr' : 'rtl');
    };

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
            newsletterForm.reset();
        });
    }
});
