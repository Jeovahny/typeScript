"use strict";
// exemplo o1 - Uso simples de Tuplas em TypeScript
let pessoa;
pessoa = ['Jeovahny ', 'Desenvolvedor Web', 35];
console.log(pessoa);
//Exemplo 02 - Acessando o valor da tupla
let pessoa1;
pessoa1 = ['Jeovahny', 'Desenvolvedor Web', 35];
console.log(pessoa1[1]);
//Exemplo 03 - tuplas (com spread operator)
let listaFrutas = ['🍒', '🍓', '🍅', '🍆', '🍏'];
console.log(...listaFrutas);
//exemplo 04 - Outra forma de usar tuplas em TypeScript (com labels)
let pessoa2 = ['Jeovahny', 'Desenvolvedor Web', 35];
console.log(pessoa2);
// exemplo 05 - Lista Heterogênea Tupla:
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// exemplo 06 - Uso de tuplas em funções
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Jeovahny Tavares', 'Ludmila'], [35, 10]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Jeovahny', 'Rosa'));
console.log(criarPessoa('Jeovahny', 'Tavares', 'Rosa'));
