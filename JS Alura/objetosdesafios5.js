// node objetosdesafios5

const cliente = {
    nome:"Douglas",
    idade:24,
    cpf:"4565655656",
    email:"andre@email.com",
    fones: ["5548481651", "515148483231"]
}

cliente.dependentes = {
    nome: 'Sara',
    parentesco: "filha",
    dataNasc:"20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)