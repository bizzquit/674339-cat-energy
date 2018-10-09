var menuButton = document.querySelector(".page-header__main-menu");
var menuOpen = document.querySelector(".page-header__items");

menuButton.addEventListener("click", function() {
  menuOpen.classList.add("page-header__items--open");
});
