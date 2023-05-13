// node objetosdesafios6


const cliente = {
    nome:"Douglas",
    idade:24,
    cpf:"4565655656",
    email:"andre@email.com",
    fones: ["5548481651", "515148483231"],
    dependentes: [{
        nome: 'Sara',
        parentesco: "filha",
        dataNasc:"20/03/2011"
    }]
}



cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco: "sobrinha",
    dataNasc: "25/07/2012"
})


const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="25/07/2012")


console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)