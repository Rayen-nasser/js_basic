let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let ch = mix.map(function (el) {
    return isNaN(el) ? el : '';
}).reduce(function (acc, current) {
    return `${acc}${current}`;
});
console.log(ch);

// Assignment 2

let myString = "EElllzzzzzzzeroo";
let removeLetters = myString
    .split("")
    .filter(function (ele, index, arr) {
        return arr.indexOf(ele) === index;
    })
    .reduce(function (a, c) {
        return a + c;
    });
console.log(removeLetters);

// Assignment 3
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let flatArray = myArray
    .reduce((acc, cur) => acc.concat(cur), [])
    .reduce((acc, cur) => acc + cur);
console.log(flatArray); // Elzero

// Assignment 4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let ch2 = numsAndStrings.filter(function (el) {
    return !isNaN(el);
}).map(function (el) {
    return -el;
})
console.log(ch2)


// [-1, -10, 10, 20, -5, -3]


// Assignment 5

let nums = [2, 12, 11, 5, 10, 1, 99];
let result = 0;
let ch5 = nums.reduce(function (acc, cur) {
    return cur % 2 !== 0 ? acc + cur : acc * cur;
}, 1)
console.log(ch5);
// 500


const isEven = (n) => {
    return n % 2 == 0;
}

let printMsg = (evenFunc, num) => {
    const isNumEven = evenFunc(num);
    console.log(`The number ${num} is an even number: ${isNumEven}.`)
}

// Pass in isEven as the callback function
printMsg(isEven, 4);
// Prints: The number 4 is an even number: True.

const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// add string after each final participant
const announcements = finalParticipants.map(member => {
    return member + ' joined the contest.';
})

console.log(announcements);



/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let mystring = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = mystring.split("").map(function(el){
    return el === '_' ? " " : el;
}).filter(function(el , i , arr){
    return isNaN(parseInt(el)) && el !== ',' &&
     !el.includes(arr[arr.length - true]);
}).reduce(function(a ,b){
    return a === b ? a : a + b;
})

console.log(solution); // Elzero Web School


