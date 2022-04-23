"use strict";
//exemplo 01- Tipo ANY
const A = 35;
const B = ['Jeovahny'];
const result = A + B;
console.log(result);
//exemplo 02 - Quando o tipo ANY  é inferido implicitamente.
//let frase;
//frase = 'Oi, tudo bem?';
//console.log(frase);
//exemplo 03 -Quando devemos usar o tipo Any
const formulario = {
    nome: 'Jeovahny',
    sobrenome: 'Tavares',
    idade: 35,
};
console.log(formulario);
