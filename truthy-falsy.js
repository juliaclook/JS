//boolean
const usuarioLogado = true
const contaPaga = false

// truthy ou falsy - não são exatamente booleanos, mas podem se comportar como se fossem
// 0 > false
// 1 > true

/*console.log(0 == false)
console.log("" == false)
console.log(1 == true)*/

// null
// representa vazio/nada

let minhaVar; // não passou valor, por isso é indefinido
let varNull = null;

console.log(minhaVar)
console.log(varNull)

let numero = 3;
let texto = "Alura"

console.log(typeof numero) // typeof = tipo de dado que está sendo armazenado
console.log(typeof texto)

console.log(typeof varNull) // retorna object - 'certo bug'

// undefined