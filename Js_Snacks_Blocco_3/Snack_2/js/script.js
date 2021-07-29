var teamsArray = [
  {
    name:'Palermo',
    score:'0',
    fauls:'0'
  },
  {
    name:'Catania',
    score:'0',
    fauls:'0'
  },
  {
    name:'Messina',
    score:'0',
    fauls:'0'
  }
];
for (var i = 0; i < teamsArray.length; i++) {
  teamsArray[i].score = randomizer (0, 10);
  teamsArray[i].fauls = randomizer (0, 10);
}
console.log(teamsArray);
var teamsNewArray = [];
for (i = 0; i < teamsArray.length; i++ ) {
  var obj = {
    name: teamsArray[i].name,
    fauls: teamsArray[i].fauls
  };
  teamsNewArray.push(obj);
}
console.log(teamsNewArray);
// Function - randomizer
function randomizer (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
