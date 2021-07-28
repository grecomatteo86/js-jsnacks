var firstUserNumber = parseInt(prompt('enter the first number'));
while(isNaN(firstUserNumber)){
  firstUserNumber = parseInt(prompt('enter the first number'));
}
console.log('first user number is ' + firstUserNumber);
var secondUserNumber = parseInt(prompt('enter the second number'));
while(isNaN(secondUserNumber)){
  secondUserNumber = parseInt(prompt('enter the second number'));
}
console.log('second user number is ' + secondUserNumber);
if (firstUserNumber > secondUserNumber) {
  alert(firstUserNumber + ' is the highest');
} else if (secondUserNumber > firstUserNumber) {
  alert(secondUserNumber + ' is the highest');
}
else {
  alert(firstUserNumber + ' and ' + secondUserNumber + ' are equal');
}
