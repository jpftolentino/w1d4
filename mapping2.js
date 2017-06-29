/*
Implement your own version of the built-in array map function

Map function will take two arguments
first argument: array to map
second argument: callback function
--> function will return a new array
--> based on the results of the call back function
*/

var words = ["ground", "control", "to", "major", "tom"];


function map(arr, callBack){

  var wordLength = [];
  arr.forEach(function(arrValue){ //currValue index array
    wordLength.push(callBack(arrValue));
  })
  console.log(wordLength);
}


map(words, function(word) {
  return word.length;
});
