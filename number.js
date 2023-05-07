//tipo Number

const meuNumero = 3;
const primeiroNumero = 10;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica)

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const PontoFluanteSemZero = .5;

const NovaOperacao = primeiroNumero / numeroPontoFlutuante;
console.log (Math.round(NovaOperacao)) // arrendonda valores pra 2 casas decimais (nesse caso, o valor era mto pequen0)
console.log (NovaOperacao.toFixed(3)) // aredonda o valor pra quantas casas eu definir
console.log(Math.ceil(NovaOperacao)) // retorna o próximo valor inteiro
console.log (Math.floor(NovaOperacao)) // retorna o último valor inteiro

// NaN > Not a Number (não é um número)

const texto = "Alura";
console.log(texto * primeiroNumero) // exemplo de NaN - o JavaScript não reconhece alguma parte como number

// Infinity

var a = 10;
var b = 0;
console.log(a/b) // retorna Infinity, número dividido por 0