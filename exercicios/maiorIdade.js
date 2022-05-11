"use strict";
let input = require('readline-Sync');
let anoDeNascimento = Number(input.question('Digite seu ano de nascimento : '));
let anoAtual = Number(input.question('Digite o ano atual : '));
let idade = anoAtual - anoDeNascimento;
if (idade > 0 && idade < 18) {
    console.log(`Sua idade é ${idade} anos, você ainda não alcançou a maioiridade!`);
}
else {
    console.log(`Sua idade é ${idade} anos, você já é maior de idade! `);
}
