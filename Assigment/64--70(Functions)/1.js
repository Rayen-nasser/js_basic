function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
      // Write Your Code Here
      // Osama Mohamed => Osama M.
      // Ahmed ali => Ahmed A.
        let space=zName.indexOf(' ',1);
        let fname=zName.substring(0,space);
        let lname=zName.substr(space+1,1).toUpperCase();
        return `${fname} ${lname}.`;
    }
    function ageWithMessage(zAge) {
      // Write Your Code Here
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
      let space=zName.indexOf(' ',1);
      let age=zAge.substring(0,space);
      return `Your Age Is ${age}`;
    }
    function countryTwoLetters(zCountry) {
      // Write Your Code Here
      // Egypt => You Live In EG
      // Syria => You Live In SY
      let country=zCountry.substr(0,2).toUpperCase();
      return `You Live In ${country}`;
    }
    function fullDetails() {
      // Write Your Code Here
      document.write(`<h2>Hello ${namePattern(zName)},${ageWithMessage(zAge)},${countryTwoLetters(zCountry)}</h2><hr>`);
    }
    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY

 // function itsMe() {
 // return `Iam A Normal Function`;
 // }
  let itsMe = () => 'Iam A Normal Function';
  
  console.log(itsMe()); // Iam A Normal Function

  //function urlCreate(protocol, web, tld) {
    //return `${protocol}://www.${web}.${tld}`;
  //}
  let urlCreate = (protocol, web, tld)=> `${protocol}://www.${web}.${tld}`;
  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org



  /*function checker(zName) {
    return function (status) {
      return function (salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
      };
    };
  }*/
  
  let checker = (zName) => {
    return (status)=> (salary) => 
    status === "Available" ?
   `${zName}, My Salary Is ${salary}` 
   : `Iam Not Avaialble`;
  }
  
  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

  function specialMix(...data) {
    // Your Code Here
    let result = 0 ;
    for(let i=0 ;i<data.length;i++){
      if(typeof data[i]=== "number" )
      {
        result+=data[i];
      }else if(!isNaN(parseInt(data[i]))){
        result+=parseInt(data[i]);
      }
    }
    if(result === 0){
      result="All Is Strings";
    }
    return `${result}`;
  }
  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


  /*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

/*let names = function (...names) {
  // Parameter ?
  return `String [${names.join("], [")}] => Done !`;
};*/
let names =(...names) => `String [${names.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => (one + +two + +nums);

console.log(calc(10, myNumbers[1], myNumbers[0])); // 80