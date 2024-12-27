const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const menu_bar = document.getElementById('menu_bar')
menu.addEventListener('click', function () {
    logo.style.display = 'none';
    menu.style.display = 'none';
    menu_bar.style.display = 'block';
    navbar.style.height = '680px';
    navbar.style.backgroundColor = 'var(--gray-50)';

});