var arr = document.querySelectorAll("input , textarea");

for (var i = 0; i < arr.length; i++) {
  arr[i].onblur = function() {
    var text = this.value;
    if(!text) {
      this.classList.add("error")
      this.style.border = "2px solid #ff8282";
    }
  };
}
