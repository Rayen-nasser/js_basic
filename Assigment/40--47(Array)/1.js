let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
let last =myFriends.pop();
console.log("Your Code Here",myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num;
console.log("Your Code Here",myFriends); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
let last1 = friends.pop();
let first= friends.shift(); 
console.log(friends); // ["Eman", "Osama"]


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr =[];

// Write One Single Line Of Code
finalArr=arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]


let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log("Your Code Here",words.pop().shift().toUpperCase().slice(website.length)); // ZERO


let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.includes(needle)===true)
{
    console.log('Found');
}
if(haystack.indexOf(needle)!==-1)
{
    console.log('Found');
}
if(haystack.includes(needle)!==false)
{
    console.log('Found');
}


let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
let last2 =arr1.pop().toLocaleLowerCase();
let last3 =arr2.pop().toLocaleLowerCase();
let last4 =arr2[arr1.length].toLocaleLowerCase();
allArrs=last4+last2+last3;

console.log(allArrs); // fxy

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
let last11 = my.pop();
let last12 = my.pop();
my=my.reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(-counter,counter)); // ["Elham", "Mazero"]

console.log(my.slice(-counter,counter)[zero].slice(zero,my.slice(-counter,counter).length) + my.slice(-counter,counter)[my.length - counter].slice(my.slice(-counter,counter).length)); // "Elzero"


let ch=my.slice(-counter,counter)[zero].slice(zero,my.slice(-counter,counter).length) + my.slice(-counter,counter)[my.length - counter].slice(my.slice(-counter,counter).length);

console.log(ch.charAt(my.length)+ch.slice(my.length).charAt(counter - my.slice(-counter,counter).length).toLocaleUpperCase()); // "rO"
