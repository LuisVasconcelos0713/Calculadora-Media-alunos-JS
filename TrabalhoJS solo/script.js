let numeros = window.document.querySelector("input#fnum")
let lista = window.document.querySelector("select#flista")
let res = window.document.querySelector("div#res")
let itens= document.createElement("option")
let vetor = []

function isNumber(n){
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true
  }else{
    return false
  }
}

function inList(n,l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}

function Adicionar(){
  if(isNumber(numeros.value) && !inList(numeros.value, vetor)){
    console.log("tudo certo")
    vetor.push(Number(numeros.value))
    console.log(vetor)
    let itens= document.createElement("option")
    itens.text = `Número adicionado ${numeros.value}`
    lista.appendChild(itens)
  }else{
    console.log("ok perfeito mas ta errado alguams coisas ai")
  }
  numeros.value = ''
  numeros.focus()
  res.innerHTML = ''
}

function Finalizar(){
  if(vetor.length != 0){
    let maior = vetor[0]
    let menor = vetor[0]
    let media = 0
    let soma = 0 
    for(let pos in vetor){
      soma += vetor[pos]
      if(vetor[pos] > maior){
        maior = vetor[pos]
      }if(vetor[pos < menor])
        menor = vetor[pos]
    }
    media = soma / vetor.length
    res.innerHTML = `<p>Ao todo são ${vetor.length} números </p>`
    res.innerHTML += `<p>Ao todo o maior valor foi ${maior}</p>`
    res.innerHTML += `<p>Ao todo o menor valor foi ${menor}</p>`
    res.innerHTML += `<p>Ao todo a soma de todos ods valores foi ${soma}</p> `
    res.innerHTML += `<p>Ao todo a media é igual a ${media}</p>`
  }else{
    console.log('a lista está vazia')
  }
}