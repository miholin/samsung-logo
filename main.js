document.addEventListener("DOMContentLoaded", function () {
  const colorSlider = document.getElementById("colorSlider");
  const logoSVG = document.getElementById("logoSVG");
  const logoPaths = logoSVG ? logoSVG.querySelectorAll("path") : [];

  const colorSliderTelefon = document.getElementById("color-picker-telefon");
  const telefonSVG = document.getElementById("telefon");
  const telefonPaths = telefonSVG ? telefonSVG.querySelectorAll("path") : [];

  // Funkcija za posodobitev barve
  function updateColor(paths, newColor) {
    paths.forEach((path) => {
      path.style.fill = newColor; // Posodobi stil 'fill' atribut za vsak path
      console.log("Updated path:", path, "New fill:", newColor);
      if (newColor === "#ffffff" || newColor === "rgb(255, 255, 255)") {
        path.setAttribute("fill", newColor); // Dodatno preverjanje za belo barvo
      }
    });
  }

  // Ponastavitev barv ob nalaganju strani
  function resetColors() {
    if (colorSlider) {
      colorSlider.value = "#0032A0"; // Privzeta barva logotipa
      if (logoPaths.length > 0) {
        updateColor(logoPaths, "#0032A0");
      }
    }
    if (colorSliderTelefon) {
      colorSliderTelefon.value = "#ffffff"; // Privzeta bela barva za telefon
      if (telefonPaths.length > 0) {
        updateColor(telefonPaths, "#ffffff");
      }
    }
  }

  // Ponastavi barve ob nalaganju strani
  resetColors();

  // Sprememba barve logotipa
  if (colorSlider) {
    colorSlider.addEventListener("input", (event) => {
      const newColor = event.target.value; // Pridobi izbrano barvo
      console.log("New color for logo:", newColor);
      if (logoPaths.length > 0) {
        updateColor(logoPaths, newColor);
      }
    });

    colorSlider.addEventListener("change", (event) => {
      const newColor = event.target.value; // Pridobi izbrano barvo
      console.log("New color for logo on change:", newColor);
      if (logoPaths.length > 0) {
        updateColor(logoPaths, newColor);
      }
    });
  }

  // Sprememba barve telefona
  if (colorSliderTelefon) {
    colorSliderTelefon.addEventListener("input", (event) => {
      const newColor = event.target.value; // Pridobi izbrano barvo
      console.log("New color for telefon:", newColor);
      if (telefonPaths.length > 0) {
        updateColor(telefonPaths, newColor);
      }
    });

    colorSliderTelefon.addEventListener("change", (event) => {
      const newColor = event.target.value; // Pridobi izbrano barvo
      console.log("New color for telefon on change:", newColor);
      if (telefonPaths.length > 0) {
        updateColor(telefonPaths, newColor);
      }
    });
  }
});






document.querySelector('.burger-menu').addEventListener('click', () => {
  const menuLinks = document.querySelectorAll('.topnav a:not(.logo)'); // Vsi meniji razen logotipa
  menuLinks.forEach(link => {
    link.style.display = link.style.display === 'block' ? 'none' : 'block';
  });
});
