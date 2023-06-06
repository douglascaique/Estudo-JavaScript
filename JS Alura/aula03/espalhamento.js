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
    complemento: 'Frente de Rua',
},
];

function ligaParCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);