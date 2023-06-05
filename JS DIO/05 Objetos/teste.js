class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
    }
}

new Pessoa('Renan', 30).descrever();

const dev = {
    nome: 'Renan',
    linguagemPreferida: 'JavaScript'
};

console.log(dev.linguagemPreferida);