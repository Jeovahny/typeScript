/*/let readlineSync: NodeRequire = require('readline-sync');
let listaConvidados = ['Rafael', 'Jeovahny', 'Pablo', 'João'];
let nome = String(readlineSync.question('Escreva seu nome:'));
let idade = Number(readlineSync.question('Digite sua idade:'));

if (idade < 18){
    console.log('Você não tem idade para entrar no evento.');

}switch(nome){
 case 'Jeovahny':
     console.log(`Bem vindo ao evento ${nome}!!`) 
    break
 case 'Rafael':
        console.log(`Bem vindo ao evento ${nome}!!`) 
    break
case 'João':
            console.log(`Bem vindo ao evento ${nome}!!`)
    break
case 'Pablo':
     console.log(`Bem vindo ao evento ${nome}!!`)
 break
 default:
     console.log('Você não foi convidado')
 }

/*/

    
