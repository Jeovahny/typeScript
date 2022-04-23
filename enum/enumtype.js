"use strict";
//exemplo 01 - Numerics Enums
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Ingl\u00EAs"] = 0] = "Ingl\u00EAs";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Portug\u00EAs"] = 2] = "Portug\u00EAs";
    Idioma[Idioma["Franc\u00EAs"] = 3] = "Franc\u00EAs";
})(Idioma || (Idioma = {}));
console.log(Idioma);
//exemplo 02 - Strings Enums
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Ter\u00E7a"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "Dom";
})(Dia || (Dia = {}));
console.log(Dia.Segunda);
function comida(c) {
    return 'Comidas muito apetitosas!';
}
//console.log(comida(Comida.Hamburger))
//console.log(comida(Comida.Churrasco))
//console.log(comida(Comida.Torta))
//exemplo 04 - Quando usar ENUMS?
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["ToDo"] = 0] = "ToDo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const concluidaTarefa = {
    id: 1,
    Status: Tarefa.Done,
    Descrição: 'Parabéns! Tarefa concluída com sucesso!',
};
if (concluidaTarefa.Status === Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa concluída!');
}
