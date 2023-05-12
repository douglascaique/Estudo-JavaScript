//node desafios3.js

// um professor acidentalmente lançou 5 notas no sistema para um aluno
// 10, 6, 8, 5.5 , 10
// Remova a ultima nota e faça o calculo de media correto

//nomedalista.pop()   ---> método para remover o último elemento da lista


const notas = [10, 7, 8, 5 , 10]
notas.pop()
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(`A média é ${media}`);