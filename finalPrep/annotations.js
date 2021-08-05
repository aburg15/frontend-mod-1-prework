// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//Declaring new function named 'buildABear' with the paramaters (name, age, fur, clothes, specialPower)
function buildABear(name, age, fur, clothes, specialPower) {
//Declaring a variable named greeting with a string data type containing interpolation
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
//Declaring a variable named demographics with an array data type.
  var demographics = [name, age];
//Declaring a variable named powerSaying with a string data type containing concatenation
  var powerSaying = "Did you know that I can " + specialPower + " ?";
//Declaring a variable named builtBear with an object data type.
  var builtBear = {
//A key-value pair with a key value of basicInfo and pair value of demographics
    basicInfo: demographics,
//A key-value pair with a key value of clothes and pair value of fur
    clothes: clothes,
//A key-value pair with a key value of exterior and pair value of fur
    exterior: fur,
//A key-value pair with a key value of cost and pair value of 49.99
    cost: 49.99,
//A key-value pair with a key value of sayings and an array pair value
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
//A key-value pair with a key value of isCuddly and pair value of true
    isCuddly: true,
  };
//The execution of the function is stopped.  builtBear is returned to the function caller
  return builtBear
}

//Building a bear named Fluffy and assigning values to the buildABear function
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//Building a bear named Sleepy and assigning values to the buildABear function
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');


//FizzBuzz
//Declaring new function named fizzBuzz withe the parameters (num1, num2, range)
function fizzBuzz(num1, num2, range) {
//Declaring a for loop for the parameters
  for (var i = 0; i <= range; i++) {
//If num1 and num2 are even, then log fizzbuzz to the console
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
//If num1 is even, then log fizz to the console
    } else if (i % num1 === 0) {
      console.log('fizz');
//If num2 is even, then log buzz to the console
    } else if (i % num2 === 0) {
      console.log('buzz');
//If none of the above if statements are true, then print 'i'
    } else {
      console.log(i);
    }
  }
}

//Assigning values to the parameters of the fizzBuzz function
fizzBuzz(3, 5, 100);
////Assigning values to the parameters of the fizzBuzz function
fizzbuzz(5, 8, 400);
