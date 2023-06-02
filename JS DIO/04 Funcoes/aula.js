
//Função são trechos e código que podem ser invocados para serem executados com determinadas funções de acordo com funções necessárias

function sayMyName(name) {
    console.log('Your name is ' + name);
}

sayMyName('Douglas');
sayMyName('Milena');

function quadrado(valor) {
    return valor * valor;
}


const quadradoDeDez = quadrado(10);


function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo
}

//console.log(incrementarJuros(100, 10));


function main() {
    console.log('Programa Principal');
}

main();