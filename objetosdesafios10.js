// node objetosdesafios10.js

//desafio lista de dependentes
// extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista única, para análise de outros departamentos do banco

const clientes = [
    {
        nome:"Douglas",
        idade:24,
        cpf:"4565655656",
        email:"andre@email.com",
        fones: ["5548481651", "515148483231"],
        dependentes: [
          {
            nome: 'Sara',
            parentesco: "filha",
            dataNasc:"20/03/2011"},
          {
            nome:"Samia Maria",
            parentesco: "sobrinha",
            dataNasc: "25/07/2012"
          }]
        }
]  