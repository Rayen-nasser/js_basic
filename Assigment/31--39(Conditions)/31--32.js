console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(- -50 >= +"-40"); // true
console.log(+ 10 <=  -"-40"); // true
console.log(+ "10" == 10); // true
console.log(+ 20 > false); // true

let num1 = 10;
let num2 = 20;

console.log("Your Code Here",num1!=num2); // true
console.log("Your Code Here",num1<num2); // true
console.log("Your Code Here",num1!==num2); // true
console.log("Your Code Here",num1<=num2); // true
console.log("Your Code Here",typeof num1 == typeof num2); // true
console.log("Your Code Here",typeof num1 === typeof num2); // true

let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a < b && a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true


// Test Case 1
let m= 9; // "009"
if(m<10 ){
    console.log('009');
}
// Test Case 2
let num = 20; // "020"
if(num>10 || num<100 ){
    console.log('020');
}
// Test Case 3
let um = 110; // "110"
if(um>=100 ){
    console.log('110');
}

let num11 = 9;
let str = "9";
let str2 = "20";

if(num11==str){
    console.log(`${num11} Is The Same Value As ${str}`)
}
if(num11!==str){
    console.log(`${num11} Is The Same Value As ${str} But Not The Same Type`)
}
if(num11!=str2){
    console.log(`${num11} Is Not The Same Value Or The Same Type As ${str2}`)
}
if(str!==str2){
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`)
}

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"


let num10 = 10;
let num20 = 30;
let num30 = "30";
if(num10<num30 && num30!==num20 )
console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
if(num20==num30 && num30!==num20)
console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
if(num10!==num30 && num20!==num30)
{console.log(`${num30} Value And Type Is Not The Same As ${num10} And Type Is Not The Same As ${num20}`)}
// Needed Output


