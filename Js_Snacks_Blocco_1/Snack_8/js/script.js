var userNumber = prompt('enter a 4-digit number');
while(isNaN(userNumber) || userNumber == '' || userNumber.length < 4 || userNumber.length > 4){
  userNumber = prompt('enter a 4-digit number');
}
var sum = 0;
for (var i = 0 ; i < userNumber.length; i++) {
sum = sum + parseInt(userNumber[i]);
}
console.log('the sum of numbers you insert is ' + sum);
