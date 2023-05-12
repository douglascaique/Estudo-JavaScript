//node desafios12.js
// depois de calcula a media dos alunos, precimamos mostrar quem está reprovado entre os alunos
//'Ana','Marcos','Maria','Mauro'
//7,4.5,8,7.5

//"Você reprovou :c! ""
//"Parabéns, você foi aprovade!""

const nomes = ['Ana','Marcos','Maria','Mauro']
const medias = [7,4.5,8,7.5]


//metodo filter
// o desafio pediu um retorno de nome de pessoa reprovada
// parametro indice
                                                        //verifica se essa condição procede dentro da lista solicitada
const reprovados = nomes.filter ( (aluno, indice) => medias[indice] < 5)
console.log(`Reprovados: ${reprovados}`)
