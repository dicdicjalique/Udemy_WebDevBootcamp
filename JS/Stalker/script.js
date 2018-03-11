// Stalker
// var firstName = prompt("What is your first name?");

// var lastName = prompt("What is your last name?");

// var age = prompt("What is your age?");

// console.log("Your name is " + firstName + " " + lastName + ".");
// console.log("You are " + age + " year(s) old.");

// Age Calculator
// var age = prompt("How old are you?");
// var daysAlive = age * 365.25;
// console.log("You have been alive for at least " + daysAlive + " days.");

// Conditionals
var age = prompt("How old are you?");
if (age < 0) {
    console.log("ERROR!");
} else if (age == 21) {
    console.log("Happy 21st birthday!");
} else if (age % 2 != 0) {
    console.log("Your age is odd!");
} else if (age % Math.sqrt(age) == 0) {
    console.log("perfect square!");
}