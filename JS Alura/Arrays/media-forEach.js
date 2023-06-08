const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//calback: chamar de volta, tendo um comportamente de uma função que fica disponivel para ser chamada para cada elemento da array. Por isso, uma natureza do método forEach()


notas.forEach(function (nota) {
    somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é igual a ${media}.`)