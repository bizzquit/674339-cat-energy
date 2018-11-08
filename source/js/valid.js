var arr = document.querySelectorAll(".text-item__input--required");

for (var i = 0; i < arr.length; i++)
{
  arr[i].onblur = function() {
    var text = this.value;
    if(!text) {
      this.classList.add("text-item__input--error");
    }
    if(text) {
      this.classList.remove("text-item__input--error");
    }
  };
}
