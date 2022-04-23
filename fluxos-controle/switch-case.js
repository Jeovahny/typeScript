"use strict";
//exemplo 01 - Uso do switch case
let flor = 'rosa';
switch (flor) {
    case 'rosa':
        console.log('Rosas são vermelhas!');
        break;
    case 'violeta':
        console.log('Violetas são azuis');
        break;
    case 'rosa':
        console.log('Rosas são vermelhas');
    default:
        console.log('Por favor, selecione outra espécie de flor!');
}
//exemplo 02 - Uso de switch case
let diaUtilSem = '0';
switch (diaUtilSem) {
    case '0':
        console.log('Domingo');
        break;
    case '1':
        console.log('Segunda');
        break;
    case '2':
        console.log('terça');
        break;
    case '3':
        console.log('quarta');
        break;
    case '4':
        console.log('quinta');
        break;
    case '5':
        console.log('sexta');
        break;
    default:
        console.log('Não é um dia útil');
}
