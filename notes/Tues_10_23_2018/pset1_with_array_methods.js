/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/


const average = (arr) => {
  let sum = 0;
  arr.forEach(function(currentItem) {
    sum += currentItem;
  });
  return sum / arr.length;
}

// average([1,2,3,4]);

/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/

// const squareEach = (arr) => {
//   const newArray = arr.map((currentElement) => {
//     return currentElement ** 2;
//   });
//   return newArray;
// }

const squareEach = (arr) => {
  return arr.map((currentElement) => {
    return currentElement ** 2;
  });
}

// console.log(squareEach([1,2,3,4])); // [1,4,9,16]

/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/

const averageSquare = (arr) => {
  let sum = 0;

  arr.map(element => {
    element = element ** 2;
    sum += element;
    return sum;
  })

  return sum / arr.length;
}

const averageSquare2 = (arr) => {
  let squaredArray = squareEach(arr);
  let averageArray = average(squaredArray);
  return averageArray;
}

const averageSquare3 = arr => average(squareEach(arr));

// console.log(averageSquare([1,2,3,4]));
// console.log(averageSquare2([1,2,3,4]));


/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/

const negateArr = (arr) => {
  return arr.map((e) => {
    return e * -1;
  })
}

// negateArr([1,2,3,4]);

/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/

const reverseArr = (arr) => {
  let newArray = [];
  arr.forEach((currentElement) => {
    newArray.unshift(currentElement);
  })
  return newArray;
}

const reverseArr1 = (arr) => {
  let newArray = [];
  const reverse = arr.map((element) => {
    newArray.unshift(element);
  })
  return newArray;
}

const reverseArr2 = (arr) => {
  return arr.map((currentItem, i, original) => {
    console.log(currentItem);
    console.log(i);
    console.log(original);
    console.log('----------');
    return original[arr.length - 1 - i];
  })
}

// console.log(reverseArr([1,2,3,4]));
console.log(reverseArr2([1,2,3,4]));

/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/

