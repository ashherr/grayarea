// Create an array of numbers
const numbers = [5, 1, 9, 3, 6, 4];

// Add an element to the end of the array using push
numbers.push(7);
console.log(numbers); // Output: [ 5, 1, 9, 3, 6, 4, 7 ]

// Remove the last element from the array using pop
const lastElement = numbers.pop();
console.log(lastElement); // Output: 7
console.log(numbers); // Output: [ 5, 1, 9, 3, 6, 4 ]

// Add an element to the beginning of the array using unshift
numbers.unshift(2);
console.log(numbers); // Output: [ 2, 5, 1, 9, 3, 6, 4 ]

// Remove the first element from the array using shift
const firstElement = numbers.shift();
console.log(firstElement); // Output: 2
console.log(numbers); // Output: [ 5, 1, 9, 3, 6, 4 ]

// Reverse the array using reverse
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // Output: [ 4, 6, 3, 9, 1, 5 ]

// Sort the array using sort
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [ 1, 3, 4, 5, 6, 9 ]

// Filter the array using filter
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [ 4, 6 ]

// Map the array using map
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // Output: [ 8, 12, 6, 18, 2, 10 ]

// Reduce the array using reduce
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 28
