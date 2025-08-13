const ps = require("prompt-sync")
const prompt = ps();

function Robot(){

let name = prompt("what's your name?")

if(name === "Alex"){console.log("Hello, friend");}
  else{console.log("Hi, stranger!");}
}

console.log(Robot());