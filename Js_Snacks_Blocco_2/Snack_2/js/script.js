var userNumber = parseInt(prompt('insert a number'));
while(isNaN(userNumber)){
  userNumber = parseInt(prompt('insert a number'));
}
console.log('user\'s number is ' + userNumber);
if ( userNumber % 2 == 0 ) {
  console.log('user\'s number is EVEN');
} else {
  console.log('user\'s number is ODD, so the final result is: ' + ((userNumber) + 1 ));
}
