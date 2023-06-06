const cliente = {
    nome: 'Lucas',
    idade: '24',
    email: 'doug@email.com',
    telefone: ['71 5544896544', '71 5547896654'],
};

cliente.endereco = {
    rua: 'Avenida Pantaleao',
    numero: '14',
    apartamento: false,
    complemento: 'Ao lado do Mercadinho'
};

console.log(cliente);

console.log(cliente.endereco.complemento);

