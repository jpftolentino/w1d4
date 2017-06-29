var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(obj){

  var pythArr = [];
  pythArr.push(obj.x);
  pythArr.push(obj.y);
  calculateZ = Math.sqrt((obj.x * obj.x) + (obj.y * obj.y));
  pythArr.push(calculateZ);
  //get calculator working first and then out put
  //Math.sqrt((x*x) + (y*y)
  console.log(pythArr[0] + '^2 +' + pythArr[1] + '^2 =' + pythArr[2]);
  return pythArr[2];
});

console.log(result[0] === 5);
// console.log(result[1] === 13);
// console.log(result[2] === 17);