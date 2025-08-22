console.log("hello jaan");

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
  equation += e.target.innerText;
  display.value = equation;
  // console.log(equation);
};

// console.log(buttonsComponent);

buttons.forEach((element) => {
  let buttonElement = document.createElement("button");
  buttonElement.classList.add("clear-display");
  buttonElement.addEventListener("click", handleClick);
  buttonElement.innerText = element;
  buttonsComponent.append(buttonElement);
});
