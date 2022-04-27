export{}
//exemplo 01 - Functions(named function)
function somarNumeros(num1:number, num2:number): number{

      return num1 + num2;

}
const resultado = somarNumeros(2, 2)
console.log(resultado);

//exemplo 02 - função anônima (função expressiva)

const  saudar = function(mensagem: string){
    return mensagem;
};
console.log(saudar('Olá developers!'));

//exemplo 03 - (Arrow Function Expressão)
const saudar_03 = (mensagem:string) =>{
    return mensagem;
};
console.log(saudar_03('Olá developers, este é o exemplo com Arrow Function'));

//outro exemplo

let somarNum = (num1:number, num2: number):number => {
    return num1 + num2
    
}

console.log(somarNum(5, 5));

