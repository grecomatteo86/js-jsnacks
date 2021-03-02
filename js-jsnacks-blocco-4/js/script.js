// 1. scrivo un Array con i nomi degli invitati
var listaInvitati = ['alessio','clelia','samuele','matteo'];
console.log(listaInvitati);

//2. chiedo all’utente il suo nome
var nomeUtente = prompt('scrivi il tuo nome');
var risultato = 0;
console.log('il nome inserito dall\'utente è ' + nomeUtente);

//3. controlla che sia nella lista di chi può accedere
for ( var i = 0 ; i < listaInvitati.length; i++ ){
  console.log(listaInvitati[i]);
  if (nomeUtente == listaInvitati[i]){
    console.log('ok, l\'utente puoi accedere');
    risultato = 1;
  }
}

//4. stampa un messaggio appropriato sull’esito del controllo
if (risultato == 1) {
  alert('puoi accedere');
} else {
  alert('non puoi accedere');
}
