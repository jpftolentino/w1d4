var countdownGenerator = function (x) {
  /* your code here */

  var countdown = x;

  return function(){

    if(countdown > 0){
      console.log('T-minus '+ countdown +"...");
    } else if (countdown === 0){
      console.log('Blast Off!');
    } else {
      console.log('Rockets already gone, bub!');
    }
    countdown -= 1;
    return countdown;
  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!