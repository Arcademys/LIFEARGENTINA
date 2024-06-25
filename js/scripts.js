// JavaScript for floating social media icons (optional)
window.addEventListener('DOMContentLoaded', (event) => {
        const socialIcons = document.querySelectorAll('footer .social-icons a');
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseover', () => {
                icon.style.transform = 'scale(1.2)';
            });
            icon.addEventListener('mouseout', () => {
                icon.style.transform = 'scale(1)';
            });
        });
    });