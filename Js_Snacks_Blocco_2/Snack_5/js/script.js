/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

//1. creo gli array con numero elementi diverso
var array1 = [1,5,90,54,10,34,44,54,78];
var array2 = [35,67,8];

var majArray = [];
var minArray = [];

//2. faccio un controllo per determinare l'array più lungo

if (array1.length != array2.length) {

  if(array1.length > array2.length) {

    majArray = array1;
    minArray = array2;

  } else {

    majArray = array2;
    minArray = array1;

  }

  //3. vado a fare il push nell'array piu corto
  while ( minArray.length < majArray.length) {

    var numeroRandom = Math.floor(Math.random() * 100) + 1;
    minArray.push(numeroRandom);

  }

  //4. stampo il risultato
  console.log(minArray.length,majArray.length);

} else {
  alert('gli array hanno la stessa lunghezza');
}
