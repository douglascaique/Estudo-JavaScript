const cliente = {
    nome: "Doug",
    idade: 24,
    cpf: "1112223657",
    email: "doug@email.com",

};

console.log(`O nome do cliente é ${cliente["nome"]}, com idade de ${cliente["idade"]}`);



//propriedade para ser acessada em um contexto de não saber o que está acontecendo dentro do codigo
const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});


const pet = {
    nome: "Rex",
    dataDeNascimento: "12/03/2017",
    brinquedoFavorito: "bolinha",
    cor: "cinza",
};

console.log(pet.nome());

