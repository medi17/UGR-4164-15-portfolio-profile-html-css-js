const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const menu_bar = document.getElementById('menu_bar');
menu.addEventListener('click', function () {
    logo.style.display = 'none';
    menu.style.display = 'none';
    menu_bar.style.display = 'block';
    navbar.style.height = '680px';
    navbar.style.backgroundColor = 'var(--gray-50)';

});

const downloadButton = document.getElementById('download-CV');

downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = '../images/addis.jfif'; // Replace with the actual path to your CV file
  link.download = 'Medan-cv.pdf'; // Set the desired filename for the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


