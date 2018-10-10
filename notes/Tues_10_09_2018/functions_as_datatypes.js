
// function add(a ,b) {
//   return a + b;
// }


// console.log(typeof add(1,1));
// console.log(typeof add);

// add = 55;
// console.log(typeof add);
// console.log(add);


// ---- Solution 1 for Problem 4
// function missingParameter(paramName) {
//   console.log(`you're missing ${paramName}`);
//   return 0;
// }

// function addTwoNums(a = missingParameter('a'), b = missingParameter('b')) {
//   console.log('a: ', a);
//   console.log('b: ', b);
//   return a + b;
// }


// const value = addTwoNums(5);
// console.log(value);

// Solution 2: Problem 4

function missingParameter(paramName) {
  throw new Error(`you're missing ${paramName} fam.`);
}

function addTwoNums(a = missingParameter('a'), b = missingParameter('b')) {
  console.log('a: ', a);
  console.log('b: ', b);
  return a + b;
}

const value = addTwoNums(5);
console.log(value);





