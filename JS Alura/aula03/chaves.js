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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Error. É necessário ter um endereço cadastrado.")
}