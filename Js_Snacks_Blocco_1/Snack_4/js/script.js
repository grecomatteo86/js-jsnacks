var guestList = ['Alessio','Clelia','Samuele','Matteo'];
console.log(guestList);
var userName = prompt('write your name');
while(!isNaN(userName)){
  userName = prompt('write your name');
}
var userNameCapitalized = capitalizeFirstLetter(userName);
var result = 0;
console.log('user\'s name is ' + userNameCapitalized);
for ( var i = 0 ; i < guestList.length; i++ ){
  console.log(guestList[i]);
  if (userNameCapitalized == guestList[i]){
    result = 1;
  }
}
if (result == 1) {
  alert('access allowed');
} else {
  alert('access denied');
}
// Function - capitalizeFirstLetter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
