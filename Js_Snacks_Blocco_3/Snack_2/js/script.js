/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare,
le altre saranno tutte settate a 0 */

var arraySquadre = [
  {
    nome:'Palermo',
    puntiFatti:'0',
    falliSubiti:'0'
  },
  {
    nome:'Catania',
    puntiFatti:'0',
    falliSubiti:'0'
  },
  {
    nome:'Messina',
    puntiFatti:'0',
    falliSubiti:'0'
  }
];


/* 2 step: generare numeri random al posto
degli 0 nelle proprietà: Punti fatti e falli subiti */

/* Creo una funzione per generare i numeri random */
function randomizzatore (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


/* Cambio i valori */
for (var i = 0; i < arraySquadre.length; i++) {

  arraySquadre[i].puntiFatti = randomizzatore (0, 10);
  arraySquadre[i].falliSubiti = randomizzatore (0, 10);

}


console.log(arraySquadre);


/* 3 step: Infine creiamo un nuovo array
i cui elementi contengono solo nomi e falli
subiti e stampiamo tutto in console */

var nuovoArray = [];

for (i = 0; i < arraySquadre.length; i++ ) {

  var obj = {

    nome: arraySquadre[i].nome,
    falliSubiti: arraySquadre[i].falliSubiti

  };

  nuovoArray.push(obj);

}

console.log(nuovoArray);
