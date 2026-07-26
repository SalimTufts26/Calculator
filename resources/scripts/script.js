const numberButtons = document.querySelector("#numbers");
const operatorButtons = document.querySelector("#operators");
const output = document.querySelector("#output");

for (let i = 0; i <= 9; i++){
  const button = document.createElement("button");
  button.id = String(i);
  button.textContent = button.id;
  numberButtons.appendChild(button);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => btn.addEventListener("click", () => {
  output.textContent = btn.id;
}));
console.log(buttons);
