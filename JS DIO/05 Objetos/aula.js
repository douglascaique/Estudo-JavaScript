// objetos são coleções dinamicas de valores que funcionam através de chave e valor

//metodo- criar uma funcao dentro de um objeto
class pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade, anoDeNascimento) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos de idade`)
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const douglas = new pessoa('Douglas', 24);
const milena = new pessoa('Milena', 26);

compararPessoas(douglas, milena);