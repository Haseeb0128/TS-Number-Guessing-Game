#! /usr/bin/env node 
import inquirer from "inquirer";
const randomNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Guess a number between 1 and 10: "
    }
]);
const { userGuess } = answers;
console.log("Your Guess: ", userGuess, " Random number: ", randomNo);
if (userGuess === randomNo) {
    console.log("Cool! Your answer is correct. \nYou Win!");
}
else {
    console.log("Wrong guess! \nBetter luck next time.");
}
