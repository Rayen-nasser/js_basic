function sayHello(theName, theGender) {
    if(theGender==="Male"){
        console.log(`Hello Mr ${theName}`)
    }
    else if(theGender==="Female"){
        console.log(`Hello Miss ${theName}`)
    }else{
        console.log(`Hello ${theName}`)
    }
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"


  function calculate(firstNum, secondNum, operation) {
    // Your Code Here
    if(secondNum===undefined){
        secondNum=' Second Number Not Found'
    }
    if(operation==='add' || operation===undefined){
        console.log(firstNum + secondNum);
    }else     if(operation==='subtract'){
        console.log(firstNum - secondNum);
    }else{
        console.log(firstNum * secondNum) ;
    }
  }
  
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600


  function ageInTime(theAge) {
    // Your Code Here
    if(theAge>10 && theAge<100){
        console.log('monthsage:',theAge * 12 ,'Months');
        console.log('daysage:',theAge * 365,'days');
        console.log('monthsage:',theAge * 60 * 24 * 30,'minutes');
        console.log('monthsage:',theAge * 30 * 24 * 60 * 60,'seconds');
        
    }else{
        console.log('Age Out Of Range')
    }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months

  function checkStatus(a, b, c) {
    // Your Code Here
    let tab = [];
    tab.push(a, b, c);
    for(i=0 ;i<tab.length;i++){
        typeof tab[i] === 'string'
        ? (user= tab[i])
        :typeof tab[i] === 'number'
        ? (age = tab[i])
        :(bool=tab[i]);
    }
    if(bool==true){
        (bool='available');
    }else{
        (bool='not available');
    }
    console.log(`Hello ${user} , Your Age Is ${age} ,You Are ${bool} for hire`);
  }
  
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


  function createSelectBox(startYear, endYear) {
    document.write(`<select>`);
    for(i= startYear; i <=endYear ;i++){
        document.write(`<option value='${i}'>${i}</option>`);
    }
    document.write(`</select>`);
  }
  createSelectBox(2000, 2021);

  function multiply(...nums){
    let result=1;
    for(i=0 ; i<nums.length ; i++){
        if(typeof(nums[i])  === "string"){
            continue;
        }else{
            result *=Math.floor(nums[i]);
        }
    }    
    console.log(result);
  }

  multiply(10, 20); // 200
  multiply("A", 10, 30); // 300
  multiply(100.5, 10, "B"); // 1000
