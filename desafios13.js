// node desafios13.js
// com a media de todos os alunos de 3 salas
// calcule a media geral de cada sala


const salaJS = [7, 8, 8 ,7, 10, 6.5, 4, 10 ,7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]


// criar uma função, substituindo o parametro da função por cada uma das variáveis/ arrays trabalhadas
//Criase uam função vazia com variaveis abstratas que serão substituiddas pelas variaveis de entrada na saída do console a partir da função

// mediaSala(nome da Sala)


//reduce, reduz os valores de uma array para um único valor numerico
//reduce(acum, atual) um acumulador e valor atual 

//dentro do reducce, também é possivel computar um valor inicial no ultimo parametro

function mediaSala(notaDaSala) {
    const somaDasNotas = notaDaSala.reduce( (acum, atual) => atual + acum,0)
    return somaDasNotas/notaDaSala.length
}

console.log(`A Média da sala de JS foi ${mediaSala(salaJS)}`)
console.log(`A Média da sala de JAVA foi ${mediaSala(salaJava)}`)
console.log(`A Média da sala de Python foi ${mediaSala(salaPython)}`)

//calcular meddia geral
const notas = [7.5, 6.5, 7]
const media = notas.reduce((acum, atual) => atual + acum, 0) /notas.length

console.log(`A média geral das turmas foi de: ${media}pts`)