// objetos são coleções dinamicas de valores que funcionam através de chave e valor

//metodo- criar uma funcao dentro de um objeto

const pessoa = {
    nome: 'Douglas Caique S Silva',
    idade: 25,
    sexo: 'masculino',
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos de idade`)
    }
};

pessoa.nome = 'Milena Lima Kelly Silva';
pessoa.idade = 26;

pessoa.descrever();