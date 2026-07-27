const numberButtons = document.querySelector("#numbers");
const operatorButtons = document.querySelector("#operators");
const output = document.querySelector("#output");
const clearBtn = document.querySelector("#clear");
let selection;

let numA;
let numB;
let operator;

// Create Number Buttons
for (let i = 0; i <= 9; i++){
  const button = document.createElement("button");
  button.id = String(i);
  button.textContent = button.id;
  numberButtons.appendChild(button);
}

// Add event listener to each button
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => btn.addEventListener("click", () => {
  selection = btn.id;
  console.log(selection)
}));

// Calculation Logic

const mathFunc = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

function operate(a, b, o) {
  return mathFunc[o](a, b);
}


