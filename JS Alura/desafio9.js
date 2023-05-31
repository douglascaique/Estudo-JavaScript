//node desafio9.js

//Calcular a media das seguintes notas: 10, 6.5, 8, 7.5
//Usando o for

const notas = [10, 6.5, 8, 7.5]

// criar variável para somar notas
let somaNotas = 0

for(let i = 0; i < notas.length; i++){

    //preciso somar valores na lista... como fazer? 
    somaNotas += notas[i]
    //console.log(i, (notas[i])) -> linha nao necessária
}

// preciso, somar as notas e atribuir uma variavel media para que eu consiga realizar a operação desejada
let media = somaNotas/notas.length;

console.log(`A média calculada é de ${Number(media)}`);