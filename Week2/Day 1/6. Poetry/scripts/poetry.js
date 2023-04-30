// Author: Nat Schager
// Poetry Example

let keyword1; // declare variables but leave empty
let keyword2;
let keyword3;

// prompt for keywords until all three are entered
while(keyword1 == null || keyword1.length == 0 || 
      keyword2 == null || keyword2.length == 0 || 
      keyword3 == null || keyword3.length == 0) {
    keyword1 = prompt("Enter keyword 1:");
    keyword2 = prompt("Enter keyword 2:");
    keyword3 = prompt("Enter keyword 3:");
}

// generate haiku (thanks ChatGPT)
const haiku = `${keyword1} whispers\n${keyword2} dances in the wind\n${keyword3} sings softly`;

// show original haiku in an alert
alert(`Original Haiku:\n${haiku}`);

// string manipulation; reverse each word of the line
function reverseWords(line) {
    const words = line.split(" ");
    const reversedWords = words.reverse();
    return reversedWords.join(" ");
}

const haikuLines = haiku.split("\n");

// map() uses the function on each member of the arrat, and 
// returns a new array, so we can chain it with reverse()
let reversedLines = haikuLines.map(reverseWords).reverse(); // reverses words, and reverses order
let manipulatedHaiku = reversedLines.join("\n");

// show manipulated haiku in an alert
alert(`Manipulated Haiku 1:\n${manipulatedHaiku}`);

// string manipulation; reverse each line of the haiku
function reverseString(str) {
    return str.split("").reverse().join("");
}

reversedLines = haikuLines.map(reverseString); // we used let, so can reassign these
manipulatedHaiku = reversedLines.join("\n");

// show manipulated haiku in an alert
alert(`Manipulated Haiku 2:\n${manipulatedHaiku}`);

