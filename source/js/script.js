var menuButton = document.querySelector(".page-header__btn");
var menu = document.querySelector(".page-header__items");
var openingMenu = document.querySelector(".page-header__items--open");
var closeMenu = document.querySelector(".page-header__items--close");
var width = document.body.clientWidth;

if (width < 768) {
    if (openingMenu) {
        menu.classList.remove("page-header__items--open");
        menu.classList.add("page-header__items--close");
        menuButton.classList.add("page-header__btn--close");
    }
}

  /*При открытом меню в мобаил - при увеличении VP (альбом/ландшафт) и обратно меню поганило*/
window.addEventListener("resize", function () {
    width = document.body.clientWidth;
    if (width < 768) {
        if (openingMenu) {
            menu.classList.remove("page-header__items--open");
            menu.classList.add("page-header__items--close");
        }
    }
    if (width > 768) {
        if (openingMenu) {
            menu.classList.remove("page-header__items--close");
            menu.classList.add("page-header__items--open");
        }
    }
});

menuButton.addEventListener("click", function () {
    menu.classList.toggle("page-header__items--open");
    menu.classList.toggle("page-header__items--close");
    menuButton.classList.toggle("page-header__btn--close");
    menuButton.classList.toggle("page-header__btn--open");
});
