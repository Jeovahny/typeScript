//exemplo 01 - Optional Parameters
function informarDadosPessoa(idPessoa: number, nome: string, email?: string){
    console.log('Id Funcionário ...:  ', idPessoa, 'nome...:', nome );
   if(email != undefined) console.log('E-mail)...:', email);

   
}
informarDadosPessoa(775544, 'Jeovahny');
informarDadosPessoa(775533, 'Joana', 'jeovahnyrosa@gmail.com');

//exemplo 02

function mensagemLog(mensagem: string, id?: number){
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, mensagem, id || 'usuário(a) não conectado(a).'); 
}

mensagemLog('Atualizar página');
mensagemLog('Usuário logado(a) com sucesso', 775544);

//exemplo 03
export{}
//exemplo 03

type Pessoa = {
    idFuncionario: number;
    nome: string;
    idade?: number;
    email?: string;
};

let pessoa: Pessoa;
pessoa = {
    idFuncionario: 131415,
    nome: 'Jeovahny Rosa',
};
console.log(pessoa);
