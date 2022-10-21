function media(nota1,nota2){
	var nota = (nota1 + nota2) / 2
	return nota
}

var aluno2 = media(4,7)
var aluno1 = media(4,7.4)
var aluno0 = media(5,10)

var mediatotal = 5

/* Forma sem estrutura de repetição \/
if (aluno1 < mediatotal){
	console.log(`o aluno1 foi reprovado`)
}
else{
	console.log(`o aluno1 foi aprovado`)
}

if (aluno2 < mediatotal){
	console.log(`o aluno2 foi reprovado`)
}
else{8
	console.log(`o aluno2 foi aprovado`)
}

if (aluno3 < mediatotal){
	console.log(`o aluno3 foi reprovado`)
}
else{
	console.log(`o aluno3 foi aprovado`)
}*/

//Forma com estrutura de repetição

var alunos = [aluno0,aluno1,aluno2]
for(var i = 0; i < 3; i++){
	var total = alunos[i]
	console.log(total)
	if(total < mediatotal){
		console.log(`O aluno${i} foi reprovado`)
	}
	else{
		console.log(`O aluno${i} foi aprovado`)
	}
}