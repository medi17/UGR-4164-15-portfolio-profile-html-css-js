const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
menu.addEventListener('click', function () {
    logo.style.display = 'none';
    menu.style.display = 'none';
    navbar.style.height = '680px';
    navbar.style.backgroundColor = 'var(--gray-50)';
    menu_bar.style.display = 'block';
});