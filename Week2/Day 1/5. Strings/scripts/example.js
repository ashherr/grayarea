const originalText = 'Hello, World!';

// get the length of the string
console.log(originalText.length); // Output: 13

// access a character at a specific index
console.log(originalText[0]); // Output: H

// convert string to uppercase
const upperText = originalText.toUpperCase();
console.log(upperText); // Output: HELLO, WORLD!

// convert string to lowercase
const lowerText = originalText.toLowerCase();
console.log(lowerText); // Output: hello, world!

const substringIndex = originalText.indexOf('World');
console.log(substringIndex); // Output: 7

const replacedText = originalText.replace('World', 'JavaScript');
console.log(replacedText); // Output: Hello, JavaScript!

// extract a part of the string using slice
const slicedText = originalText.slice(0, 5);
console.log(slicedText); // Output: Hello

// split the string into an array of words
const words = originalText.split(' ');
console.log(words); // Output: [ 'Hello,', 'World!' ]

// join an array of strings into a single string
const joinedText = words.join(' - ');
console.log(joinedText); // Output: Hello, - World!
