let inputBox = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let arrays = Array.from(buttons);
let string = "";

arrays.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      inputBox.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      inputBox.value = string;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      inputBox.value = string;
    } else {
      string += e.target.innerHTML;
      inputBox.value = string;
    }
  });
});
