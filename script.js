function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// parent class
class Fighter {
  constructor(name) {
    this.name = name;
    this.healthPoint = 15;
  }

  // both have attack
  attack(target) {
    let attackPoints = randomNum(1, 6);
    target.healthPoint = target.healthPoint - attackPoints;
    return `${this.name} attacked ${target.name}! ${this.name} did ${attackPoints} damage. ${target.name} has ${target.healthPoint} health points left`;
  }
}
let myFighter = new Fighter("robert");

class Monster extends Fighter {
  constructor(name, superPower) {
    super(name);
    this.superPower = superPower;
  }
}

let vampire = new Monster("vampire", "slash with claws");
console.log(vampire);

class Hero extends Fighter {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
  }
}

let knight = new Hero("knight", "gun");

function playRound() {
  //use randomNum to return either 0 or 1
  let tempNum = randomNum(0, 2);

  //0 = player goes first, 1 = monster goes first

  //use if/else to determine who goes first

  //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack

  if (!tempNum) {
    knight.attack(vampire);
    if (vampire.healthPoint > 0) {
      vampire.attack(knight);
    }
  }
  //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack
  else if (tempNum) {
    vampire.attack(knight);
    if (knight.healthPoint > 0) {
      knight.attack(vampire);
    }
  }
}

function playGame() {
  //beginning game message
  alert(
    `Hello, ${knight.name}! You are fighting ${vampire.name}! Your health is at ${knight.healthPoint}, ${vampire.name}'s health is at ${vampire.healthPoint}`
  );

  let roundNumber = 0;

  //while loop that runs until player or monster's health is <= 0
  //add the condition in the while loop parentheses
  while (knight.healthPoint > 0 && vampire.healthPoint > 0) {
    roundNumber++;
    //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
    alert(`Round ${roundNumber}!!! `);
    alert(
      `${knight.name} current health is ${knight.healthPoint} and ${vampire.name} current health is ${vampire.healthPoint}`
    );

    //call playRound inside the while loop
    playRound();
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message

  if (knight.healthPoint > 0) {
    alert(`${knight.name} Won !!!`);
  } else if (vampire.healthPoint > 0) {
    alert(`${vampire.name} Won !!!`);
  }
}
playGame();

// //global variables, can be accessed by all functions

// //declare a variable named playerName that stores the value the player enters from a prompt
// const playerName = prompt("Enter your name: ");
// //declare a variable named playerHealth and set it equal to the number value 15
// let playerHealth = 15;
// //assign a name of a monster (ex 'vampire') as a string to a variable named monsterName
// const monsterName = "vampireMan";
// //declare a variable named monsterHealth and set it equal to the number value 15
// let monsterHealth = 15;
// //random integer function

// //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// function playerAttack() {
//   //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named playerAttackPoints
//   let playerAttackPoints = randomNum(1, 6);
//   //subtract playerAttackPoints from monsterHealth and update the monsterHealth variable
//   monsterHealth = monsterHealth - playerAttackPoints;
//   //use an alert with string template literals to tell the player:
//   // 1. player attacked monster
//   // 2. how much damage the player did
//   // 3. how much health the monster has

//   alert(`${playerName} attacked ${monsterName}`);
//   alert(`${playerName} did ${playerAttackPoints} damage to ${monsterName}`);
//   alert(`${monsterName} has ${monsterHealth} left`);
// }

// function monsterAttack() {
//   //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named monsterAttackPoints
//   let monsterAttackPoints = randomNum(1, 6);
//   //subtract monsterAttackPoints from playerHealth and update the playerHealth variable
//   playerHealth = playerHealth - monsterAttackPoints;
//   //use an alert with string template literals to tell the player:
//   // 1. monster attacked player
//   // 2. how much damage the monster did
//   // 3. how much health the player has
//   alert(`${monsterName} attacked ${playerName}`);
//   alert(`${monsterName} did ${monsterAttackPoints} damage to ${playerName}`);
//   alert(`${playerName} has ${playerHealth} left`);
// }

// function playRound() {
//   //use randomNum to return either 0 or 1
//   let tempNum = randomNum(0, 2);

//   //0 = player goes first, 1 = monster goes first

//   //use if/else to determine who goes first

//   //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack

//   if (tempNum === 0) {
//     playerAttack();
//     if (monsterHealth > 0) {
//       monsterAttack();
//     }
//   }
//   //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack
//   else if (tempNum === 1) {
//     monsterAttack();
//     if (playerHealth > 0) {
//       playerAttack();
//     }
//   }
// }

// function playGame() {
//   //beginning game message
//   alert(
//     `Hello, ${playerName}! You are fighting ${monsterName}! Your health is at ${playerHealth}, ${monsterName}'s health is at ${monsterHealth}`
//   );

//   let roundNumber = 0;

//   //while loop that runs until player or monster's health is <= 0
//   //add the condition in the while loop parentheses
//   while (playerHealth > 0 && monsterHealth > 0) {
//     roundNumber++;
//     //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
//     alert(`Round ${roundNumber}!!! `);
//     alert(
//       `${playerName} current health is ${playerHealth} and ${monsterName} current health is ${monsterHealth}`
//     );

//     //call playRound inside the while loop
//     playRound();
//   }
//   //outside of while loop, declare a winner and use alert to show a win or lose message

//   if (playerHealth > 0) {
//     alert(`${playerName} Won !!!`);
//   } else if (monsterHealth > 0) {
//     alert(`${monsterName} Won !!!`);
//   }
// }
// playGame();
// //call playGame to start game
