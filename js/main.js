document.addEventListener('DOMContentLoaded', () => {
    // Menu Móvil
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Cambio de estilo del navbar al hacer scroll
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-md');
                navbar.classList.replace('bg-white/95', 'bg-white');
            } else {
                navbar.classList.remove('shadow-md');
                navbar.classList.replace('bg-white', 'bg-white/95');
            }
        });
    }
    
});