/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

//1. creo gli array con numero elementi diverso
var array1 = ['sedia','tavolo','penna','bottiglia','computer'];
console.log('il primo elenco contiene ' + array1.length + ' oggetti');
console.log(array1);

var array2 = ['orologio','cuffie','libro'];
console.log('il secondo elenco contiene ' + array2.length + ' oggetti');
console.log(array2);

//2. confronto la length dei due array e aggiungo elemento fintantochè:
if ( array1.length > array2.length) {

  do {

    var oggetto = prompt('inserisci un oggetto nell\'elenco che ha meno oggetti');
    array2.push(oggetto);
    console.log('l\'utente ha aggiunto l\'oggetto: ' + oggetto);
    console.log('dopo l\'aggiunta dell\'utente, il secondo elenco è formato da: ' + array2);

  } while (array1.length > array2.length);


}

console.log('adesso il primo elenco contiene ' + array1.length + ' oggetti, mentre il secondo elenco contiene ' + array2.length + ' oggetti');
