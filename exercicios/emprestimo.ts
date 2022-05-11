/*/export{}

let input: NodeRequire = require('readline-Sync');
let valorEmprestimo = Number(input.question('Valor do emprestimo R$'));
let parcelas = Number  (input.question('Numero de parcelas'));
if (parcelas === 1){
    console.log(`Você terá que pagar R$${valorEmprestimo} + R$${(valorEmprestimo * 0.2).toFixed(2)} de juros.`)
}else{
console.log(`Você terá que pagar R$${valorEmprestimo} + R$${(valorEmprestimo * 0.2 / parcelas).toFixed(2)} de juros em cada parcela.`)
};/*/