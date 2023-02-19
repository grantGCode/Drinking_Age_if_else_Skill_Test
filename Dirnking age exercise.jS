
const person1 = {
  name: "John",
  age: 25,
  isMarried: false
};

const person2 = {
  name: "Jane",
  age: 32,
  isMarried: true
};

const person3 = {
  name: "Jim",
  age: 41,
  isMarried: false
};
delete person1.isMarried
delete person2.isMarried
delete person3.isMarried



function ofAgeDrinking(object){
    let ofAge = 'Allow Alcohal';
if(object.age < 21){
 ofAge = 'Do not Serve Drinks';
};
return object.name + " " + +object.age + " " + ofAge;
};


console.log(ofAgeDrinking(person2)) 


/* function great(greet){ console.log(greet) };
great("cat") */