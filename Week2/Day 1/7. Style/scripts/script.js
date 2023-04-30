// Configuration Constants / Simulation parameters (UPPER_CASE)
const MAX_SPEED = 100;

// Class (UpperCamelCase)
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.speed = 0;
    }

    accelerate(amount) {
        this.speed += amount;
        if (this.speed > MAX_SPEED) {
            this.speed = MAX_SPEED;
        }
    }
}

// Variables (lowerCamelCase)
const myCar = new Vehicle('Toyota', 'Camry');

function greetPerson(personName) {
    console.log('Hello, ' + personName);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Functions (lowerCamelCase)
function greetDriver(driverName) {
    return 'Hello, ' + driverName;
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// List of three proper noun names
const names = ['John', 'Jane', 'Jill'];

let name = getRandomElement(names);
console.log(greetDriver(name)); // Output: Hello, John
myCar.accelerate(50);
console.log(myCar.speed); // Output: 50