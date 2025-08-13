const ps = require("prompt-sync");
const prompt = ps();

function trafficLight(){
let color = prompt("Enter red,green or yellow: ")
if(color == "green"){console.log("Go!")}
else if(color == "red"){console.log("Stop!")
}
else if(color == "yellow"){console.log("Wait!")}
else{console.log("Invalid Input!")}
}

console.log(trafficLight());