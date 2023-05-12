// node parametros.js

// O que são parametros de função?
// Servem para fazer com que as funções sejam executadas corretamentes

function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(2,2))
console.log(soma(55,46))
console.log(soma(15121,111475))

//parametros x argumentos

// ordem dos parametros deve ser respeitada

function nomeIdade (nome, idade) {
    return `Opa, meu nome é ${nome} e tenho ${idade} anos.`;
}

console.log(nomeIdade("Douglas", 24));
//

function multiplica(x = 1, y = 1){
    return x * y;
}
                            //9         //6
console.log(multiplica(soma(4, 5), soma(3, 3)));


function cumprimentar(){
    console.log("Fala galera!");
}

cumprimentar();


//exercicio
function comParametro(param) {
    console.log(param)
}
comParametro()