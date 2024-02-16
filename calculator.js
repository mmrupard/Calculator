const plus = "+";
const minus = "-";
const times = "*";
const divides = "/";
let resultNumber = null;
let nextNumber = null;
let operation = null;
let isOperationSelected = false;
// This boolean is used to check if we need to clear the display to allow the next number to be input
let isFirstTimeNumBtnClicked = true;

const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".numberButton");
const clearButton = document.querySelector("#clearButton");
const operationButtons = document.querySelectorAll(".operationButton");
const equalsOperatorButton = document.querySelector("#equalsOperator");

// function defitions for the operations
function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(x, y, operator) {
  switch (operator) {
    case plus:
      return add(x, y);
    case minus:
      return substract(x, y);
    case times:
      return multiply(x, y);
    case divides:
      return divide(x, y);
    default:
      alert(operator + " is not a valid operation.");
  }
}

// function definitions for the button click event handlers
function numberButtonClickEventHandler(e) {
  if (isFirstTimeNumBtnClicked) {
    display.textContent = "";
  }

  display.textContent += e.target.value;

  if (isOperationSelected) {
    nextNumber = parseFloat(display.textContent);
  } else {
    resultNumber = parseFloat(display.textContent);
  }

  isFirstTimeNumBtnClicked = false;
}

numberButtons.forEach((numBtn) =>
  numBtn.addEventListener("click", numberButtonClickEventHandler)
);

function clearButtonClickEventHandler() {
  resultNumber = null;
  nextNumber - null;
  operation = null;
  isOperationSelected = false;
  isFirstTimeNumBtnClicked = true;
  display.textContent = "0";
}

clearButton.addEventListener("click", clearButtonClickEventHandler);

function operationButtonClickEventHandler(e) {
  operation = e.target.value;
  isOperationSelected = true;
  isFirstTimeNumBtnClicked = true;
}

operationButtons.forEach((optBtn) =>
  optBtn.addEventListener("click", operationButtonClickEventHandler)
);

function equalsOperatorButtonClickEventHandler(e) {
  if (resultNumber != null && nextNumber != null && operation != null) {
    let result = operate(resultNumber, nextNumber, operation);
    display.textContent = result;
    resultNumber = result;
  }
}

equalsOperatorButton.addEventListener(
  "click",
  equalsOperatorButtonClickEventHandler
);
