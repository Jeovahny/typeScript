// exemplo 01 - Tipo Unknown
let valorVariavel: unknown;

valorVariavel= true;
valorVariavel= 129;
valorVariavel=[];
valorVariavel= 'campo de texto';

//console.log(valorVariavel);

//exemplo 02 - Erro ao tentar atribuir o valor um valor 'unknown' a outros tipos.

//let valor: unknown;
//let valor1: boolean = valor;

//exemplos de diferenças Unknown vs Any.

let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

console.log(algumaCoisaAny.toFixed[2]);
//console.log(algumaCoisaUnknown.toFixed[2]);

//O unknown vai te forçar a abrir uma condicional (if) para typar seu códido especificamente.
