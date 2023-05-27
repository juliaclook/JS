const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10]; // spread operator

//novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`); // [...] 7,7,8,9,10
console.log(`As notas originais são ${notas}`); // [...] 7,7,8,9,10 - 'modifica' o array original 
                                                                    // se n tiver as reticências


// esse comportamento não acontece com strings, números e booleanos, que são tipos primitivos do JavaScript