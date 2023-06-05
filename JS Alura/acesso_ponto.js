const cliente = {
    nome: "Doug",
    idade: 24,
    cpf: "1112223657",
    email: "doug@email.com",

};

console.log(`O nome do cliente é ${cliente.nome}, com idade de ${cliente.idade}`);
console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)} `);