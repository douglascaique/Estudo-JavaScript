const cliente = {
    nome: 'Lucas',
    idade: 24,
    email: 'doug@email.com',
    telefone: ['71 5544896544', '71 5547896654'],
};

cliente.enderecos = [{
    rua: 'Avenida Pantaleao',
    numero: 14,
    apartamento: false,
    complemento: 'Ao lado do Mercadinho',
},
];

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}