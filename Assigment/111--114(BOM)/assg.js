let Name = document.getElementById("name");
let last = document.getElementById("lastName");
let tel = document.getElementById("tel");
let clas = document.getElementById("clas");

Name.value = localStorage.getItem("name");
last.value = localStorage.getItem("last");
tel.value = localStorage.getItem("tel");
clas.value = localStorage.getItem("clas");

Name.addEventListener("input", (e) => {
  localStorage.setItem("name", Name.value);
});
last.addEventListener("input", (e) => {
  localStorage.setItem("last", last.value);
});
tel.addEventListener("input", (e) => {
  localStorage.setItem("tel", tel.value);
});
clas.addEventListener("input", (e) => {
  localStorage.setItem("clas", clas.value);
});
