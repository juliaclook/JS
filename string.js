const texto1 = 'Olá, mundo!';
const texto2 = "Olá, mundo!"; // não existe diferença, ambos são string

const senhaSegura = 'senhaSuperSegura256!'; 
const StringNumeros = '34567';

const citacao = 'Meu nome é '; // pode ser utilizado para conseguir diferenciar a citação
                              // funciona pros dois lados
const meuNome = 'Julia'
//console.log(citacao)

// concatenação (+)

console.log(citacao + meuNome)

// para saber mais

const cidade = 'belo horizonte'
const input = 'Belo Horizonte'
console.log(cidade === input) // retorna false, porque existe diferença (mesmo que mínima)

const inputMinusculo = input.toLowerCase(); // função para deixar tudo minúsculo
console.log(cidade === inputMinusculo) // retorna true, por conta da função

const senha = 'minhaSenha123';
console.log(senha.length) // retorna a qtde de caracteres da string
                        // length é propriedade, por isso não precisa de ()

// template string OU template literal