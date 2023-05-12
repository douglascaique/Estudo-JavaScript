# aula_javascript

Introdução ao JavaScript

- Linguagem Dinâmica
- Untyped
- Multiparadigma - Conseguimos resolver um mesmo problema de várias formas diferentes
- Linguagem de script e multiplataforma

* Script ; Executada em tempo real
* Client Side - É executado do lado do cliente/usuário
* Tem capacidade de interagir com elementos de uma página HTML
* Muito usado no desenvolvimento de páginas e também apps mobile híbridos
* Linguagem Interpretada

ES6/ES2015

- Versão do JS que saiu em 2015
- Mais famosa
- Elevou o JS para outro nível

Dom - Document Object Model

* é um documento que o navegador gera ao carregar a página
* JS pode alterar todos os elementos do HTML
* JS pode alterar doso os atributos e estilos de CSS de uma pagina
* É um modelo de objeto em árvores

NodeJS

- É uma ferramenta que interpreta o JavaScript
- Traz o console
- É um interpretador do código JS
- Desenvolvido em 2010 para gear o JS fora do navegador


Erros

- As pessoas que desenvolvem programas e linguagens são responsáveis pelo 'tratamento de erros'

Console.log

- Ferramenta que há no node e no navegador
- Serve para colocar os dados para fora da aplicação
- É um registro no console





Operadores

==  

- conversão intríseca antes de comparar e mostrar
- comparação implícita
- compara só o valor do dado

===

- comparação específica sem comparação de tipos de dados
- comparação explícita
- compara valor e o tipo de dado

|| Operador OU

- retorna True caso uma condição seja válida

&& Operador E

- retorna True apenas setodas as condições forem válidas

!= e !== Operadores "não igual" e "estritamente não igual"

- utilizados para comparação, retornam true ou false



Funções

- São trechos de códigos que separamos em um bloco e podemos chamar depois
- existem 3 formas de escrever funções
- Declaração de função: function nomedefunção(){ string + return}



Função sem retorno e sem parâmetro

- Executa a instrução, sem a necessiade de disponibilizar o resultado para o restante do código;
  Ex:

```scss
function cumprimentar(){
 console.log('oi gente!')
}

cumprimentar()
```


Função sem retorno, com parâmetro

- A função recebe, via parâmentro, um valor ou dado.
- Dessa forma é possível reaproveitar a função para que funcione de maneira parecida com qualquer outro valor ou dado.
  Ex:

```javascript
function cumprimentaPessoa(pessoa){
 console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa('Helena')
```


Função com retorno, sem parâmetro

- Combina funções para que cada uma controle apenas uma parte do código e elas trabalhem juntas
- É uma boa prática e facilita na construção de estruturas mais complexas, delegando uma atividade a cada função
- A função fica disponível para outras partes de um mesmo programa
  Ex:

```javascript
function cumprimentar(){
 return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
 console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”
```


Função com Return e mais de um parâmetro

- O JavaScript identifica os parâmetros pela ordem de acordo com o estabelecido na função e declarado na entrada da função
  Ex:

```scss
function operacaoMatematica(numero1, numero2, numero3) {
 return numero1 + numero2 + numero3
}

operacaoMatematica(15, 30, 45) // 90
```


Parâmetros x Argumentos

- Na prática, se referem ao mesmo tipo de dado
- Algumas documentações se referem a `<i>`parâmetros `</i>` no momento em que a função é definida
  - ex: (numero1, numero2, numero3);
- Argumentos como dados que utilizamos para executar a função
  - ex: (15, 30, 45);



Condicional

- As estruturas condicionais permitem que o código se ramifique e tome "Caminhos" diferentes de acordo com a condição fornecida.
- Estrutura feita para definir o fluxo dos programas
- If - Se

  - A condição é sempre uma expressão que deverá ser avaliadda e retunar um valor TRUE ou FALSE.
  - O bloco de código dentro do IF só será executado caso a expressão retorne TRUE
  - ex:

  ```js
  const num = 10;

  if (num !== null) {
   console.log(`o número é ${num}`);
  }
  ```
- Multiplas Condições - Operadores && (And) ou OR( || )
- ex:

  ```js
  const num = 11;

  if (num > 10 || !num) {
   console.log('número não válido');
  }
  ```

  ```js
  const num = 11;

  if (num > 10 && num < 20) {
   console.log('número válido');
  }
  ```
- if...else

  - adicionam a cláusula else para ser executada quando a condição do if retorna false
  - podemos ler como "ser...senão"
  - "se uma dada condição for verddadeira execute um determinado código; senão, execute outro código".
  - ex:

  ```js
  function verificaNumero(numero) {
      if (numero > 10) {
           return 'número maior que 10';
      } else {
          return 'número não é maior que 10';
      }
  }

  console.log(verificaNumero(9)) //número não é maior que 10
  ```
- else if

  - em alguns casos é necessário mais de duas opções de fluxo para o código
  - pode receber parâmetros direto na abertura da função, ao contrário do else puro
  - As condições de cada else if devem ser excludentes entre si, não pode haver ambiguidade entre as condições
  - ex:

  ```js
  const num = 15;

  if (num >= 0 && num <= 10) {
    console.log('número entre zero e dez');
  } else if (num > 10 && num <= 20) {
    console.log('número entre dez e vinte');
  } else if (num > 20 && num <= 30) {
    console.log('número entre vinte e trinta');
  } else {
    console.log('outro número');
  }
  ```





Documentação do Math = "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description"

Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.

Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).
