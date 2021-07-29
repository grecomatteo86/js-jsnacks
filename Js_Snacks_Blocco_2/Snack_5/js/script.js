var array1 = [1,5,90,54,10,34,44,54,78];
var array2 = [35,67,8];
var majArray = [];
var minArray = [];
if (array1.length != array2.length) {
  if(array1.length > array2.length) {
    majArray = array1;
    minArray = array2;
  } else {
    majArray = array2;
    minArray = array1;
  }
  while ( minArray.length < majArray.length) {
    var numeroRandom = Math.floor(Math.random() * 100) + 1;
    minArray.push(numeroRandom);
  }
  console.log(minArray.length,majArray.length);
} else {
  alert('arrays have the same length');
}
