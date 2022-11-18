function Gerar() {
  var nt = window.document.querySelector("input#numero");
  var res = window.document.querySelector("select#res");
  var ntvalue = nt.value;
  console.log(ntvalue);
  if (ntvalue.length == 0) {
    console.log("erro");
    window.alert("[ERRO] digite um número");
  } else {
    res.innerHTML = "";
    for (var i = ntvalue; i <= i; i + 0) {
      for (var x = 0; x <= 10; x++) {
        var tabuada = i * x;
        console.log(i, x, tabuada);
        let itens = document.createElement("option");
        itens.text = `${i} x ${x} = ${tabuada}`;
        res.appendChild(itens);
      }
      break;
    }
  }
}
