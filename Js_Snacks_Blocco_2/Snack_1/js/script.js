alert('insert 5 numbers');
var sum = 0;
var i = 0;
// 1. using while cycle
while ( i < 5 ) {
  var userNumberSum = askAndSumNumbers();
  i++;
}
// 2. using do while cycle
/*
do {
  var userNumberSum = askAndSumNumbers();
  i++;
} while (i < 5);
*/
console.log('the sum of the user\'s numbers is ' + sum );
// Function - askAndSumNumbers
function askAndSumNumbers () {
  var userNumber = parseInt(prompt('insert a number'));
  while(isNaN(userNumber)){
    userNumber = parseInt(prompt('insert a number'));
  }
  console.log('the user number is ' + userNumber );
  return sum += parseInt(userNumber);
}
