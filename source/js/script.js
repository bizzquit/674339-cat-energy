var menuButton = document.querySelector(".page-header__btn");
var menu = document.querySelector(".page-header__items");
var openingMenu = document.querySelector(".page-header__items--open");
var width = document.body.clientWidth;

if (width < 768) {
    if (openingMenu) {
        menu.classList.remove("page-header__items--open");
        menu.classList.add("page-header__items--close");
    }
}

  /*При открытом меню в мобаил - при увеличении VP и обратно меню поганило*/
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

    if (!openingMenu) {
      menuButton.style.backgroundImage = 'url("../img/icon-close.svg")';
    }
    else{
      menuButton.style.backgroundImage = 'url("../img/icon-mobile-menu.svg")';
    }


});
