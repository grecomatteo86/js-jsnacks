//Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti
var somma = 0;
//1. chiedo 10 volte all'utente di inserire un numero
for (var i = 0; i < 10; i++){
  var numero = parseInt(prompt('inserisci un numero'));
  console.log(numero);
  somma = somma + numero;
}
//2. stampo la somma di tutti i numero inseriti
console.log(somma);
