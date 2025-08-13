
const ps = require("prompt-sync")
const prompt = ps();

function petChooser(){
let pet = prompt("Enter a pet name: ");

if(pet == "Dog"){console.log("Woof! Dogs are awesome!");}
else{console.log("Cool choice, but i love dogs!");}

}

console.log(petChooser());