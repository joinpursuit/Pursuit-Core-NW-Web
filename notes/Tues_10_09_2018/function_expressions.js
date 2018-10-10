// 1. FUNCTION DECLARATION
function add(a, b) {
  return a + b;
}

add(1,1);

add = 2;

// add(5,5);
// 2(5,5);'

// 2. FUNCTION EXPRESSION
const hello = 5;

const subtract = function(a, b) {
  return a - b;
}

// hello(3); can't do this
console.log(subtract(5, 7));

// 3. FAT ARROW EXPRESSION
// const multiply = function(a,b) {
//   return a * b;
// }
const multiply = (a,b) => {
  return a * b;
}

console.log(multiply(5,5));


