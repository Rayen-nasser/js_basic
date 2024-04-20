// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(5e4 * 2); // 100000
console.log(50_000  * 2); // 100000
console.log(10 ** 5); // 100000
console.log(10 * 10 * 10 * 10 * 10 ); // 100000
console.log((10**4)*10); // 100000
console.log(1e4 * 10); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(2e5/2); // 100000
console.log(50_000 +50_000); // 100000
/*Part 2*/
console.log(-(Number.MIN_SAFE_INTEGER)); // 9007199254740991
// Part 3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16
// Part 4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57
//Part 5
let num = 10;

console.log(+(Number.isInteger(num)) + +(Number.isInteger(num))); // 2
//Part 6
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(+Number.parseFloat(flt).toFixed(0)); // 10
console.log(Number.isInteger(Number.parseInt(flt)) * Number.parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
//Part 7
console.log(Math.trunc(Math.random() * 4)); // 0 || 1 || 2 || 3 || 4
//chalang
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
// Find Smallest Number In All Variables And Return Integer
console.log(parseInt(d)); // 2
// Use Variables a + d One Time To Get The Needed Output
console.log(parseInt(a)*parseInt(b) - 10000); // 10000
// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d)); // 2
console.log(+Number.parseFloat(d).toFixed(0)); // 2
console.log(Math.round(d)); // 2
console.log(Math.trunc(d)); // 2
// Use Variables b + d To Get This Valus
console.log(); // 66.67 => String
console.log(); // 67 => Number