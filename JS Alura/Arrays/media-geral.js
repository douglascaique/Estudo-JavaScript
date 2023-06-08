const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDasSalas) {
    const somaDasNotas = notasDasSalas.reduce((acc, nota) => acc + nota, 0)
    const media = somaDasNotas / notasDasSalas.length;

    return media;
}

console.log(`A média da Sala de JavaScript é: ${calculaMedia(salaJS)}`);
console.log(`A média da Sala de Java é: ${calculaMedia(salaJava)}`);
console.log(`A média da Sala de Python é: ${calculaMedia(salaPython)}`);