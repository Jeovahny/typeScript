"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onboarding05(pessoa) {
    return 'Seja bem vindo' +
        pessoa.nome +
        '!' +
        'Sua função aqui na empresa será' +
        pessoa.função +
        '.' +
        'Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.' +
        'Seu email será ' +
        pessoa.email;
}
;
console.log(onboarding05({ nome: 'Jeovahny Tavares', função: 'Estudante de Programação', linguagem: 'Javascript/typescript', email: 'jeovahnyrosa@gmail.com' }));
