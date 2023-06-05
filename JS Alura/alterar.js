
const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES"
}

pessoa.cpf = "15447862266";
pessoa.seguroSocial = "000";

console.log(`O CPF do cliente ${pessoa.nome} é ${pessoa.cpf.substring(0, 4)}`);