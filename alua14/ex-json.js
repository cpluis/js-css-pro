var texto = '[ { "nome" : "TV" } ]';

console.log(texto);


var objeto = JSON.parse(texto);

console.log(objeto);

console.log(objeto[0].nome);


var carro = [
    {
        "nome": "Prisma",
        "ano": 2015
    },
    {
        "nome": "Celta",
        "ano": 2012
    }
]

console.log(carro);

//JSON Strin
var carrosString = JSON.stringify(carro);

console.log(carrosString);