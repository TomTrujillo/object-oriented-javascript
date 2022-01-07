const Tom = {
  name: 'Tom',
  age: 33
}

console.log(Tom);
console.log(Tom.age);

// Person constructor
function Person(name, dob){
  this.name = name;
  // this.age = age;
  this.bday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.bday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
// const tom = new Person('Tom', 99);
// const john = new Person('John', 88);

//  console.log(john);

const tom = new Person('Tom', '8/8/1980');
console.log(tom.calculateAge());