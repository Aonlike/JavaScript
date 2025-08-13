const ps = require("prompt-sync")
const prompt = ps();

function favoriteNumber(){
const favoriteNumber = 7;

	let guess = prompt("Guess a number: ");
	if(guess == favoriteNumber){console.log(“That’s my favorite number!”);}
	else{console.log( “Nice try, guess 
	again!”);}
}

console.log(favoriteNumber());

