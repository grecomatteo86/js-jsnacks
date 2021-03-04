/*
Inserisci un numero,
se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

// 1. chiedo all'utente di inserire un numero
var numero = parseInt(prompt('inserisci un numero'));
console.log('l\'utente ha inserito il numero ' + numero);

// 2. eseguo il controllo
if ( numero % 2 == 0 ) {
  console.log('l\'utente ha inserito un numero pari: ' + numero);
} else {
  console.log('l\'utente ha inserito un numero dispari: ' + ((numero) + 1 ));
}
