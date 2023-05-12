// node desafios11.js
// precisamos padronizar alista de alunos para conter apenas letras maiusculas
//'ana Julia', 'Caio vinicius', 'BIA silva'

const listaAlunos = ['ana Julia', 'Caio vinicius', 'BIA silva']

const listaAlunosUpper = listaAlunos.map( listaAlunos => listaAlunos.toUpperCase() )

console.log(listaAlunosUpper)


const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA