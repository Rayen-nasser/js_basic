let form = document.querySelector('form');
let input =document.querySelectorAll('[class="input"]');
// Assignment Six
let numberInput = document.querySelector("[type = 'number']");
let textInput = document.querySelector("[type = 'text']");
let select = document.querySelector("select");
let creatBtn = document.querySelector("[value= 'Create']");
let resultsBox = document.querySelector(".results");

form.style.cssText = "display: inline-grid;";
input.style.cssText ="padding: 20px;"
creatBtn.onclick = (event) => {
    event.preventDefault();
    resultsBox.innerHTML = "";
    for (i = 1; i <= numberInput.value; i++) {
    let element = document.createElement(select.value);
    element.className = "box";
    element.setAttribute("title", "Element");
    element.setAttribute("id", `id-${i + 1}`);
    element.appendChild(document.createTextNode(textInput.value));
    resultsBox.body.appendChild(element);
    
    }
    
};
