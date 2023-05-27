const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)){ // confere se inclui o que estamos passando de parametro
        //console.log(`${aluno} está cadastrado!`)
        //const alunos = listaDeAlunosEMedias[0];
        //const medias = listaDeAlunosEMedias[1];

        const [alunos, medias] = listaDeAlunosEMedias; // melhor assim, é a mesma coisa q ta encima

        const indice = alunos.indexOf(aluno); // pega o indice do aluno
        
        const mediaDoAluno = medias[indice];
        console.log(`A média de ${aluno} é ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não encontrado!")
    }
}

exibeNomeENota("Juliana");