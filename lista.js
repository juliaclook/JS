const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias]; 
// [ [ 'João', 'Juliana', 'Ana', 'Caio' ], [ 10, 8, 7.5, 9 ] ]

//console.log(listaDeAlunosEMedias);
console.log(`A aluna da posição 1 da lista de alunos é ${listaDeAlunosEMedias[0][1]}. 
A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}`); // primeiro posição da lista externa e dps interna