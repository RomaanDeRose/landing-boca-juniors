const navMenu = document.getElementById("nav-mobile");
const navMenuBtn = document.getElementById("nav-menu-btn");

navMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
