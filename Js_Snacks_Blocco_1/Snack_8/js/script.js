/*
Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
*/

var numero = prompt('inserisci un numero di 4 cifre');
// console.log(numero[0]);

var somma = 0;

for (var i = 0 ; i < numero.length; i++) {

somma = somma + parseInt(numero[i]);

}

console.log(somma);
