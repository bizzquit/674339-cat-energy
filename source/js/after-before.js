var btnBefore = document.querySelector('.before-after__block--before');
var btnAfter = document.querySelector('.before-after__block--after');
var imgAfter = document.querySelector(".before-after__image--after");
var imgBefore = document.querySelector(".before-after__image--before");
var indicator = document.querySelector(".before-after__indicator-left");
var indiLeft = document.querySelector(".before-after__indicator-left");
var indiRight = document.querySelector(".before-after__indicator-right");

btnAfter.addEventListener("click", function () {
  imgBefore.style.display = "none";
  imgAfter.style.display = "block";
  indicator.style.left = "395px";

  if (width < 768)
    {
      indiLeft.classList.remove("before-after__indicator--active");
      indiRight.classList.add("before-after__indicator--active");
      indiRight.style.marginRight = "5px";
    }
});

btnBefore.addEventListener("click", function () {
  imgAfter.style.display = "none";
  imgBefore.style.display = "block";
  indicator.style.left = "-15px";

  if (width < 768)
    {
      alert("1");
      indiLeft.classList.add("before-after__indicator--active");
      indiRight.classList.remove("before-after__indicator--active");
    }
});
