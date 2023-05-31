//node desafios6.js

//crie uma lista com os seguintes alunos e alunas: 'João', 'Juliana', 'Caio', 'Ana'

//Crie uma lista com as seuintes médias : 10, 8, 7.5, 9

//Crie uma lista com 2 dimensões com os nomes e as médias


/*Lista de duas dimensões - para acessar duas listas a partir de uma função podemos
    1) criar uma lista com as listas que seram utilizadas
    2) listaNova = [lista1, lista2, lista3, etc]
                    //0       //1     //2
    3) Dentro de cada lista, seus valores permanecem seguindo a ordem de índice, assim deixando claro como acessar cada valor
    4) Se lista1 = [50, 60, 10, 5]   então para acesarmos o valor 10 podemos usar
                                        listaNova[0][2] - Assim temos acesso a lista1 e o valor da posição 2

                    o primeiro colchete seleciona qual array da lista    []
                    o segundo colchete seleciona qual objeti/posição da lista escolhida  []

*/
const alunos =  ['João', 'Juliana', 'Caio', 'Ana']
const medias = [10, 8, 7.5, 9]

let listaBoletim = [alunos, medias]

console.log(`${listaBoletim[0][0]}, sua média é ${listaBoletim[1][0]}`)