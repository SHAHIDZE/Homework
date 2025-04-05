// 1

// function sameFirstLast(arr) {
//     return arr.length >= 1 && arr[0] === arr[arr.length - 1];
// }

// console.log(sameFirstLast([1, 2, 3]));
// console.log(sameFirstLast([1, 2, 3, 1]));
// console.log(sameFirstLast([1, 2, 1]));


// 2

// function oneCount(...arrays) {
//     let count = arrays.flat().reduce((sum, num) => sum + (num === 1 ? 1 : 0), 0);
    
//     const words = ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE"];
//     return { result: words[count] || count };
// }

// console.log(oneCount([1, 2, 3], [7, 1], [1, 3], [1])); 


// 3

// function answerCell(...args) {
//     return args.every(val => val === false);
// }

// console.log(answerCell(false, false, false, false, false));
// console.log(answerCell(false, false, false, true, false));
// console.log(answerCell(true, true, true));  


// 4

// function blackjack(min, max) {
//     const arr = [];
//     const numToWord = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
  
//     for (let i = 0; i < 2; i++) {
//       let num = Math.floor(Math.random() * (max - min + 1)) + min;
//       if (num < 10) {
//         arr.push(num);
//       } else {
//         arr.push(numToWord[num - 10]);
//       }
//     }
  
//     return {
//       max_number: max,
//       arr: arr,
//       arr_Length: arr.length,
//       type: 'string'
//     };
//   }
  
// console.log(blackjack(19, 21));  


// 5

// function removeDups(arr) {
//     return [...new Set(arr)];
//   }

// console.log(removeDups([1, 0, 1, 0]));
// console.log(removeDups(["The", "big", "cat"]));
// console.log(removeDups(["John", "Taylor", "John"]));  


// 6

// function getSumm(matrix) {
//     let sum = 0;
//     for (let row of matrix) {
//       for (let val of row) {
//         sum += val;
//       }
//     }
  
//     return sum > 10 ? { sum: sum } : { sum: 'seven' };
//   }

// console.log(getSumm([
//     [0, 1, 0, 0],
//     [1, 1, 0, 1],
//     [0, 1, 0, 1],
//     [0, 0, 1, 5]
//   ]));  


// 7

// function uniqueSort(arr) {
//     return [...new Set(arr)].sort((a, b) => a - b);
//   }
  

// console.log(uniqueSort([1, 2, 4, 3]));
// console.log(uniqueSort([1, 4, 4, 4, 4, 3, 2, 1, 2]));
// console.log(uniqueSort([6, 7, 3, 2, 1]));  


// 8

// function specialReverse(str, char) {
//     const words = str.split(" ");
//     const result = {};
  
//     for (let word of words) {
//       if (word.toLowerCase().startsWith(char.toLowerCase())) {
//         result[word] = word.split('').reverse().join('');
//       }
//     }
  
//     return result;
//   }
  
// console.log(specialReverse("word searches are super fun", "s"));  


// 9

// function max(arr) {
//     let maxVal = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > maxVal) {
//         maxVal = arr[i];
//       }
//     }
//     return maxVal;
//   }
  
//   console.log(max([5, 5, 5, 8, 6, 7, 4, 7]));  
