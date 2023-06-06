const cliente = {
    nome: 'Lucas',
    idade: '24',
    email: 'doug@email.com',
    telefone: ['71 5544896544', '71 5547896654'],
};

cliente.enderecos = [{
    rua: 'Avenida Pantaleao',
    numero: '14',
    apartamento: false,
    complemento: 'Ao lado do Mercadinho'
},
];


cliente.enderecos.push({
    rua: 'Deputado Herculano Menezes',
    numero: '15',
    apartamento: true,
    complemento: '2 andar'
})


const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);



console.log(listaApenasApartamentos);

