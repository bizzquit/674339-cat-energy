/*var menuButton = document.querySelector(".page-header__btn");
var menu = document.querySelector(".page-header__items");
var openingMenu = document.querySelector(".page-header__items--open");*/
var width = document.body.clientWidth;


if (width < 768) {
    var menuButton = document.querySelector(".page-header__btn");
    var menu = document.querySelector(".page-header__items");
    var openingMenu = document.querySelector(".page-header__items--open");
    if (openingMenu) {
        menu.classList.remove("page-header__items--open");
        menu.classList.add("page-header__items--close");
    }
    menuButton.addEventListener("click", function () {
        menu.classList.toggle("page-header__items--open");
        menu.classList.toggle("page-header__items--close");
    });
}
