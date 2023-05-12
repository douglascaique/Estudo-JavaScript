//node desafios10.js
// Um aluno rcebeu um ponto extra nas suas notas. 
//adicione esse ponto em suas notas

const notas = [10, 9, 8, 7, 6]   //1


// usar o map
// Se cada nota for até o valor 10, ela nao recebe o valor, caso seja menor que 10, recebe um ou ++nomeDaLista
const notasAtualizadas = notas.map( notas => notas == 10 ? notas : ++notas)

console.log("Suas notas atualizadas são: ", notasAtualizadas)
