/*
Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di 3 invitati.
*/

//1. creo un array di nomi
var nomi = ['Franco','Ciccio','Pino'];
console.log('i nomi in elenco sono: ' + nomi);

//2. creo un array di cognomi
var cognomi = ['Verdi','Bianchi','Rossi'];
console.log('i cognomi in elenco sono: ' + cognomi);

//3. creo un array vuoto in cui andrò a mettere con le combinazioni di nomi e cognomi
var nomiCognomiRandom = [];

//4. genero le combinazioni di nomi e cognomi e le inserisco dentro l'array vuoto
for ( var i = 0; i < 3; i++) {

  var nomeRandom = Math.floor(Math.random() * nomi.length);

  var cognomeRandom = Math.floor(Math.random() * cognomi.length);

  var sommaNomeCognomeRandom = nomi[nomeRandom] + cognomi[cognomeRandom];

  nomiCognomiRandom.push(sommaNomeCognomeRandom);


}

console.log('la lista di nomi e cognomi random è: ' + nomiCognomiRandom);
