
const numero = 0;
const numeroDivisivelPor5 = (numero % 5) === 0;
//const numeroPar = (numero % 2) === 0;


//Condicionais - Operador SE -- if    | Senão -- else | senao se -- else if
if (numero === 0) {
    console.log('O número é inválido')
}else if (numeroDivisivelPor5) {
    console.log(numero + ' é divisível por 5');
} else {
    console.log(numero + ' não é divisível por 5');
}