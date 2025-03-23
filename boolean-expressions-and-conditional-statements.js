/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}


console.log(`\nAfter arriving to the ${choice}, you see two items on the ground: a sword and a compass.`);
const itemChoice = readline.question("Which item do you pick up? Type 'sword' or 'compass': ");

let hasSword = false
let hasCompass = false

if (itemChoice === "sword") {
  hasSword = true;
  console.log("You picked up the sword. You are prepared for any enemies that may cross your path.")
} else if (itemChoice === "compass") {
  hasCompass = true;
  console.log("You picked up the compass. It leads you in a new direction.")
} else {
  console.log("You left both items behind.")
} 

console.log("\nYou continue your journey...");

if ((choice === "mountains" && hasSword) || (choice === "village" && hasCompass)) {
  console.log("Your preparation pays off! You overcome the obstacles ahead and reach your destination safely.");
} else if (choice === "village" && !hasCompass && !hasSword) {
  console.log("Without any tools, you're unsure where to go next and wander in circles.");
} else if (choice === "mountains" && !hasSword) {
  console.log("Without a weapon, you're defenseless against the mountain beasts. Better luck next time.");
} else {
  console.log("Your journey ends in uncertainty... but you gained experience for the next one!");
}
/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/