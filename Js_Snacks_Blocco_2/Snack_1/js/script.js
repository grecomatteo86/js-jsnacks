/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni:
con il for
e con il while.
*/



/*
// 1. con il ciclo for
var somma = 0;

for ( i = 0; i < 5; i++) {
  var numero = parseInt(prompt('inserisci un numero'));
  console.log('il numero inserito dall\'utente è ' + numero );
  somma = somma + parseInt(numero);

}

console.log('la somma dei numeri inseriti dall\'utente è ' + somma );
*/




/*
// 2. con il ciclo while
var i = 0;
var somma = 0;

while ( i < 5 ) {
  var numero = parseInt(prompt('inserisci un numero'));
  console.log('il numero inserito dall\'utente è ' + numero );
  somma += parseInt(numero);
  i++;
}

console.log('la somma dei numeri inseriti dall\'utente è ' + somma );
*/





// 3. con il ciclo do while
var i = 0;
var somma = 0;

do {

  var numero = parseInt(prompt('inserisci un numero'));
  console.log('il numero inserito dall\'utente è ' + numero );
  somma += parseInt(numero);

  i++;

} while (i < 5);


console.log('la somma dei numeri inseriti dall\'utente è ' + somma );
