var btnBefore = document.querySelector('.before-after__block--before');
var btnAfter = document.querySelector('.before-after__block--after');
var imgAfter = document.querySelector(".before-after__image--after");
var imgBefore = document.querySelector(".before-after__image--before")
var indicator = document.querySelector(".before-after__indicator-left")

btnAfter.addEventListener("click", function () {
  imgBefore.style.display = "none";
  imgAfter.style.display = "block";
  fotoCatBefore.style.width = "690px";
  indicator.style.left = "395px";
});

btnBefore.addEventListener("click", function () {
  imgAfter.style.display = "none";
  imgBefore.style.display = "block";
  fotoCatBefore.style.width = "0px";
  indicator.style.left = "-15px";
});
