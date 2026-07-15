const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((accum, current) => accum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((accum, current) => accum * current, 1);
};

const power = function(base, exp) {
	return base**exp;
};

const factorial = function(n) {
  let total = 1;
  for(n; n > 1; n--){
    total *= n;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
