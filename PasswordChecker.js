const ps = require("prompt-sync");
const prompt = ps();

function passwordChecker(){
let userEntry = prompt("Enter a password: ")
let password === "secret123";

if(password.equalsIgnoreCase("secret123")){
	console.log("Access granted!");
}
else{console.log("Access denied!");}

}

console.log(passwordChecker());