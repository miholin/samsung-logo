// Get the slider and the SVG paths
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
