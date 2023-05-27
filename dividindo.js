const alunos  = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

//const sala1 = alunos.slice(0, 10);
// pega os alunos do índice 0 ao 9, o 10 é onde finaliza, então não é incluso

const sala1 = alunos.slice (0, alunos.length/2)

//const sala2 = alunos.slice(10);
// se não coloca o 2o parametro, entende q quer dessa posição até o final

const sala2 = alunos.slice(alunos.length/2)

//console.log(alunos); // não modifica o array original

console.log(sala1);
console.log(sala2);