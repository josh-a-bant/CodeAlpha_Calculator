let buttons = [
  "7",
  "8",
  "9",
  "+",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "*",
  "C",
  "0",
  "=",
  "/",
];

let display = document.querySelector("input");
let buttonsComponent = document.getElementById("buttons");
let equation = "";

let handleClick = (e) => {
  if (e.target.innerText === "C") {
    equation = "";
  } else if (e.target.innerText === "=") {
    let result = eval(equation);
    equation = result;
  } else {
    equation += e.target.innerText;
  }

  display.value = equation;
};

buttons.forEach((element) => {
  let buttonElement = document.createElement("button");

  if (element === "C") {
    buttonElement.classList.add("clear-display");
  } else if (
    element === "+" ||
    element === "-" ||
    element === "*" ||
    element === "/" ||
    element === "="
  ) {
    buttonElement.classList.add("operational-button");
  }

  buttonElement.addEventListener("click", handleClick);
  buttonElement.innerText = element;
  buttonsComponent.append(buttonElement);
});
