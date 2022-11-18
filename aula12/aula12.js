function contar() {
  //chamando a função onclick
  //Chamando as tags do html
  var vinicial = window.document.getElementById("txti");
  var vfinal = window.document.getElementById("txtf");
  var qpassos = window.document.getElementById("txtp");
  var res = window.document.getElementById("res");

  //Transformando as tags em seus valores
  var vi = vinicial.value;
  var vf = vfinal.value;
  var qp = qpassos.value;

  //Detectando erros
  if (vi.length == 0 || vf.length == 0 || qp.length == 0) {
    console.log("Erro");
    window.alert("erro");
  } else {
    //Caso não tenha erros fazer a contagem
    console.log(vi, vf, qp);
    res.innerHTML = "Contando: "; //zerando os números
    var i = Number(vi); //Simplificando
    var f = Number(vf); //Simplificando
    var q = Number(qp); //Simplificando
    if (i < f) {
      //Contagem crescente
      for (var c = i; c <= f; c += q) {
        res.innerHTML += `${c} \u{1F449} `;
        console.log(c);
      }
    } else {
      //Contagem regressiva
      for (var c = i; c >= f; c -= q) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    }
    //Emoji para simbolizar o final
    res.innerHTML += `\u{1F3C1}`;
  }
}
