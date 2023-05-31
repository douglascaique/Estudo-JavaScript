//node objetosdesafio2.js

//Desafio - Acessar chaves 
// Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo Sistema e Printar o resultado na tela

const cliente = {
    nome:"Andre",
    idade:35,
    cpf:"4565655656",
    email:"andre@email.com"
}
                //0     //1     //2     //3
const chaves = ["nome", "idade", "cpf", "email"]

console.log(cliente[chaves[0]])

//consultar todos os dados

chaves.forEach(info=>console.log(cliente[info]))

console.log(cliente["nome"])
