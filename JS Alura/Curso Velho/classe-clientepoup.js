//node classe-clientepoup.js



// palavra-chave 'this' - 'isso' ou 'este'
class Cliente {
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

                //método extends
class ClientePoupanca extends Cliente{

    //constructor
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldo = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

//saídas

const douglas = new ClientePoupanca("Doug", "do@gmail", "51845262", 100,200)

console.log(douglas)

douglas.depositar(50)
douglas.depositarPoupanca(50)

console.log(douglas)