// node objetosdesafios7.js

const cliente = {
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
      }
    ],
    saldo:100,

    depositar:function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)