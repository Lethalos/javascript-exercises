const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sumNum = 0;
  for (let i = 0; i < arr.length; i++) {
    sumNum += arr[i];
  }

  return sumNum;
};

const multiply = function (arr) {
  let multi = 1;
  for (let i = 0; i < arr.length; i++) {
    multi *= arr[i];
  }

  return multi;
};

const power = function (a, b) {
  let multi = 1;
  for (let i = 0; i < b; i++) {
    multi *= a;
  }
  return multi;
};

const factorial = function (a) {
  if (a <= 1) {
    return 1;
  }

  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
