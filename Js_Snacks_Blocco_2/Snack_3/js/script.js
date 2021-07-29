var namesArray = ['Franco','Ciccio','Pino'];
console.log('the name\'s list is: ' + namesArray);
var lastnamesArray = ['Verdi','Bianchi','Rossi'];
console.log('the lastname\'s list is: ' + lastnamesArray);
var randomArray = [];
for ( var i = 0; i < 3; i++) {
  var randomName = Math.floor(Math.random() * namesArray.length);
  var randomLastname = Math.floor(Math.random() * lastnamesArray.length);
  var randomSum = namesArray[randomName] + ' ' + lastnamesArray[randomLastname];
  randomArray.push(randomSum);
}
console.log('the random names list is: ' + randomArray);
