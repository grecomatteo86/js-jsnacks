// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.


// l'utente inserisce il primo numero
var numero1 = parseInt(prompt('inserisci il primo numero'));
console.log('l\'utente ha inserito come primo numero il ' + numero1);

// l'utente inserisce il secondo numero
var numero2 = parseInt(prompt('inserisci il secondo numero'));
console.log('l\'utente ha inserito come secondo numero il ' + numero2);

// stampo il maggiore
if (numero1 > numero2) {
  alert(numero1);
} else if (numero2 > numero1) {
  alert(numero2);
}
else {
  alert('i numeri sono uguali');
}
