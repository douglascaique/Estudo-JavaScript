// node objetosdesafios4
// Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimir
//verificando se há mais de um numero me algum cadastro

const cliente = {
    nome:"Douglas",
    idade:24,
    cpf:"4565655656",
    email:"andre@email.com",
    fones: ["5548481651", "515148483231"]
}

cliente.fones.forEach(fone => console.log(fone))