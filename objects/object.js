"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa = {
    nome: 'Jeovahny',
    sobrenome: 'Tavares',
    idade: 35,
    profissão: 'Estudante de Programação'
};
console.log(pessoa);
//exemplo 02 - Object como parâmetro de função (eles podem ser anônimos)
function onboarding01(funcionario) {
    return 'Seja bem vindo' + funcionario.nome;
}
console.log(onboarding01({ nome: 'Jeovahny Tavares' }));
function onboarding02(pessoa) {
    return 'Seja bem vindo' +
        pessoa.nome +
        '!' +
        'Sua função aqui na empresa será' +
        pessoa.função +
        '.';
}
;
console.log(onboarding02({ nome: 'Jeovahny Tavares', função: 'Estudante de Programação' }));
function onboarding03(pessoa) {
    return 'Seja bem vindo' +
        pessoa.nome +
        '!' +
        'Sua função aqui na empresa será' +
        pessoa.função +
        '.' +
        'Você trabalhará com a linguagem' +
        pessoa.linguagem +
        '.';
}
;
console.log(onboarding03({ nome: 'Jeovahny Tavares', função: 'Estudante de Programação', linguagem: 'Javascript/Typescript' }));
function onboarding04(pessoa) {
    return 'Seja bem vindo' +
        pessoa.nome +
        '!' +
        'Sua função aqui na empresa será' +
        pessoa.função +
        '.' +
        'Você trabalhará com a linguagem' +
        pessoa.linguagem +
        '.';
}
;
console.log(onboarding04({ nome: 'Jeovahny Tavares', função: 'Estudante de Programação', linguagem: 'Javascript/Typescript' }));
