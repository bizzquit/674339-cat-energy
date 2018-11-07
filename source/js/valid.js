var arr = document.querySelectorAll(".text-item__input--required");

for (var i = 0; i < arr.length; i++) {
  arr[i].onblur = function() {
    var text = this.value;
    if(!text) {
      this.classList.add("error")
      this.style.border = "2px solid #ff8282";
    }
  };
}
