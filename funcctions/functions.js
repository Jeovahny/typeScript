"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//exemplo 01 - Functions(named function)
function somarNumeros(num1, num2) {
    return num1 + num2;
}
const resultado = somarNumeros(2, 2);
console.log(resultado);
//exemplo 02 - função anônima (função expressiva)
const saudar = function (mensagem) {
    return mensagem;
};
console.log(saudar('Olá developers!'));
//exemplo 03 - (Arrow Function Expressão)
const saudar_03 = (mensagem) => {
    return mensagem;
};
console.log(saudar_03('Olá developers, este é o exemplo com Arrow Function'));
//outro exemplo
let somarNum = (num1, num2) => {
    return num1 + num2;
};
console.log(somarNum(5, 5));
