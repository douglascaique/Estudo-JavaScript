// node objetosdesafios8.js

//Desafio Puxando Relatorio

//Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada para fornecer a outros departamentos do banco

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

let relatorio = " ";
for(let info in cliente){
    if(typeof cliente[info]  === "object" || typeof cliente[info]
    === "function")
    {
        continue
    }else {
        relatorio += ` - ${info} ==> ${cliente[info]}
        `
    }
    
}

console.log(relatorio)