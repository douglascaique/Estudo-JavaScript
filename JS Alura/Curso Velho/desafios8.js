//node desafios8.js

//Imprimir o indice e a lista com seguintes números:
// 100, 200, 300, 400, 500, 600

//estrutura FOR
const  numeros = [100, 200, 300, 400, 500, 600]


// For = Estrutura de loopin, um laço de repetição
/*      
        1) criar uma variavel e dar um valor, geralmente 0
        2) comparar a variavel enquanto for menor que o tamanho da array ou objeto de comparação
        3) realizar uma contagem até o tamanho da array ou objeto e comparação

*/

          //1)         //2)  //6    //3)
for (let i = 0; i < numeros.length; i++){
                // numeros[0]
    console.log(i, numeros[i])
}