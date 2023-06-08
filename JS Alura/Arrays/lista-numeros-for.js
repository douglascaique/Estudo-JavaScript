const numeros = [100, 200, 300, 400, 500, 600];


// primeira expressão: é executada apenas uma vez, garante a inicialização da variavel em 0
// segundda expressão: condição de execução, qual o comportamento esperado do bloco de acorddo com o limite de condição
//terceira expressão: é executadda sempre ao final do bloco, como uma garantia da repetição dentro da condição da segunda condição

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice])
};
