// Select menu button and navigation
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector("#primary-navigation ul");

// Toggle menu on click
menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");

  // Update aria-expanded attribute
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !isExpanded);
});