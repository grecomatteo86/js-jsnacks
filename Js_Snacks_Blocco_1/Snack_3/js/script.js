alert('insert 10 numbers');
var sum = 0;
for (var i = 0; i < 10; i++){
  var userNumber = parseInt(prompt('insert a number'));
  while(isNaN(userNumber)){
    userNumber = parseInt(prompt('insert a number'));
  }
  console.log(userNumber);
  sum = sum + userNumber;
}
console.log('the sum of user\'s number is ' + sum);
