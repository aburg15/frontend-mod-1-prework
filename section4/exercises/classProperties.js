/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {

}

var dogBreed = new Dog();
var dogColor = new Dog();

console.log(dogBreed);
console.log(dogColor);

// Prompt 2: Snack
class Snack {

}

var chips = new Snack();
var soda = new Snack();

console.log(chips);
console.log(soda);

// Prompt 3: Shirt
class Shirt {

}

var shirtBrandNike = new Shirt();
var shirtBrandAdidas = new Shirt();

console.log(shirtBrandNike);
console.log(shirtBrandAdidas);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Dogs {
  constructor() {
    this.breed = 'lab';
    this.gender = 'female';
    this.age = 2;
  }
}

var labradorRetreiver = new Dogs();
console.log(labradorRetreiver);

// Prompt 2: Snack

class Snacks {
  constructor() {
    this.chip = 'lays';
    this.candyBar = 'snickers';
    this.numberOfSnacks = 3;
  }
}

var snackChoice = new Snacks();
console.log(snackChoice);

// Prompt 3: Shirt

class Shirts {
  constructor() {
    this.brand = 'nike';
    this.size = 'large';
    this.color = 'black';
  }
}

var shirtChoice = new Shirts();
console.log(shirtChoice);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Puppies {
  constructor(dogName, dogColor, breedType) {
    this.name = dogName;
    this.color = dogColor;
    this.type = breedType;
  }
}

var dogObject1 = new Puppies('Sally', 'yellow', 'english');
console.log(dogObject1);

// Prompt 2: Snack
class SnackTime {
  constructor(snackJerky, snackTwix, snackCheese) {
    this.jerky = snackJerky;
    this.twix = snackTwix;
    this.cheese = snackCheese;
  }
}

var snackObject1 = new SnackTime('slim jim', 'snickers', 'cheddar')
console.log(snackObject1);

// Prompt 3: Shirt
class Tshirt {
  constructor(shirtGucci, shirtLouisVitton, shirtPrada) {
    this.gucci = shirtGucci;
    this.louisVitton = shirtLouisVitton;
    this.prada = shirtPrada;
  }
}

var shirtObject1 = new Tshirt('FILA', 'American Eagle', 'Hollister')
console.log(shirtObject1);
