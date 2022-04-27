"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//exemplo 01 - Default Parameters
function descontoCompra(preco, desconto = 0.08) {
    return preco * (1 - desconto);
}
console.log(descontoCompra(100));
//exemplo 02
function exibirMensagem(mensagem, saudar = 'Fala pessoal!') {
    return saudar + ' ' + mensagem + '!';
}
console.log(exibirMensagem('Vcs são maravilhosos'));
//exemplo 03
function exibirNome(nome, sobrenome = 'Tavares') {
    return nome + ' ' + sobrenome;
}
const resultado_1 = exibirNome('Jeovahny');
const resultado_2 = exibirNome('Jeovahny', undefined);
//const resuoltado_3 = exibirNome('Jeovahny', 'Tavares Rosa')
const resultado_4 = exibirNome('Jeovahny', 'Tavares Rosa');
console.log(resultado_1);
console.log(resultado_2);
console.log(resultado_4);
