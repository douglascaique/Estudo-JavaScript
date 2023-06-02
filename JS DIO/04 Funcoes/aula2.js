function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}



function verificaIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Douglas') + ' e sou de maior');
    } else {
        console.log(escrevaMeuNome('Douglas') + ' e sou de menor!');
    }
}


verificaIdade(18);