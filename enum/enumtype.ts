//exemplo 01 - Numerics Enums

enum Idioma {
    'Inglês',
    'Espanhol',
    'Portugês',
    'Francês',

}

console.log(Idioma);

//exemplo 02 - Strings Enums

enum Dia {
    Segunda = 'SEG',
    Terça = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'Dom',

}

console.log (Dia.Segunda)

//exemplo 03 - Como acessar UM valor de um ENUM com uma chave: (usando const)
//não aconselhável, não seguro

const enum Comida {
    'Hamburger',
    'Massa',
    'Pizza',
    'Torta',
    'Churrasco',

}
function comida(c: Comida){
    return 'Comidas muito apetitosas!';

}
//console.log(comida(Comida.Hamburger))
//console.log(comida(Comida.Churrasco))
//console.log(comida(Comida.Torta))

//exemplo 04 - Quando usar ENUMS?

enum Tarefa {
    ToDo,
    Progress,
    Done,

}

const concluidaTarefa = {
    id: 1,
    Status: Tarefa.Done,
    Descrição: 'Parabéns! Tarefa concluída com sucesso!',
};
if(concluidaTarefa.Status === Tarefa.Done){
    console.log('Enviar e-mail: Tarefa concluída!')
}