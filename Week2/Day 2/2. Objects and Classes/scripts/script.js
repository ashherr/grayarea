// This is an object with functions
const pet = {
    name: 'Fido',
    species: 'dog',
    numTreats: 0,
    howManyTreats: function() { // 'decomposing' since we use this snippet twice
        console.log(`The ${this.species} named ${this.name} has ${this.numTreats} treats.`);
    },
    giveTreat: function() {
        this.numTreats++;
        this.howManyTreats(); 
    },
    eatTreat: function() {
        this.numTreats--;
        this.howManyTreats();
    },
}

// But what if you want to make several objects? You can use a class.
// This is a 'blueprint' for a person object
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
  getOlder() {
    this.age++; // :'(
  }
}
 
// these are objects, and instances of the class Person
const john = new Person('John', 30);
john.sayHello();
const sally = new Person('Sally', 25);
sally.sayHello();