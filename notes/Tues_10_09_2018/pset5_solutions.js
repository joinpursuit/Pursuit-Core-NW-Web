/*
    PROBLEM 1:
        Write a function that takes THREE params: a, b, c
        return the remainder of the sum of a,b,c divided by 3
*/ 

// Function Declaration
function remainderOfSum(a,b,c) {
  const sum = a + b + c;
  return sum % 3;
}

// Function Expression
const remainderOfSum2 = function(a,b,c) {
  const sum = a + b + c;
  return sum % 3;
}

// Fat Arrow =>
const remainderOfSum3 = (a,b,c) => {
  const sum = a + b + c;
  return sum % 3;
}

const remainderOfSum4 = (a,b,c) => (a + b + c) % 3; 

/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three'
        then function will return 'one-two-three'
*/

// Function Declaration
function threeParams1(a = 'one', b ='two', c='three') {
  return a + '-' + b + '-' + c;
}



console.log(threeParams1());

// Function Expression
const threeParams2 = function(a, b, c) {
  return `${a}-${b}-${c}`;
}

// Fat Arrow
const threeParams3 = (a, b, c) => {
  return `${a}-${b}-${c}`;
}

/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/

// Function Declaration
function randomNumber() {
  return Math.random() * 10;
}

console.log(randomNumber());

// Function Expression
const randomNumber2 = function() {
  return Math.random() * 10;
}

// Fat Arrow
const randomNumber3 = () => Math.random() * 10;
