//node desafio9foreach.js

// Método For Each - Para cada, executar algo
/*
  Função Callback, ela chama de volta outra função


  Utiliza parametros de dados como strings, 


  como funciona? 

Variavel.forEach(function(variavel => ))

*/
const notas = [10, 6.5, 8, 7.5]
let somaNotas = 0

notas.forEach( notas => {
    somaNotas += notas
})

let media = somaNotas/notas.length


console.log("Sua média é igual a ", media)