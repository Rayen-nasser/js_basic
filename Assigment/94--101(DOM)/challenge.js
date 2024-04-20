//Creat Header Elements
let header = document.createElement("header");
header.className = "website-head";
let logo = document.createElement("h2");
let logoText = document.createTextNode("Elzero");
logo.className = "logo";
logo.appendChild(logoText);
header.appendChild(logo);

let ul = document.createElement("ul");
ul.className = "menu";
let liArray = ["Home", "About", "Service", "contact"];

for (let i = 0; i < liArray.length; i++) {
  let li = document.createElement("li");
  let Textli = document.createTextNode(liArray[i]);
  li.appendChild(Textli);
  ul.appendChild(li);
}
header.appendChild(ul);
document.body.style.cssText = "margin-top : 0 ; marign-bottom: 0;";
logo.style.cssText = "color: #019688";
header.style.cssText = "display: flex; justify-content: space-between;";
ul.style.cssText =
  "list-style-type: none;display: flex;align-items: center; gap: 20px; font-size:17px ";

function MyFunction(x) {
  if (x.matches) {
    logo.style.cssText = "margin: auto 0 ;color:#019688";
  } else {
    logo.style.cssText = "color:#019688";
  }
}
let x = window.matchMedia("(max-width: 500px)");
MyFunction(x);
x.addListener(MyFunction);

document.body.appendChild(header);

let content = document.createElement("div");
content.className = "content";
content.style.cssText =
  "display:grid;grid-template-columns: repeat(auto-fill, minmax(350px,1fr));background-color: #ececec;gap:15px;padding:15px";
for (let i = 0; i < 15; i++) {
  let product = document.createElement("div");
  product.className = "product";
  let productText = document.createTextNode("Product");
  product.appendChild(productText);

  let span = document.createElement("span");
  spanNum = document.createTextNode(`${i + 1}`);
  span.appendChild(spanNum);
  product.appendChild(span);

  content.appendChild(product)
  span.style.cssText ="font-size:25px;font-weight:bold;color:#000;";
  product.style.cssText="display:flex;flex-direction:column-reverse;gap:10px;align-items:center;padding:15px;background-color:#fff;border-radius:4px; box-shadow:rgb(0 0 0 / 12%) 1px 1px 10px 1px; font-size: 15px; color: rgb(153, 153, 153);";
}
function myNewFunction(y){
    if(y.matches)
    {
        content.style.cssText =
  "display:grid;grid-template-columns: repeat(auto-fill, minmax(200px,1fr));background-color: #ececec;gap:15px;padding:15px";
    }
    else
    {
        content.style.cssText =
  "display:grid;grid-template-columns: repeat(auto-fill, minmax(350px,1fr));background-color: #ececec;gap:15px;padding:15px";
    }
}
let y =window.matchMedia("(max-width: 400px)");
myNewFunction(y);
y.addListener(myNewFunction);
document.body.appendChild(content);

let footer = document.createElement('footer');
footer.className ='footer';
let footerText = document.createTextNode('CopyRight 2023');
footer.appendChild(footerText);
footer.style.cssText = "text-align: center;color: #fff;padding:15px;background-color: #019688;font-size:17px;"

document.body.appendChild(footer);

