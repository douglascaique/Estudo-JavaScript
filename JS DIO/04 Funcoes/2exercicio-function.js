/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
 */

function calculaImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificaImc(imc) {
    if (imc < 18.5) {
        return `Seu IMC é ${imc}, você está Abaixo do Peso!`
    } else if (imc >= 18.5 && imc < 25) {
        return `Seu IMC é ${imc},você está com um Peso Normal!`
    } else if (imc >= 25 && imc < 30) {
        return `Seu IMC é ${imc}, você está Acima do Peso!`
    } else if (imc >= 30 && imc < 40) {
        return `Seu IMC é ${imc}, você está Obeso!`
    } else if (imc >= 40)
        return `Seu IMC é ${imc}, você está em Obesidade Grave!`
}

function informaIMC() {
    const peso = 75;
    const altura = 1.75;

    const imc = calculaImc(peso, altura);

    console.log(classificaImc(imc));
}

informaIMC();



