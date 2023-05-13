// node objetosdesafios9.js

//desafio oferta de seguro
//percorrr um objeto, verificar se existe a chave 'dependentes e, caso exista, enviar uma mensagem de oferta de seguro

const cliente = {
    nome:"Douglas",
    idade:24,
    cpf:"4565655656",
    email:"andre@email.com",
    fones: ["5548481651", "515148483231"],
    dependentes: [
      {
        nome: 'Sara',
        parentesco: "filha",
        dataNasc:"20/03/2011"},
      {
        nome:"Samia Maria",
        parentesco: "sobrinha",
        dataNasc: "25/07/2012"
      }],
    saldo:100,

    depositar:function(valor){
        this.saldo += valor
    }
}



//includes é um metodo de array, que verifica se o array descrito, inclui determinado dado
// retorna um true ou false para verificar a condição buscada
function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

oferecerSeguro(cliente)