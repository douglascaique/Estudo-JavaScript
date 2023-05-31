// node callbacks.js

const nome = ["Ana", "Ju", "Leo", "Paula"]

// funções for each também podem receber o prarametro indice
nome.forEach(imprimeNomes)

function imprimeNomes (nomes){
    console.log(nomes)
}