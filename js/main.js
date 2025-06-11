// main.js

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleDarkModeBtn = document.getElementById("darkModeToggle");
    const scrollTopBtn = document.getElementById("scrollTop");
  
    // --- Gestion du mode sombre ---
    const darkModeKey = "darkModeEnabled";
  
    // Charger le mode sombre au chargement
    const savedMode = localStorage.getItem(darkModeKey);
    if (savedMode === "true") {
      body.classList.add("dark-mode");
    }
  
    // Fonction de bascule mode sombre
    function toggleDarkMode() {
      body.classList.toggle("dark-mode");
      const enabled = body.classList.contains("dark-mode");
      localStorage.setItem(darkModeKey, enabled);
    }
  
    if (toggleDarkModeBtn) {
      toggleDarkModeBtn.addEventListener("click", toggleDarkMode);
    }
  
    // --- Gestion du bouton retour en haut ---
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });
  
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  