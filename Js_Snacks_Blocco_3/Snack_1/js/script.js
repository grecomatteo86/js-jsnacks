var bikesArray = [
  {
    name:'Girardengo',
    weight:'3000'
  },
  {
    name:'Bianchi',
    weight:'2000'
  },
  {
    name:'Atala',
    weight:'2400'
  }
];
var referenceWeight = bikesArray[0].weight;
console.log(referenceWeight);
for (var i = 0; i < bikesArray.length; i++) {
  if (bikesArray[i].weight <  referenceWeight ) {
    referenceWeight = bikesArray[i].weight;
  }
}
console.log('the lightest bike weighs ' + referenceWeight);
