const readline = require('readline-sync');

// 1. Prompt for user's name and greet them
const userName = readline.question("What's your name? ");
console.log(`Hello, ${userName}! Let's test your knowledge of values, data types, and operations.`);

// 2. Ask 5 questions
const q1 = readline.question("1. What data type is used to store true or false values? ");
const q2 = readline.question("2. What symbol is used for addition in JavaScript? ");
const q3 = readline.question("3. What is the result of '5' + 3 in JavaScript? ");
const q4 = readline.question("4. What keyword is used to declare a variable in JavaScript? ");
const q5 = readline.questionInt("5. What is 7 multiplied by 6? (Enter a number) ");

// 3. Print the user's answers
console.log("\nThanks for your answers! Here's what you said:");
console.log(`1. Boolean type: ${q1}`);
console.log(`2. Addition symbol: ${q2}`);
console.log(`3. Result of '5' + 3: ${q3}`);
console.log(`4. Variable declaration keyword: ${q4}`);
console.log(`5. 7 x 6 = ${q5}`);
