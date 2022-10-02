$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
const buttons = $$("button");
const display = $(".display");
let temp = 0;
let result = 0;
let PrevAction = "";
buttons.forEach((button) => {
  button.onclick = function () {
    const lengthNumber = display.innerText.length;
    if (lengthNumber <= 8) {
      display.style.fontSize = "50px";
    } else if (lengthNumber > 8 && lengthNumber < 11) {
      display.style.fontSize = "40px";
    } else if (lengthNumber >= 11) {
      display.style.fontSize = "30px";
    }
    switch (this.innerText) {
      case "0":
        display.innerText += 0;
        break;
      case "1":
        display.innerText += 1;
        break;
      case "2":
        display.innerText += 2;
        break;
      case "3":
        display.innerText += 3;
        break;
      case "4":
        display.innerText += 4;
        break;
      case "5":
        display.innerText += 5;
        break;
      case "6":
        display.innerText += 6;
        break;
      case "7":
        display.innerText += 7;
        break;
      case "8":
        display.innerText += 8;
        break;
      case "9":
        display.innerText += 9;
        break;
      case "AC":
        display.innerText = "";
        break;
      case ",":
        display.innerText += ".";
        break;
      case "+/-":
        display.innerText += "-";
        break;
      case "+":
        PrevAction = "+";
        temp = +display.innerText;
        display.innerText = "";
        break;
      case "-":
        PrevAction = "-";
        temp = +display.innerText;
        display.innerText = "";
        break;
      case "x":
        PrevAction = "x";
        temp = +display.innerText;
        display.innerText = "";
        break;
      case "/":
        PrevAction = "/";
        temp = +display.innerText;
        display.innerText = "";
        break;
      case "=":
        if (PrevAction == "+") {
          result = temp + +display.innerText;
        } else if (PrevAction == "-") {
          result = temp - +display.innerText;
        } else if (PrevAction == "x") {
          result = temp * +display.innerText;
        } else if (PrevAction == "/") {
          result = temp / +display.innerText;
        }
        display.innerText = result;
        break;
    }
  };
});
