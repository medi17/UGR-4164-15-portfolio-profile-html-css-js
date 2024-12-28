const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const menu_bar = document.getElementById('menu_bar');

menu.addEventListener('click', function () {
    logo.style.display = 'none';
    menu.style.display = 'none';
    menu_bar.style.display = 'block';
    navbar.style.height = '680px';
    navbar.style.backgroundColor = 'var(--gray-50)';
    document.body.style.overflow = 'hidden'; 

});

const downloadButton = document.getElementById('download-CV');

downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = '../images/addis.jfif'; 
  link.download = 'Medan-cv.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
menu.addEventListener('blur', () => {
  body.style.overflow = 'auto'; 
});


