# JavaScript - Estudos

<h1>Introdução ao JavaScript</h1>

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

<h2>Operadores</h2>

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

<h2>Funções</h2>

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

<h2>Condicional</h2>

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

<h3>Array</h3>

- Pode ser definido como uma lista ordenada de valores enumerados
- Cada valor é chamado de ELEMENTO
- cada elemento se localiza em uma posição da lista chamada ÍNDICE
- ex:

```cpp
const numeros = [50, 43, 12];
```

Quando falamos de valores, nos referimos a ddados de algum tipo: string, number, booleano, etc

```cpp
const arrayDeNumeros = [50, 43, 12];
const arrayDeStrings = ["banana", "alura", "Juliana"];
```

- As listas ordenadas significam que a ordem definida se manterá de acordo com o escrito no código
- ou seja, cadda um está associado a um identificador numérico que diz qual a posição na lista
- Elemento: Cada valor da lista
- Índice: o número que identifica a posição de um valor em um array
- Contagem de índices começa no 0

<h3>a propriedade Length:

- Ela especifica o tamanho de um array
- Ela traz o número de elementos, a quantidade de dados, separados por vírgula,  contidos no array

<h2>Métodos</h2>

- São funções que servem como uma propriedade do array ou de um objeto
- pode realizar tarefas pré-definidas usando os dados do array e dos parametros
- adicionar, remover ou até encontrar elementos

concat()

- realiza uma concatenação
- junta dois arrays, colocando o array passado como argumento, logo depois do primeiro
- nao altera o array no qual foi chamado, entao, precisamos salvar o resultado em um novo array

filter()

* Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
* Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.

find()

* Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.

findIndex()

* Funciona igual o `find()`, mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.

indexOf()

* Localiza e retorna o índice referente à primeira ocorrência de determinado valor em um array. Caso não exista nenhuma ocorrência do valor, retorna `-1`.

lastIndexOf()

* Funciona da mesma forma que o `indexOf()`, porém retorna o índice referente à *última* ocorrência de um valor em um array, varrendo o array de trás para frente.

forEach()

* Executa uma função em cada elemento do array de forma individual.
* Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.

pop()

* Retira o último elemento do array.
* Altera o array original removendo o elemento.

shift()

* Retira o primeiro elemento do array.
* Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.

push()

* Adiciona o elemento passado como parâmetro do array, porém na última posição.
* Altera o array original com o novo valor.

unshift()

* Funciona igual ao `push()`, porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
* Altera o array original com o novo valor.

reduce()

* Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.

1) O método `reduce()` está trabalhando com dois parâmetros. O primeiro é a **função callback** obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial - no caso, `0`
2) A função callback foi escrita diretamente dentro do `reduce()`, e esta função também está recebendo dois parâmetros, ambos obrigatórios: O valor acumulado e o valor atual.
3) A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução dentro da função (`atual + acum`) não precisamos usar chaves e nem da palavra-chave `return`.

reduceRight()

* Funciona igual o `reduce()` porém começa do final do array e segue até o início.

reverse()

* Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.

slice()

* Copia uma parte do array para outro array.

sort()

* Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.

splice()

* Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.

<h2>Matrizes</h2>

Uma forma de chamar as Arrays de 2 dimensões

Podem ser visualizaddas como uma tabela de Excel

Cada campo representa um elemento, onde precisamos de uma linha e uma coluna para acessar um campo

[]  -- Linha

[]  -- Coluna

## Laços de Repetição

For - Ferramentas essenciais, utilizadas para percorrer arrays e executar blocos de código para cada elemento

## Callbacks

## JSON

JavaScript Object Notation ou Notação de objeto JavaScript

- FOrmato que utiliza a sintaxe de objetos e arrays do JS
- Versátil
- forma mais comum de estrutura para transferência de dados entre cliente/servidor
- tem sido utilizado mesmo em programas que não utilizam JS

  - ex:

  ```json
  {
   "editora": "Casa do Código",
   "catalogo": [
   {
     "id": 50,
     "titulo": "Primeiros Passos com NodeJS",
     "autor": "João Rubens",
     "categoria": "programação",
     "versoes": ["ebook", "impresso"]
   },
   {
     "id": 59,
     "titulo": "ECMAScript 6",
     "autor": "Diego Martins de Pinho",
     "categoria": "programação",
     "versoes": ["ebook"]
   },
   {
   "id": 39,
   "titulo": "Orientação a Objetos",
   "autor": "Thiago Leite",
   "categoria": "programação",
   "versoes": ["ebook", "impresso"]
   }
  ]}
  ```

  As diferenças de sintaxe entre JSON e um objeto JavaScript são:

  * No JSON, as chaves sempre devem estar entre aspas duplas `” ”`, no formato `string`. Já no objeto JavaScript, as aspas não são obrigatórias;
  * O JSON aceita como valores apenas dados primitivos (`string`, `number` para números finitos, `true`, `false` e `null`), objetos e arrays. Não é possível declarar funções/métodos;
  * Não são permitidas vírgulas após o último conjunto de chave/valor do objeto.

 *JSON é um formato criado para transferência de dados* , sendo assim é necessário convertê-lo para um objeto JavaScript para que os dados possam ser utilizados em um programa. Para isso, existem dois métodos nativos:

* `JSON.parse()`: converte JSON para um objeto JavaScript;
* `JSON.stringify()`: converte um objeto JavaScript para o formato JSON.


Orientação a Objetos

- É um Paradigma
- É um modelo (estilo) de se programar
- a ideia é trazer pro código, conceitos que vemos no mundo real
- Transformar coisas do mundo real para código
- o que são classes?
  - são modelos usados para criação de objetos
  - define atributos (características) e os métodos(comportamentos) de um objeto
  - define o modelo base usado na criação de objetos na memória do computador
- Herança
  - é um mecanismo que permite que uma classe herde características de uma outra classe
- Objeto
  - é a instancia de uma classe
- Na construção de uma clase em JS, além da palavra reservada class, devemos também definir uma função construtura - que inicializa as propriedades do objeto - quando ele for criado
- 


Palavra chave this   --- estudar isso aqui depois

- call()
- apply()
- blind()

`<h1>`Links de Documentação `</h1>`

Documentação do Math = "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description"

Documentação de Métoddos de Arrays = "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array"
