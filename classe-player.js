

class jogadorLol {
    constructor(nome, role, email, main, saldoRp){
        this.nome = nome 
        this.role = role
        this.email = email 
        this.main = main
        this.saldoRp = saldoRp
    }

    depositar(valor){
        this.saldoRp += valor
    }

    exibirSaldoRp(){
        console.log(this.saldoRp)
    }
}

class JogadorDota extends jogadorLol {
    constructor(nome, role, email, main, saldoRp)
}