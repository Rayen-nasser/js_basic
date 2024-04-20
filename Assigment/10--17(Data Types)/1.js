// Add Variables Here
var nomberOne = '10';
var nomberTwo = '20';
// Ouput
console.log("Add Code Here",nomberOne + nomberTwo); // Normal Concatenate => 1020
console.log("Add Code Here",typeof(nomberOne + nomberTwo)); // Normal Concatenate => String
console.log("Add Code Here",`${nomberOne}${nomberTwo}`); // Template Literals Way => 1020
console.log("Add Code Here",typeof(`${nomberOne}${nomberTwo}`)); // Template Literals Way => String

console.log("Add Code Here",nomberTwo + '\n' + nomberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log("Add Code Here", `${nomberTwo}
${nomberOne}`);
/*
  Template Literals Way
  20
  10
*/