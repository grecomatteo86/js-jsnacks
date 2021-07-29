var numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var sum = 0;
for ( var i = 0; i < numbersArray.length; i++) {
  if ( numbersArray[i] % 2 == 1 ) {
    sum += i;
  }
}
console.log('the sum of odd numbers is ' + sum);
