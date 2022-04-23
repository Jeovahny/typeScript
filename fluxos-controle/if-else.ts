export{};
//exemplo 01 - Uso do if

const numeroMaximo = 100;
let contador = 80;
if (contador < numeroMaximo){
    contador++
}

console.log(contador);

//exemplo 02 - uso de else-if
const permissaoIdadeDirigir = 18
if (permissaoIdadeDirigir >= 18){
    console.log('Você tem permissão para dirigir!')

}else{
    console.log('Você não tem permissão para dirigir')
};

// exemplo 03 - uso do if-else if

let desconto: Number;
let valorCompra = 8;

if ( valorCompra > 0 && valorCompra <= 5){
   desconto = 5;

}else if(valorCompra > 5 && valorCompra <= 10 ){
    desconto = 10;
}else{
    desconto = 15

}
console.log(`Você teve desconto de ...: ${desconto}%` )

/*/Exemplo 02 - Ternário (? :) - if...else
const idadeVotacao = 18
if(idadeVotacao >= 18){
console.log('Você é elegível para votar')

}else{
    console.log('Você não é elegível para votar')
}/*/

//===> Ternário

const idadeVotacao = 21;
const podeVotar = (idadeVotacao >= 18) ? 'Você é elegível para votar': 'Você não é elegível para votar'

console.log(podeVotar)