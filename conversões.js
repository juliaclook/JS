//tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456";

//console.log(numero === numeroString) retorna false
console.log(numero == numeroString) // retorna true - converte um deles para que tenham o mesmo tipo de dados

console.log(numero + numeroString) // retorna 456456

//conversão explícita
// Number()
// String()

console.log(numero + Number(numeroString)) // retorna 912
// pode ser definido na variável ou no console.log
// se houver algum caracter que não seja número na variável q vai ser convertida, retorna NaN
const numeroSN = '456a'

console.log(numero + Number(numeroSN))