var userNumber = prompt('insert a number and I\'ll print the cube');
while(isNaN(userNumber) || userNumber == ''){
  userNumber = prompt('insert a NUMBER');
}
for (var i = 1; i <= userNumber; i++) {
  Math.pow(i, 3);
  console.log(Math.pow(i, 3));
}
