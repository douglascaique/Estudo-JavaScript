//node conversoes.js

// tipo de dados
// booleanos

// conversao implicita
// permite converter um tipo de dado em outro tipo de dado
// "==" e "===" comparam de forma diferente.

const numero = 456;
let numeroString = "456";

console.log(numero == numeroString);

console.log(numero + numeroString);


numeroString = Number("456");
// conversao explicita
//Number() - CONVERTE DADOS em número|inteiro
//String() - CONVERTE DADOS em texto

//console.log(numero + Number(numeroString));
console.log(numero + numeroString);