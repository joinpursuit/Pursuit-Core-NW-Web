// Reduce

const numbers = [1,2,3,4,5];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
// console.log(sum);

let sum2 = 0;
numbers.forEach(num => {
  sum2 += num;
})
// console.log(sum2);

// [1,2,3,4,5]
let sum3 = numbers.reduce((acc, currentItem) => {
  return acc + currentItem;
}, 0);

let sum4 = numbers.reduce((acc, currentItem, i, original) => {
  return acc + currentItem;
});

// console.log('sum3: ', sum3);

const web_instructors = ['Mo', 'Taq', 'Reed', 'Corey'];

// 'The Web Instructors are Mo, Taq, Reed, Corey.'

const str = web_instructors.reduce((acc, currentItem, i, original) => {
  return acc + currentItem + ', ';
}, 'The Web Intructors are ');

const str1 = web_instructors.reduce((acc, currentItem, i, original) => {
  return `${acc}, ${currentItem}`;
}, 'The Web Intructors are ');

// console.log(str);


const otherNums = [ 300, -5, 7, 9, -8, 9, 2, -2 ];

const negativeNums = otherNums.reduce((acc, currentItem) => {
  if (currentItem < 0) {
    acc.push(currentItem);
  }
  return acc;
}, [])

console.log(negativeNums);


const matrix = [ [1,2,3], [90, 3],['a', 'b'] ];

// [ 1,2,3,90,3,'a','b' ]

const flattenedArray = matrix.reduce((acc, currentItem) => {
  return acc.concat(currentItem);
}, []);

console.log(flattenedArray);

