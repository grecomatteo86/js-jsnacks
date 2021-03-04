/*
 Crea un array di numeri interi
 e fai la somma di tutti gli elementi che sono in posizione dispari
*/

/*
var numeri = [1,2,3,4,5,6,7,8,9];
console.log(numeri);

somma = 0;

for ( var i = 0; i < numeri.length; i++) {

  if ( numeri[i] % 2 == 0 ) {

    somma += numeri[i];

    console.log(somma);

  }

}
*/

var numeri = [1,2,3,4,5,6,7,8,9];
console.log('dentro l\'elenco ci sono i seguenti numeri: ' + numeri);

somma = 0;

for ( var i = 0; i < numeri.length; i++) {

  if ( numeri.indexOf(numeri[i]) % 2 == 0 ) {

    somma += numeri.indexOf(numeri[i]) ;

    console.log(somma);

  }

}

console.log('la somma dei numeri in posizione dispari è: ' + somma);

// console.log(numeri.indexOf(numeri[i]));
// console.log(numeri.indexof(posizioneDispari));
