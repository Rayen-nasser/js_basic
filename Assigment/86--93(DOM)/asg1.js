// Asigment 1

console.log(document.getElementById('elzero'));
console.log(document.getElementsByClassName('element')[0]);
console.log(document.getElementsByTagName('div')[0]);
console.log(document.querySelector('div'));
console.log(document.querySelector('#elzero'));
console.log(document.querySelector('.element'));
console.log(document.querySelector('[name="js"]'));
console.log(document.querySelectorAll('.element')[0]);
console.log(document.querySelectorAll('#elzero')[0]);
console.log(document.querySelector('[name="js"]')[0]);
console.log(document.querySelectorAll('div')[0]);
console.log(document.body.children[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.firstElementChild);
console.log(document.body.firstChild);

// Asigment 2
myImg = document.querySelectorAll('div img');
for( i = 0 ; i < myImg.length ; i++ )
{
    myImg[i].src ='https://elzero.org/wp-content/themes/elzero/imgs/logo.png';
    myImg[i].alt='Elzero logo';
    myImg[i].setAttribute('style','background: black;');
}


// Asigment 3
let num = document.querySelector('[name="dollar"]');
let result = document.querySelector('.result');
let form = document.querySelector('form');

num.oninput = function (){
    result.textContent = `${num.value} USD Dollar = ${(num.value * 15.16).toFixed(3)} Egyptian Pound`
}
form[0].style.cssText =
"display: flex; flex-direction: column; align-items: center; border: 1px solidblack; padding: 15px; width: fit-content;";
num.style.cssText =
"border: 1px solid #ddd; outline: none; padding: 10px; width: 280px;";
result.style.cssText =
"margin-top: 10px; color: rgb(57, 4, 110); font-size: 18px;";


//assigment 4

let one = document.querySelector('.one');
let two = document.querySelector('.two');

one.title = 'one';
two.title = 'two';

let textone= one.textContent ;
let textTwo=two.textContent ;

one.textContent = textTwo;
two.textContent = `${textone} ${++two.childNodes.length}`;

//Assigment 5

let imge = document.querySelectorAll('.imge');

let finalresult = () =>{
    for(let i=0 ;i<imge.length ;i++){
        if(imge[i].hasAttribute("alt"))
        { 
            imge[i].setAttribute("alt","Old");
        }
        else
        {
            imge[i].setAttribute("alt","Elzero New");
        }
    }
};

finalresult();