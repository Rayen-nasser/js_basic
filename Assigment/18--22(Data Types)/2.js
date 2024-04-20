let num = "10";

// Solution One
console.log("Write Your Code Here",num*2); // 20

// Solution Two
console.log("Write Your Code Here",Number(num) +10); // 20

// Solution Three
console.log("Write Your Code Here", ++num +9 ); // 20

// Solution Four
console.log("Write Your Code Here", ++num + 4 *2 ); // 20

let points = 10;

// Write Your Code Here
points = ++points ; 
points = ++points ;
points = ++points ;
console.log(points); // 13

// Write Your Code Here
points = --points  ;
points = --points  ;
points = --points  ;
points = --points  ;
points = --points  ;
console.log(points); // 8;
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  Examples:
  [++a]
  - Value: ???
  - Explain: ???
  [+]
  - Explain: Addition Operator
*/