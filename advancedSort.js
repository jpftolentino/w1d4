//sort in alphabetical order
// if student have the same name sort by age
//older student first

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

//sort by alphabetical order first
students.sort(function (a,b){
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  //don't switch
  if(nameA < nameB){
    return -1;
  }

  //switch names
  if(nameA > nameB){
    return 1;
  }


  //if names equal
  if(nameA == nameB){
    //switch by the difference of age
    return b.age - a.age;
  }
});

console.log(students);