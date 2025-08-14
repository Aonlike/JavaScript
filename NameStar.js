const ps = require("prompt-sync");
const prompt = ps();

function NameStar() {
    const name = prompt("Enter your name: ");
    const line = `${name}! ${name}! ${name}!`;

    for (let star = 0; star < 3; star++) {
        console.log(line);
    }
}

NameStar()
