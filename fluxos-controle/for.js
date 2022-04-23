"use strict";
//exemplo 01 - Uso do for
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//exemplo 02 - uso do for...of
const arrayNumeros = [10, 20, 30, 40, 50];
for (const i of arrayNumeros) {
    console.log(i);
}
//exemplo 03 - uso do for...in (retorna na coleção de matris uma lista ou tupla)
const arrayNumero01 = [5, 4, 3, 2, 1, 0];
for (const i in arrayNumero01) {
    console.log(i);
}
;
//exemplo 04 - Método Sort
const ordemNumerica = arrayNumero01.sort();
console.log(ordemNumerica);
