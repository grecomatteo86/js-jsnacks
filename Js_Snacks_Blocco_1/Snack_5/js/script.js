alert('now I ask you to insert six numbers')
var oddNumbersArray = [];
for ( var i = 1; i <=6; i++) {
  var userNumber = parseInt(prompt('insert a number'));
  while(isNaN(userNumber)){
    userNumber = parseInt(prompt('insert a number'));
  }
  console.log(userNumber);
  if(userNumber % 2 == 1){
    oddNumbersArray.push(userNumber);
  }
}
console.log(oddNumbersArray);
