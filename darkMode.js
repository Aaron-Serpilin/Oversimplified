// Theme toggle code

// On page load, check user's color scheme preference and set default scheme
window.onload = (event) => {
    // Define the query to check
    const schemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  
    // Set scheme based upon whether user's preferences is dark or light
    const localTheme = localStorage.getItem("theme");
  
    if (localTheme !== null) {
      document.documentElement.setAttribute("data-theme", localTheme);
    } else {
      // If the css query we made says "yes they prefer a dark theme"
      if (schemeQuery.matches) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    }
  };
  
  const themeButton = document.querySelector(".themeToggle");
  // Add an event listener that adds the correct theme via data-theme attribute
  themeButton.addEventListener("click", () => {
    // Add class for transition only when toggling the theme
    document.documentElement.classList.add("theme-transition");
  
    // Toggle the theme
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  
    // Remove the transition class, so it doesn't show it on page reload
    document.documentElement.classList.remove(".theme-transition");
  });
  
  