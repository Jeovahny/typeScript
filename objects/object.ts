//exemplo 01 - exemplo básico do uso de Type Objects
export {};

const pessoa ={
    nome: 'Jeovahny',
    sobrenome: 'Tavares',
    idade: 35,
    profissão: 'Estudante de Programação'
};
console.log(pessoa);

//exemplo 02 - Object como parâmetro de função (eles podem ser anônimos)
function onboarding01(funcionario: {nome: string}){
return 'Seja bem vindo' +funcionario.nome;
}
console.log(onboarding01({nome: 'Jeovahny Tavares'}))

//exemplo 03 - Objects Nomeados
interface Pessoa {
    nome: String;
    função: string;
}
function onboarding02(pessoa: Pessoa) {
return 'Seja bem vindo' +
pessoa.nome +
'!' +
'Sua função aqui na empresa será' +
pessoa.função +
'.'
};

console.log(onboarding02({ nome: 'Jeovahny Tavares', função: 'Estudante de Programação'}));

//exemplo 04 - Objeto como Type:
type pessoa03 = {
    nome: string;
    função: string;
    linguagem: string;
}
function onboarding03(pessoa: pessoa03) {
    return 'Seja bem vindo' +
    pessoa.nome +
    '!' +
    'Sua função aqui na empresa será' +
    pessoa.função +
    '.' +
    'Você trabalhará com a linguagem' +
    pessoa.linguagem +
    '.'
    };
    
    console.log(onboarding03({ nome: 'Jeovahny Tavares', função: 'Estudante de Programação', linguagem: 'Javascript/Typescript'}));

   // exemplo 05 - Usando optional no object.
   interface pessoa04 {
       nome: string;
       função: string;
       linguagem: string;
       email?: string
   }
   function onboarding04(pessoa: pessoa04) {
    return 'Seja bem vindo' +
    pessoa.nome +
    '!' +
    'Sua função aqui na empresa será' +
    pessoa.função +
    '.' +
    'Você trabalhará com a linguagem' +
    pessoa.linguagem +
    '.'
    };
    
    console.log(onboarding04({ nome: 'Jeovahny Tavares', função: 'Estudante de Programação', linguagem: 'Javascript/Typescript'}));

    