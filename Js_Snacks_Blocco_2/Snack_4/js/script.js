/*
 Crea un array di numeri interi
 e fai la somma di tutti i numeri dispari
*/


var numeri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var somma = 0;

/*
for (i = 0; i < numeri.length; i++) {

  if (numeri[i] % 2 == 1) {
    somma += numeri[i];
  }

}

console.log('la somma dei numeri dispari è ' + somma);
*/



// Fai la somma di tutti gli elementi che sono in posizione dispari


for ( var i = 0; i < numeri.length; i++) {

  if ( i % 2 == 1 ) {

    somma += i;

  }

}

console.log('la somma dei numeri in posizione dispari è ' + somma);
