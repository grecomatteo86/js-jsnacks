/*Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array.*/

// creo un array vuoto
var container = [];
// chiedo all'utente di inserire per 6 volte un numero
for ( var i = 1; i <=6; i++) {
  var numero = parseInt(prompt('inserisci un numero'));
  console.log(numero);
  // se il numero è dispari lo inserisco nell'array
  if(numero % 2 == 1){
    container.push(numero);
  }
}
// stampo l'array
console.log(container);
