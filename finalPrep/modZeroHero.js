// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = 'Batman';
var specialAbility = 'Flying';

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = 'Hello there ' + heroName;
var catchPhrase = `Holy ${specialAbility} Batman`;

// Declare two variables - power AND energy - set to integers
var power = 15;
var energy = 100;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ['Mr. Freeze', 'Joker', 'Two-face'];
var sidekicks = ['Robin', 'Catwoman', 'Batgirl'];

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push('The Riddler');

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

function assessSituation (dangerLevel, saveTheDay, badExcuse) {
    if (dangerLevel > 50) {
      console.log(badExcuse);
    } else if (dangerLevel >= 10) {
      console.log(saveTheDay);
    } else {
      console.log('Meh. Hard Pass');
    }
}

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';

//assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: 'Lochness monster',
  smell: 'Putrid',
  weight: 10000,
  citiesDestroyed: ['St. Louis', 'Tokyo', 'Denver'],
  luckyNumbers: [7, 10, 20],
  address: {
    number: 300,
    street: 'Weeping Willow Dr.',
    state: 'MO',
    zip: 63303
  }
}

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = 'The Syntax Error';
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayname() {
    console.log(this.name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower() {
    this.powerLevel = this.powerLevel + 1000;
  }
}

var spiderman = new SuperHero('John', 'Invisibility', 30);
var hulk = new SuperHero('Wayne', 'Strength', 20);

// Reflection
// What parts were most difficult about this exerise?
// The most difficult part for me was remembering all of the syntax rules for classes, objects, etc.  Also, attempting
// to complete the exercies in under 30 minutes was difficult due to researching syntax styles and testing the code to
// make sure it logs to the console correctly.

// What parts felt most comfortable to you?
// I feel comfortable with assigning variables and the concatenation/interpolation of string variables.


// What skills do you need to continue to practice before starting Mod 1?
// I need to continue to practice classes and objects to become more comfortable with them.  I can tell that we will
// be frequently using them going forward and I need to become more familiar with the syntax, arguments and instance methods.
