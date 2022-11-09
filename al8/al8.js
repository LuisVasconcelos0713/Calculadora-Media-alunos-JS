var Horários = Math.floor(Math.random() * 24);
console.log(Horários);
var titulo = window.document.querySelector("h1");
titulo.innerHTML = "";
var div1 = window.document.querySelector("div#box-segundarioA");
div1.innerHTML = "";
var div2 = window.document.querySelector("div#box-segundarioB");
div2.innerHTML = "";
var imagemfundo = window.document.querySelector("body");

if (Horários >= 6 && Horários < 12) {
  titulo.innerHTML = `São ${Horários} Horas`;
  div1.innerHTML = "Está de manhã";
  imagemfundo.style.backgroundColor = "#F9EC9B";
  div2.innerHTML = "<img src=imagens/manhã.jpg witdh=100px height=100px></img>";
} else if (Horários >= 12 && Horários < 18) {
  titulo.innerHTML = `São ${Horários} horas`;
  div1.innerHTML = "Está de tarde";
  div2.innerHTML = "<img src=Imagens/tarde.jpg witdh=100px height=100px></img>";
  imagemfundo.style.backgroundColor = "#DFA400";
} else if (Horários >= 18 && Horários < 24) {
  titulo.innerHTML = `São ${Horários} Horas`;
  div1.innerHTML = "Está de noite";
  imagemfundo.style.backgroundColor = "#002F5C";
  div2.innerHTML = "<img src=Imagens/noite.jpg witdh=100px height=100px></img>";
} else if (Horários >= 0 && Horários < 6) {
  titulo.innerHTML = `São ${Horários} Horas`;
  div1.innerHTML = "Está de madrugada";
  imagemfundo.style.backgroundColor = "#5B61A1";
  div2.innerHTML =
    "<img src=Imagens/madrugada.jpg witdh=100px height=100px></img>";
}
