const menuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("hidden");
  // Toggle icons based on visibility
  if (isOpen) {
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    menuBtn.setAttribute("aria-expanded", "false");
  } else {
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    menuBtn.setAttribute("aria-expanded", "true");
  }
});
