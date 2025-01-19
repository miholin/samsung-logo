document.addEventListener("DOMContentLoaded", function () {
  // 1. Elementi in konstante
  const colorSlider = document.getElementById("colorSlider");
  const logoSVG = document.getElementById("logoSVG");
  const logoPaths = logoSVG ? logoSVG.querySelectorAll("path") : [];

  const colorSliderTelefon = document.getElementById("color-picker-telefon");
  const telefonSVG = document.getElementById("telefon");

  // Vseh g z id="main-body" je lahko več; zberemo vse <path> v njih
  const mainBodyPaths = telefonSVG
    ? telefonSVG.querySelectorAll("#main-body path")
    : [];

  // 2. Funkcija za posodobitev barve
  function updateColor(paths, newColor) {
    paths.forEach((path) => {
      path.style.fill = newColor;
      path.style.fillOpacity = "1"; 
    });
  }

  // 3. resetColors() – ob nalaganju
  function resetColors() {
    // Pobarvamo SAMO main-body v belo
    if (mainBodyPaths.length > 0) {
      updateColor(mainBodyPaths, "#ffffff");
    }

    // Nastavimo logotip na modro (ali vašo barvo)
    if (colorSlider) {
      colorSlider.value = "#0032A0";
      if (logoPaths.length > 0) {
        updateColor(logoPaths, "#0032A0");
      }
    }

    // Nastavimo privzeto barvo izbirnika telefona
    if (colorSliderTelefon) {
      colorSliderTelefon.value = "#ffffff";
    }
  }

  // 4. Ob nalaganju pokličemo resetColors
  resetColors();

  // 5. Dogodki – barvanje logotipa
  if (colorSlider) {
    colorSlider.addEventListener("input", (event) => {
      const newColor = event.target.value;
      if (logoPaths.length > 0) {
        updateColor(logoPaths, newColor);
      }
    });
    colorSlider.addEventListener("change", (event) => {
      const newColor = event.target.value;
      if (logoPaths.length > 0) {
        updateColor(logoPaths, newColor);
      }
    });
  }

  // 6. Dogodki – barvanje SAMO main-body telefona
  if (colorSliderTelefon) {
    colorSliderTelefon.addEventListener("input", (event) => {
      const newColor = event.target.value;
      if (mainBodyPaths.length > 0) {
        updateColor(mainBodyPaths, newColor);
      }
    });
    colorSliderTelefon.addEventListener("change", (event) => {
      const newColor = event.target.value;
      if (mainBodyPaths.length > 0) {
        updateColor(mainBodyPaths, newColor);
      }
    });
  }

  // 7. Burger menu
  const burgerBtn = document.querySelector(".burger-menu");
  if (burgerBtn) {
    burgerBtn.addEventListener("click", () => {
      const menuLinks = document.querySelectorAll(".topnav a:not(.logo)");
      menuLinks.forEach((link) => {
        link.style.display =
          link.style.display === "block" ? "none" : "block";
      });
    });
  }

  // 8. Gumb "Moj Kontakt" – SweetAlert2
  const gumbVizitka = document.getElementById("btnVizitka");
  if (gumbVizitka) {
    gumbVizitka.addEventListener("click", (e) => {
      e.preventDefault();
      // SweetAlert2 => Swal.fire(...)
      Swal.fire({
        title: "Moja Vizitka",
        text: "Matjaž Novosel\nEmail: matjaz@example.com\nTelefon: +386 40 123 456",
        icon: "info",
        confirmButtonText: "Zapri",
      });
    });
  }
});
