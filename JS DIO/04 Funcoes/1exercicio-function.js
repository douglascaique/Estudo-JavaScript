/*
 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;  (media<5)
- Média entre 5 e 7, recuperação;   (media>=5 && media<=7)
- Média acima de 7, passou de semestre; (media > 7)
*/

//const nota1 = 8;
//const nota2 = 2;
//const nota3 = 8;

//const media = (nota1 + nota2 + nota3) / 3;


function media(nota1, nota2, nota3) {
    media = (nota1 + nota2 + nota3) / 3;
}

function classAluno(media) {
    if (media < 5) {
        return 'Reprovado';

    } else if (media >= 5 && media <= 7) {
        return 'Recuperação';

    } else if (media > 7) {
        return 'Aprovado';
    }
}



console.log(media(8, 2, 8));





