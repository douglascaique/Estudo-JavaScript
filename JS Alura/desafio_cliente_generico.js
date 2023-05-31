// node desafio_cliente_generico.js

// gerar uma função que permita a criação de novos clientes a partir de um modelo

//metodo Objectfrom

function Cliente(nome, cpf, email,saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email 
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}


// Palavra reservada new
// A partir da função Cliente, estamos criando uma nova instancia
const andre = new Cliente("André", "151548426","andre@email.com",100)

console.log(andre)