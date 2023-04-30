// global scope
let globalLet = 'Global let';
var globalVar = 'Global var';

function exampleFunction() {
  // function scope
  let functionLet = 'Function let';
  var functionVar = 'Function var';

  // arbitrary scope
  {
    // block scope
    let blockLet = 'Block let';
    var blockVar = 'Block var';

    console.log(globalLet); // output: Global let
    console.log(globalVar); // output: Global var
    console.log(functionLet); // output: Function let
    console.log(functionVar); // output: Function var
    console.log(blockLet); // output: Block let
    console.log(blockVar); // output: Block var
  }

  console.log(globalLet); // output: Global let
  console.log(globalVar); // output: Global var
  console.log(functionLet); // output: Function let
  console.log(functionVar); // output: Function var
  // console.log(blockLet); // error: blockLet is not defined
  console.log(blockVar); // output: Block var
}

exampleFunction();

console.log(globalLet); // output: Global let
console.log(globalVar); // output: Global var
// console.log(functionLet); // error: functionLet is not defined
// console.log(functionVar); // error: functionVar is not defined
// console.log(blockLet); // error: blockLet is not defined
// console.log(blockVar); // error: blockVar is not defined