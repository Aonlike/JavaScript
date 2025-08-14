const ps = require("prompt-sync");
const prompt = ps();

function MagicNumber(){
	let magicNumber = 42;
	let userInput = prompt("Enter a number: ")
	if(userInput == "42"){console.log("You found the magic number!");}
	else{console.log("Keep looking")}
}

MagicNumber()