var userFirstWord = prompt('enter your first word');
while(!isNaN(userFirstWord)){
  userFirstWord = prompt('enter your first word');
}
console.log('the first word you insert is ' + userFirstWord.length + ' characters');
var userSecondWord = prompt('enter your second word');
while(!isNaN(userSecondWord)){
  userSecondWord = prompt('enter your second word');
}
console.log('the second word you insert is ' + userSecondWord.length + ' characters');
if (userFirstWord.length > userSecondWord.length) {
  alert('the shortest word is ' + userSecondWord);
  alert('the longest word is ' + userFirstWord);
} else if (userFirstWord.length < userSecondWord.length) {
  alert('the shortest word is ' + userFirstWord);
  alert('the longest word is ' + userSecondWord);
} else {
  alert('the two words are equal in length');
}
