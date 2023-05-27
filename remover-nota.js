const notas = [10, 6, 8, 5.5, 10];

notas.pop(); // remove o último valor

console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`É média é ${media}.`);

// outros métodos do array
// https://cursos.alura.com.br/course/javascript-arrays/task/114479