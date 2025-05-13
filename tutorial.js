const prompt = require("prompt-sync")() // Importing the prompt-sync module for user input
//Validate the name input
while (true) {
    const name = prompt("What is your name? ")
    if (name && /^[a-zA-Z]+$/.test(name)) {
        console.log("Hello " + name + ", Welcome to our game! ")
        break;
    } else {
        console.log("Invalid name. Please enter a valid name.")
    }
}
//Validate the shouldWePlay input
let shouldWePlay;
while (true) {
    shouldWePlay = prompt("Do you want to play? (yes/no) ")
    if (shouldWePlay.toLowerCase() === "yes" || shouldWePlay.toLowerCase() === "y" || shouldWePlay.toLowerCase() === "no" || shouldWePlay.toLowerCase() === "n") {
        break;
    } else {
        console.log("Invalid input. Please answer with 'yes' or 'no'.")
    }
}

if (shouldWePlay.toLowerCase() === "yes" || shouldWePlay.toLowerCase() === "y") {
    //Game logic
    const leftOrRight = prompt("You enter a maze, do you want to go left or right? ")
    if (leftOrRight.toLowerCase() === "left" || leftOrRight.toLowerCase() === "l") {
        console.log("You go left and see a bridge")
        const cross = prompt("Do you want to cross the bridge? ")
        if (cross.toLowerCase() === "yes" || cross.toLowerCase() === "y") {
            console.log("You cross but the bridge was weak and broke and you fall, You lost..")
        } else {
            console.log("Good choice, You win")
        }
    } else {
        console.log("You go right and fall off the cliff..")
    }
} else if (shouldWePlay.toLowerCase() === "no" || shouldWePlay.toLowerCase() === "n") {
    console.log("Okay :(")
} else {
    console.log("Invalid input")
}