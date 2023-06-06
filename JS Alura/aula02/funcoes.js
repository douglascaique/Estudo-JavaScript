const cliente = {
    nome: 'Lucas',
    idade: 24,
    email: 'doug@email.com',
    telefone: ['71 5544896544', '71 5547896654'],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo ${this.saldo}`);
        }
    },
};

cliente.efetuaPagamento(190)