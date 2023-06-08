const nomes = ["Evaldo", "Mari", "Camis"]

//for each comum
nomes.forEach(function (nome) {
    console.log(nome)
})

//for each em arrow function
nomes.forEach((nome) => {
    console.log(nome);
})


//for each com função externa
function imprimeNome(nome) {
    console.log(nome)
}
nomes.forEach(imprimeNome)