(() => {
  const root = document.documentElement;
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  const preference = window.matchMedia("(prefers-color-scheme: dark)");
  let savedTheme = null;

  try {
    savedTheme = window.localStorage.getItem("portfolio-theme");
  } catch {
    // The system preference remains available when browser storage is disabled.
  }

  root.dataset.theme = savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : preference.matches
      ? "dark"
      : "light";

  const updateButton = () => {
    const isDark = root.dataset.theme === "dark";
    button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    button.querySelector(".theme-toggle__text").textContent = isDark ? "Light mode" : "Dark mode";
    button.querySelector(".theme-toggle__icon").textContent = isDark ? "☼" : "◐";
  };

  button.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try {
      window.localStorage.setItem("portfolio-theme", root.dataset.theme);
    } catch {
      // The selected theme still applies for this page view.
    }
    updateButton();
  });

  updateButton();
  button.hidden = false;
})();
