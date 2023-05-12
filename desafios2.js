//node desafios2.js

//Um professor acidentalmente passou apenas 3 das 4 notas no sistemas para um aluno:
// 10, 6, 8;     adicione an ota 7 e faça o calculo da média correta


const notas = [10, 6, 8]
// nomedelista.push(dado) --> método de inserir um elemento na lista solicitada na abertura do método
notas.push(7)
console.log(notas)


let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(media);