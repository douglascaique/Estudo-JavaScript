//node objetosdesafio1.js

// DESAFIO PRINTAR INFOS
// Acessar um objeto com informações de um cliente e exibir essas informações no console


// Objeto é formado por CHAVE:VALOR
//NOME: "VALOR"
const cliente = {
    nome:"Andre",
    idade:35,
    cpf:"4565655656",
    email:"andre@email.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos. `)
console.log(cliente.cpf.substring(0,3))
console.log(cliente.email.substring(0,3))