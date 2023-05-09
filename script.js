//var - é antiga, caiu em desuso

/*var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area)
var area; // pode-se utilizar a var antes de declara-la, porque o JS le primeiro todas as var antes de executar o código*/

//let - garante consistência, var é mto solto

/*let forma = 'retângulo'
let altura = 5;
let comprimento = 7;
let area;

if(forma === 'retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2
}

//let area; // nesse caso, retorna erro, porque o let só consegue ser utilizado depois de ser declarado

console.log(area)*/

//const - não permite modificação - é fixo

const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area; // vai mexer no valor, retorna erro se for const

if(forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)