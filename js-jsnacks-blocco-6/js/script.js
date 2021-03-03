/*
Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente
*/


// 1. chiedo all'utente di inserire un numero
var numero = prompt('inserisci un numero');

// 2. stampo i cubi dei numeri
for (var i = 1; i <= numero; i++) {
  Math.pow(i, 3);
  console.log(Math.pow(i, 3));
}
