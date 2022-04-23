// exemplo o1 - Uso simples de Tuplas em TypeScript
let pessoa: [string, string, number];
pessoa = ['Jeovahny ', 'Desenvolvedor Web', 35]
console.log(pessoa);

//Exemplo 02 - Acessando o valor da tupla
let pessoa1: [string, string, number];
pessoa1 = ['Jeovahny', 'Desenvolvedor Web', 35]
console.log(pessoa1[1])

//Exemplo 03 - tuplas (com spread operator)
let listaFrutas: [string, ...string[]] = ['🍒', '🍓', '🍅', '🍆', '🍏'];
console.log(...listaFrutas);

//exemplo 04 - Outra forma de usar tuplas em TypeScript (com labels)

let pessoa2: [ nome: string, profissão: string, idade: number] = ['Jeovahny', 'Desenvolvedor Web', 35];
console.log(pessoa2)


// exemplo 05 - Lista Heterogênea Tupla:

let listaFrutas2: [number, boolean,  ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

// exemplo 06 - Uso de tuplas em funções

function listarPessoas(nomes: string[], idades: number[]){
    return [...nomes, ...idades];
}

let resultado = listarPessoas(['Jeovahny Tavares', 'Ludmila'], [35, 10]);
console.log(resultado)

//exemplo 07  - Labeled Tuples com Spread Operator numa função

type nome = 
              | [ primeiroNome: string, sobrenome: string]
              | [primeiroNome: string,  nomeDoMeio: string, sobrenome: string]

function criarPessoa(...nome: nome){
    return[...nome];
}              

console.log(criarPessoa('Jeovahny', 'Rosa'))
console.log(criarPessoa('Jeovahny', 'Tavares', 'Rosa'))