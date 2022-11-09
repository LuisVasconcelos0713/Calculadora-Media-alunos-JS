function verificar() {
  var data = new Date();
  var anoatual = data.getFullYear();
  var anodenascimento = window.document.querySelector("input#txtano");

  var res = document.querySelector("div#res");

  if (anodenascimento.value.length == 0 || anodenascimento.value > anoatual) {
    window.alert(
      "Erro, o número digitado foi igual a zero, não foi digitado ou foi maior que o ano atual"
    );
  } else {
    var fsex = window.document.getElementsByName("radsex");
    var idade = anoatual - anodenascimento.value;
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    img.setAttribute("width", "300px");

    if (fsex[0].checked) {
      gênero = "masculino";
      if (idade < 10) {
        // Criança
        img.setAttribute("src", "Imagens/Criança-Masc.jpeg");
      } else if (idade < 21) {
        // adolescente
        img.setAttribute("src", "Imagens/Adolescente-Masc.jpeg");
      } else if (idade < 50) {
        // jovem
        img.setAttribute("src", "Imagens/Jovem-Masc.jpeg");
      } else if (idade > 50) {
        // idoso
        img.setAttribute("src", "Imagens/Idoso-Masc.jpeg");
      }
    } else if (fsex[1].checked) {
      gênero = "feminino";
      if (idade < 10) {
        // Criança
        img.setAttribute("src", "Imagens/Criança-Fem.jpeg");
      } else if (idade < 21) {
        // Adolescente
        img.setAttribute("src", "Imagens/Adolescente-Fem.jpeg");
      } else if (idade < 50) {
        // Jovem
        img.setAttribute("src", "Imagens/Jovem-Fem.jpeg");
      } else if (idade > 50) {
        // idosA
        img.setAttribute("src", "Imagens/Idosa-Fem.jpeg");
      }
    }

    res.style.textAlign = "center";
    res.style.fontSize = "16px";
    res.innerHTML = `Detectamos que seu gênero é ${gênero} e que você possui ${idade} anos`;
    res.appendChild(img);
  }
}
