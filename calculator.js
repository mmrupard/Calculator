const plus = "+";
const minus = "-";
const times = "*";
const divides = "/";

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
