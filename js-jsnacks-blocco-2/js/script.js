// l'utente inserisce la prima parola
var parola1 = prompt('inserisci la prima parola');
console.log('la prima parola inserita è lunga ' + parola1.length + ' caratteri');

// l'utente inserisce la seconda parola
var parola2 = prompt('inserisci la seconda parola');
console.log('la seconda parola inserita è lunga ' + parola2.length + ' caratteri');

// stampo la parola più corta e la più lunga
if (parola1.length > parola2.length) {
  alert('la parola più corta è ' + parola2);
  alert('la parola più lunga è ' + parola1);
} else if (parola1.length < parola2.length) {
  alert('la parola più corta è ' + parola1);
  alert('la parola più lunga è ' + parola2);
} else {
  alert('le due parole sono lunghe uguali');
}
