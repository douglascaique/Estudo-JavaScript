//node desafios7.js

// que uma função que rece como argumento o nome de um aluno
// verifique se o aluno esta presente na lista e retorne a média final que se enconta no mesmo índice
//caso o nome do aluno nao esteja na lista, retorne uma mensagem indicando que o aluno nao foi encontrado


const alunos =  ['João', 'Juliana', 'Caio', 'Ana']
const medias = [10, 8, 7.5, 9]

let listaBoletim = [alunos, medias]

// Arrow function para definir quais condições devem ser atendidas para os dados seres apresentados
// include, pergunta ao JS se ele inclue



const exibeNomeNotas = (nomedoAluno) => {
    if (listaBoletim[0].includes(nomedoAluno)){

        let indice = listaBoletim[0].indexOf(nomedoAluno)
        return listaBoletim[0][indice] + ', sua média é ' + listaBoletim[1][indice]

    }else {
        return "Aluno não está presente na lista"
    }    
} 

console.log(exibeNomeNotas("Nemo"))