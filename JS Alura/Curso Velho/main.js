function clicou(){
    document.getElementById("agradeco").innerHTML = "Obrigado por clicar";
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://learn.microsoft.com/pt-br/microsoft-edge/devtools-guide-chromium/experimental-features/focus-mode");
}

function trocar(elemento){
   /// document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";

}
function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = " Passe o mouse aqui";
    elemento.innerHTML = " Passe o mouse aqui";

}




/*function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));


/*var count;
for(count=0; count <=5; count++){
    console.log(count);
}


/*var count = prompt ("Digite um numero");
while (count < 5) {
    console.log(count);
    count++;
};



//if else idade
/*var idade = prompt("Qual a sua idade? ");

if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert ("Menor de idade")
}; */






/*var fruta = {nome:"uva", cor:"verde" };
console.log(fruta);

var frutas = [{nome:"uva", cor:"verde"},{nome:"manga", cor:"amarelo"} ];
console.log(fruta);*/



/*var nome = "Douglas Caíque";
var idade = 24;
var idade2 = 26;
var frase = "Salvador é a melhor cidade do mundo!";

var lista = ["maça", "pêra", "laranja"];
console.log(lista[1]);
lista.push("uva");
console.log(lista);
console.log(lista.length);
console.log(lista.toString());
console.log(lista.join(" | "));
console.log(lista.join(" - "));*/


/*alert("Bem vindo "+ nome);
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);*/

// uso de console para testes

/*console.log(idade + idade2);
console.log("Bem vindo "+ nome);
console.log(frase);
console.log(frase.replace("Salvador", "Fortaleza"));*/