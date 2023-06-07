//*node template-strings.js

const nome = "Douglas";
const idade = 24;
const cidadeDeNascimento = "Salvador";



console.log("Olá, meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de "+ cidadeDeNascimento);

const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao)

// `` --> abertura de template string  // ${} --> entrada de variável dentro do template