// Mark Klingelhoefer
// Magic 8 ball program
// User enters a question and receives a random answer

// Allows program to get user input
const prompt = require("prompt-sync")();

// User inputs name
let userName = prompt('Enter your name: ');
// User inputs question
let userQuestion = prompt('Enter your question: ')

// Prints question back to user and prints their username if they added one
userName ? console.log(`${userName}, you asked '${userQuestion}'`) : console.log(`You asked \'${userQuestion}\'`);

// Generates random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// Initialize eight ball variable
let eightBall = '';

// Switch statement that assigns value to eight ball
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
}

console.log(`My answer: ${eightBall}.`)