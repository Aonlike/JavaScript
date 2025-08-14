const ps = require("prompt-sync");
const prompt = ps();

function checkTemperature(){
let temperature = parseFloat(prompt("Enter a temperature: "));
	if(temperature > 30){return"Hot?";}
	else if(temperature >= 15 && temperature <= 30){return "Nice";}
	else {return "Cold";}
}

let result = checkTemperature()
console.log(result);
