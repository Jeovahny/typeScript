export{}
//exemplo 01
function somarNumeros(...numeros:number[]){
    let total = 0;
    numeros.forEach((numero) => (total += numero));
    return total;
}

console.log(somarNumeros(30, 50));
console.log(somarNumeros(70,30, 50, 30, 20));

//exemplo 02

function ListarFrutas(frase : string, ...frutas: string[]){
    return frase + ' ' + frutas.join(', ');

}
console.log(ListarFrutas('Jeovahny, vc precisa ir na feira e comprar...:',
'🍇',
'🍈',
'🍉',
'🍍',
'🍎',
)
);

//exemplo 03
class produtos{
    public exibirProdutos(...produtos: string[]): void{
        for(const produto of produtos){
            console.log(produto);
        }

}
}
const departamentoInformatica: produtos = new produtos();
console.log('Todos os produtos do departamento de informática disponíveis no n estoque...: ',);

departamentoInformatica.exibirProdutos(
    'Mouse',
    'Teclado',
    'Pen Drive',
    'HD',
    'Monitor'
);