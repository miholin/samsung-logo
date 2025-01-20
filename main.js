document.addEventListener("DOMContentLoaded", function () {
  // 1. Elementi in konstante
  const colorSlider = document.getElementById("colorSlider");
  const logoSVG = document.getElementById("logoSVG");
  const logoPaths = logoSVG ? logoSVG.querySelectorAll("path") : [];

  const colorSliderTelefon = document.getElementById("color-picker-telefon");
  const telefonSVG = document.getElementById("telefon");

  // Namesto samo phone-body, zgrabimo vse path-e iz #phone-body in #phone-buttons
  const phoneElements = telefonSVG
    ? telefonSVG.querySelectorAll("#phone-body, #phone-buttons path")
    : null;

  // 2. Funkcija za posodobitev barve (dela z nizom elementov ali enim elementom)
  function updateColor(elements, newColor) {
    if (!elements) return;

    // Poskrbimo, da je elements vedno array-like za .forEach
    const list = elements instanceof NodeList || Array.isArray(elements)
      ? elements
      : [elements];

    list.forEach((el) => {
      el.style.fill = newColor;
      el.style.fillOpacity = "1";
    });
  }

  // 3. resetColors() – ob nalaganju
  function resetColors() {
    // Telefon pustimo v original barvi (ne barvamo ga z #ffffff)
    
    // Logotip: nastavimo privzeto vrednost in ga pobarvamo v modro
    if (colorSlider) {
      colorSlider.value = "#0032A0";
      if (logoPaths.length > 0) {
        updateColor(logoPaths, "#0032A0");
      }
    }

    // Nastavimo barvo izbirnika telefona (lahko #ffffff ali kakšno drugo)
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

  // 6. Dogodki – barvanje ohišja + tipk skupaj
  if (colorSliderTelefon) {
    colorSliderTelefon.addEventListener("input", (event) => {
      const newColor = event.target.value;
      if (phoneElements) {
        updateColor(phoneElements, newColor);
      }
    });
    colorSliderTelefon.addEventListener("change", (event) => {
      const newColor = event.target.value;
      if (phoneElements) {
        updateColor(phoneElements, newColor);
      }
    });
  }

  // 7. Burger menu (ostane enako)
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

  // 8. Gumb "Moj Kontakt" – SweetAlert2 (ostane enako)
  const gumbVizitka = document.getElementById("btnVizitka");
  if (gumbVizitka) {
    gumbVizitka.addEventListener("click", (e) => {
      e.preventDefault();
      Swal.fire({
        title: "Vizitka",
        text: "Miha Sever\nERŠ 4.RB",
        icon: "info",
        confirmButtonText: "Zapri",
      });
    });
  }
});
