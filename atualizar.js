const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo");
// 1 = índice do elemento que quero remover 
// 2 = quantos elementos quero remover a partir daquele (ana e caio estão um após o outro, então 2)
// aceita um terceiro valor para adicionar no lugar dos que foram removidos

//nomes.push('Rodrigo');


console.log(nomes);