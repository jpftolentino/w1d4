function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  counter = -1;
  /* your code here */

  return function() {
    /* your code here */
    counter += 1;
    return list[counter];
    }

   //return Math.floor(1 + Math.random() * 6);
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6