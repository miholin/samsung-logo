const colorSlider = document.getElementById("colorSlider");
const logoSVG = document.getElementById("logoSVG");
const paths = logoSVG.querySelectorAll("path");

// Event listener for color change
colorSlider.addEventListener("input", (event) => {
  const newColor = event.target.value; // Get the selected color value
  paths.forEach((path) => {
    path.setAttribute("fill", newColor); // Update fill color of each path
  });
});

document.querySelector('.burger-menu').addEventListener('click', () => {
  const menuLinks = document.querySelectorAll('.topnav a:not(.logo)'); // Vsi meniji razen logotipa
  menuLinks.forEach(link => {
    link.style.display = link.style.display === 'block' ? 'none' : 'block';
  });
});

