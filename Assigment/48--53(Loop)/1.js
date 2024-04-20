let start = 10;
let end = 100;
let exclude = 40;

// Output
for(let i=start ; i<end ; i+10){
    i+=start;
    if(i!==exclude){
        console.log(i)
    }
}
10
20
30
50
60
70
80
90
100


let startt = 10;
let endd = 0;
let stop = 3;

// Output
10
09
08
07
06
05
04
03

for(let i =startt ; i >=stop ; i--){
    if(i<startt){
        console.log( `0${i}` )
    }else{
        console.log(`${i}`)
    }
}

let staart = 1;
let eend = 6;
let breaker = 2;

// Output
/*
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/
for(let i=staart ; i<=eend ; i++){
    console.log(i)
    for(let j=breaker ; j<eend ; j+=breaker){
            console.log(`-- ${j}`)
    }
}

let index = 10;
let jump = 2;
let ennd = 0;

for (;;) {
  // Write Your Code Here
  console.log(index)
  index-=jump;
  if(index===jump )
  {
        break;
  }
 
}

// Output
/*
10
8
6
4
*/


let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let newArray=[];

for (i=0 ; i<friends.length;i++){
    if(friends[i][0]!=letter.toLocaleUpperCase())
    {
        newArray.push(friends[i]);
    }
}
for(i=0 ; i<newArray.length;i++){
    console.log(`${i+1} => ${newArray[i]}`);
}
// Output


let starttt = 0;
let swappedName = "elZerO";
let change =[];

// Output
"ELzERo"

for(i=starttt ; i<swappedName.length ; i++){
    if(swappedName[i]!==swappedName[i].toLocaleUpperCase())
    {
        change.push(swappedName[i].toLocaleUpperCase());
    }
    else{
        change.push(swappedName[i].toLocaleLowerCase());
    }
}
console.log(change.join(""));

let starrt = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
const first= mix.shift();
for(i=starrt ; i<mix.length ; i++){
    if(!isNaN(mix[i]) )
    {
        console.log(mix[i])
    }
}

let friendds = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let indeex = 0;
let counter = 0;

// Output
"1 => Sayed"
"2 => Mahmoud"

while(indeex<friendds.length){
    if(isNaN(friendds[indeex]) && friendds[indeex][counter]!='A')
    {
        console.log(`"${indeex} => ${friendds[indeex]}"`);
    }
    indeex++;
   
}