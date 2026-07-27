const numberButtons = document.querySelector("#numbers");
const operatorButtons = document.querySelector("#operators");
const output = document.querySelector("#output");
const clearBtn = document.querySelector("#clear");
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const ops = ['add', 'divide', 'multiply', 'subtract', 'calculate']

let numA = "";
let numB = "";
let operator = "";

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
  // Clear the calculator
  if (btn.id == "clear") {
    numA = "";
    numB = "";
    operator = "";
    output.textContent = "";
  }

  // Determine numA
  if (operator == "") {
    if (nums.includes(Number(btn.id))) {
      numA += btn.id;
      output.textContent = numA;
    }
    if (ops.includes(btn.id) && btn.id !== "calculate") {
      operator = btn.id;
      output.textContent += ` ${mathFunc[operator].key} `;
    }

  // Determine numB
  } else {
    if (nums.includes(Number(btn.id))) {
      numB += btn.id;
      output.textContent += btn.id;
    }
    if (ops.includes(btn.id)) {
      calculation = operate(Number(numA), Number(numB), operator);
      numA = calculation;
      numB = "";
      switch(btn.id) {
        case "calculate":
          output.textContent = calculation;
          operator = "";
          break;
        default:
          operator = btn.id;
          output.textContent = calculation + ` ${mathFunc[operator].key} `;
          break;
      }
    }
  }
}));

// Calculation Logic

const mathFunc = {
  add: {
    calc: (a, b) => a + b,
    key: '+'
  },
  subtract: {
    calc: (a, b) => a - b,
    key: '-'
  },
  multiply: {
    calc: (a, b) => a * b,
    key: 'x'
  },
  divide: {
    calc: (a, b) => a / b,
    key: '/'
  }
}

function operate(a, b, o) {
  return mathFunc[o].calc(a, b);
}
