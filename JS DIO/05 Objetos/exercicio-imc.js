/**2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIMC(peso, altura) {
        return this.peso / (this.altura * this.altura);
    }

    clasificaIMC() {
        const imc = this.calculaIMC();

        if (imc < 18.5) {
            return (`${this.nome}, você está Abaixo do Peso!`)
        } else if (imc >= 18.5 && imc < 25) {
            return (`${this.nome}, você está com um Peso Normal!`)
        } else if (imc >= 25 && imc < 30) {
            return (`${this.nome}, você está Acima do Peso!`)
        } else if (imc >= 30 && imc < 40) {
            return (`${this.nome}, você está Obeso!`)
        } else if (imc >= 40)
            return (`${this.nome}, você está em Obesidade Grave!`)
    }
}

const Jose = new Pessoa('José', 75, 1.80);
console.log(Jose.calculaIMC());

const Douglas = new Pessoa('Douglas', 72, 1.65);
console.log(Douglas.calculaIMC());
console.log(Douglas.clasificaIMC())