//node arrow_function.js

function apresentar(nome){
    return `Meu nome é ${nome}`;
}


// Arrow Function       ---   =>
// Const + nomeDeVariável 

const apresentarArrow = nome => `Meu nome é ${nome}`;


const soma = (x, y)  => x + y; 


// Arrow Function com + de 1 Linha 

const somaNumPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

// Quando utilizar? 
 // Arrow - Jeito rápido e curto de escrever a função
 // apresenta Hoisting no comportamento