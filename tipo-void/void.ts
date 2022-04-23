function logError(errorMessage: string){
   console.log(errorMessage)
 // return errorMessage
}

logError('Required field = Name!')

//exempo 02 - Funçôes

function logErrorExample2(errorMessage: string): void {
    console.log('errorMessage');
}

logErrorExample2('Required field - Surname');

//exemplo 02 - exemplo void em variáveis

let variavelExemploVoid :  void;
//variavelExemploVoid = 1;
variavelExemploVoid = null;
 variavelExemploVoid = undefined;

console.log(variavelExemploVoid);