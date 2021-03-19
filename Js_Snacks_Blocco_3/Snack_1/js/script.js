/* Creare un array di oggetti:
ogni oggetto descriverà una bici da corsa
con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore */

var arrayBici = [
  {
    nome:'Girardengo',
    peso:'3000'
  },
  {
    nome:'Bianchi',
    peso:'2000'
  },
  {
    nome:'Atala',
    peso:'2400'
  }
];

var pesoRiferimento = arrayBici[0].peso;
console.log(pesoRiferimento);

for (var i = 0; i < arrayBici.length; i++) {



  if (arrayBici[i].peso <  pesoRiferimento ) {

    pesoRiferimento = arrayBici[i].peso;

  }

}

console.log('La bici più leggera pesa ' + pesoRiferimento);
