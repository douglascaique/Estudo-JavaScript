//node classe-cliente.js



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

const douglas = new Cliente("Douglas", "douglas@email.com", "1518482629", 1500)

/// saídas
douglas.exibirSaldo()

console.log(douglas)