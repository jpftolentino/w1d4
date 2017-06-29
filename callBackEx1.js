/*Modify the callback function in the previous example so that logs
the index of the array where Waldo is found,
ie. "Found Waldo at index 2!". (You will need to modify actionWhenFound to receive the index.)
*/


// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     //passed value of i to pass the index of Waldo
  //     found(i);   // execute callback
  //   }
  // }

    arr.forEach(function(arrValue, index){
      if(arrValue === "Waldo"){
        found(index);
      }
    })
}

//Created a parameter to receive the index of Waldo
function actionWhenFound(index) {
  console.log("Found him at index",index,"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

