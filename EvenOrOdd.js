const ps = require("prompt-sync");
const prompt = ps();

function EvenOrOdd(){
	let userInput = prompt("Enter a number: ");
	if(userInput % 2 == 0){console.log("Even!")}
	else{console.log("Odd!")}
}

console.log(EvenOrOdd());
