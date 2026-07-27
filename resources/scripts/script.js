const numberButtons = document.querySelector("#numbers");
const operatorButtons = document.querySelector("#operators");
const output = document.querySelector("#output");

let first = "";
let second = "";
let operation = "";
let preCalc = true;

// Create Buttons
for (let i = 0; i <= 9; i++){
  const button = document.createElement("button");
  button.id = String(i);
  button.textContent = button.id;
  numberButtons.appendChild(button);
}

// Add event listener to each button
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => btn.addEventListener("click", () => {
  if (preCalc) {
    switch(btn.id) {
      case "clear":
        output.textContent = "";
        first = "";
        second = "";
        operator = "";
        preCalc = true;
        break;
      case "+":
      case "-":
      case "/":
      case "x":
        output.textContent = btn.id;
        operation = btn.id;
        preCalc = false;
        break;
      case "=":
        output.textContent = first;
        break;
      default:
        output.textContent += btn.id;
        first += btn.id;
        break;
    }
  } else {
    switch(btn.id) {
      case "clear":
        output.textContent = "";
        first = "";
        second = "";
        operation = "";
        preCalc = true;
        break;
      case "+":
      case "-":
      case "/":
      case "x":
      case "=":
        if (operation == "+"){
          first = add(first, second);
        } else if (operation == "-") {
          first = subtract(first, second);
        } else if (operation == "/") {
          first = divide(first, second);
        } else {
          first = multiply(first, second);
        }
        second = "";
        break;
      default:
        output.textContent = btn.id;
        second += btn.id;
        break;
    }
  }
}));


// Math Operation Functions

function add(a, b) {
  a = Number(a);
  b = Number(b);
  output.textContent = a + b;
};
function subtract(a, b) {
  a = Number(a);
  b = Number(b);
  output.textContent = a - b;
};
function divide(a, b) {
  a = Number(a);
  b = Number(b);
  output.textContent = a / b;
};
function multiply(a, b) {
  a = Number(a);
  b = Number(b);
  output.textContent = a * b;
};

