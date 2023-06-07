const clientes = require("./clientes.json")


//encontre o que for pedido

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

//parametros
const encontrado = encontrar(clientes, "nome", "Kirby");
const encontrado2 = encontrar(clientes, "telefone", "19918820860")

//resultados
console.log(encontrado2);