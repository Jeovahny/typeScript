import { type } from "os";

//exemplo 06 - Propiedade readonly (Se deseja proibir que os devs não modifiquem um determinado objeto use readonly)
interface Pessoa05 {
    nome: String;
    função: string;
    linguagem: string;
    readonly email: string;
}
function onboarding05(pessoa: Pessoa05) {
return 'Seja bem vindo' +
pessoa.nome +
'!' +
'Sua função aqui na empresa será' +
pessoa.função +
'.' +
'Você trabalhará com a linguagem ' +
pessoa.linguagem +
'.' +
'Seu email será ' +
pessoa.email
};

console.log(onboarding05({ nome: 'Jeovahny Tavares', função: 'Estudante de Programação', linguagem: 'Javascript/typescript', email: 'jeovahnyrosa@gmail.com' }));

/*/exemplo 07 - tipo de extensões (herança)
interface mae {
    nome: string
}
interface pai{
    nome: string
}

interface filho extends mae, pai{
 idade: Number
}

const filho: filho = {
    nome: 'Jeovahny',
    sobrenome: 'Tavares',
    idade: 35
}
console.log(filho)
/*/

//exemplo 08 - Tipos de interseções

interface cachorro{
    tipo: string
}

interface gato{
    tipo:string
}

type animal = cachorro & gato


