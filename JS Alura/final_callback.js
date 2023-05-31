// node final_callback.js
const arrayNums = [1, 2, 3, 4]



// metodo map rastreando a função. Mais simples de se ler
/*
function multiplicaPorDez(num) {
    return num * 10
   }

const arraySomada = arrayNums.map(multiplicaPorDez)
console.log(arraySomada)
*/


// metodo map, resumindo a operação desejada  

                                                //arrow function anonima, que existe somente dentro do map
const arraySomada = /*lista*/ arrayNums.map(num => num*10)
console.log(arraySomada)