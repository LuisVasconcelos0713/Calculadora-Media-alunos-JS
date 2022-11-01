function pessoa(Nome, idade, nacionalidade, altura) {
  this.nome = Nome;
  this.idade = idade;
  this.nacionalidade = nacionalidade;
  this.altura = altura;
}

const Gustavo = new pessoa("Gustavo", 18, "Brasileiro", 1.9);
const Maria = new pessoa("Maria", 17, "Brasileira", 1.7);
const Noah = new pessoa("Noah", 23, "Americano", 1.8);
console.log(Gustavo, Maria, Noah);
