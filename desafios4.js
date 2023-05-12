//node desafios4.js 

//Crie uma lista echamada com os seguintes alunos:   'João', 'Ana', 'Caio', 'Lara, 'Marjorie', 'Leo'
//Porém, Ana e o Caio mudaram de escola e o Rodrigo entrou nessa sala. Ataulize a lista
                        //0      //1    //2     //3     //4         //5
const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']


//metodo splice(Indice onde começaremos a alterar, numero de items que iremos remover, elemento a ser incluido no lugar caso queira)
listaDeChamada.splice(1,2, 'Rodrigo')

console.log(`Lista de Chamada Atualizada: ${listaDeChamada}`)

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)