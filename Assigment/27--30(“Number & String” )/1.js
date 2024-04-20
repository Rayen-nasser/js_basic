let userName = "Elzero";
console.log(userName[3]); // e
console.log(userName.charAt(3)); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(3,4)); // e
console.log(userName.substring(3,4)); // e
console.log(userName[3].repeat(3)); // eee


let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toLocaleUpperCase())); // True
console.log(word.endsWith(letterO.toLocaleLowerCase())); // True


let a = "Elzero Web School";
// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toLocaleUpperCase()+a.slice(3,6)); // Zero

// 8 H
console.log(a.charAt(13).toLocaleUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ",1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.split(" ",1)+' '+a.substr(a.indexOf('S'),6)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLocaleLowerCase()+a.substring(1,a.length-1).toLocaleUpperCase()+a.slice(-1).toLocaleLowerCase()); // eLZERO WEB SCHOOl
