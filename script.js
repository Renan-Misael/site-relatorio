document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguer = document.getElementById('menu-hamburguer');
    const navLinks = document.querySelector('.nav-links');

    menuHamburguer.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link (opcional, mas melhora a experiência)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});
