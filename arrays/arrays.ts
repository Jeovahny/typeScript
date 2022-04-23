//uso de colchetes
let frutas: string[] =[ '🍒', '🍓', '🍅', '🍆' , '🍏'];
console.log(frutas[2])

//array object
let frutas1: Array<string> =[ '🍒', '🍓', '🍅', '🍆' , '🍏'];
console.log(frutas1[4])

//adicionando mais strings com o método push
 let idiomas: Array<string> =['português', 'espanhol', 'italiano', 'francês'];
console.log(idiomas);
idiomas.push('Mandarin')
console.log(idiomas)
idiomas.push('japonês')
console.log(idiomas)

//adicionando mais strings com o método length
let idiomas1: Array<string> =['português', 'espanhol', 'italiano', 'francês'];
console.log(idiomas1.length)


//exemplo de array com Spread Operator

let listaNumeros = [0, 1, 2, 3, 4 ,5]
listaNumeros = [...listaNumeros, 6, 7 ,8 ,9 , 10, 11]
console.log(listaNumeros);

//exemplo de array com laço de iteração

let linguagensArray: Array<string> = ['JavaScript', 'Phyton', 'PHP', 'Java', 'C#']
function funcaoLinguagens(linguagens:string[]){
    for (let i = 0; i < linguagens.length;i++) {
        console.log(linguagensArray[i])
    }}

    funcaoLinguagens(linguagensArray);
    