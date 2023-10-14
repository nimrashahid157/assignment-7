


            // CHAPTER NO:1


/*
           Practice exercise 1.1

1. Open the browser console, type 4 + 10, and press Enter. What do you see as
the response?*/

console.log(4 + 10);




/*
2. Use the console.log() syntax, placing a value within the rounded brackets.
Try entering your name with quotes around it. */


console.log("nimra");


/*
    Practice exercise 1.4

1. Add a new statement to your JavaScript code by setting a variable value.
Since we will cover this in the next chapter, you can use the following line:
let a = 10;*/

 let a = 10;
        console.log("Hello, World!");
        console.log("The value of variable a is: " + a);


/*2. Add a comment at the end of the statement indicating that you set a value of
10. */

let b = 10; // Set the value of variable 'a' to 10
console.log("Hello, World!");
console.log("The value of variable a is: " + b);


/*
3. Print the value using console.log(). Add a comment explaining what this
will do. */


let c = 10; // Set the value of variable 'a' to 10
        console.log("Hello, World!"); // Log "Hello, World!" message to the console
        console.log("The value of variable a is: " + c); // Log the value of variable 'a' along with a message to the console
   

/*
4. At the end of your JavaScript code, use a multiple-line comment. In a real
production script, you might use this space to add a brief outline of the
purpose of the file.*/


let name = "nimra";
let age = 21;
let canCodeJavaScript = true;

console.log(`My name is ${name}. I am ${age} years old. Can I code in JavaScript? ${canCodeJavaScript}`);
//   This script demonstrates the usage of variables and template literals in JavaScript.
//   It includes variables for name, age, and a boolean flag indicating the ability to code in JavaScript.
//   The script constructs a sentence using these variables and logs it to the console.




/* 
Chapter 1 project

1. In the JavaScript file, output your name into the console and add a multiple-
line comment to your code. */


// This is a multiline comment
console.log("nimra");


/*
2. Try commenting out the console message in your JavaScript file so that
nothing shows in the console.  */
                            //   ANSWER
// This is a multiline comment
// JavaScript code
// console.log("nimra"); // Output the name "nimra" to the console (commented out)


                        /*  CHAPTER NO: 2 */

/* Practice exercise 2.1
What are the types of these variables listed below? Verify this with typeof and
output the result to the console:
let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000; */

let str1 = 'laurence';
let str2 = 'svekis';
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(typeof str1); 
console.log(typeof str2); 
console.log(typeof val1); 
console.log(typeof val2); 
console.log(typeof myNum);




/* 
Practice exercise 2.2

Create a variable for your name, another one for your age, and another one for
whether you can code JavaScript or not.
Log to the console the following sentence, where name, age and true/false are
variables: */


let fullname = "nimra";
let myage = 21;
let IcanCodeJavaScript = true; 
console.log(`My name is ${name}. I am ${age} years old. Can I code in JavaScript? ${IcanCodeJavaScript}`);






/*
Practice exercise 2.3

Write some code to calculate the hypotenuse of a triangle using the Pythagorean
theorem when given the values of the other two sides. The theorem specifies that the
relation between the sides of a right-angled triangle is a2
+ b2
= c2
. */



function calculateHypotenuse(a, b) {
    // Calculate the square of sides 'a' and 'b'
    let aSquared = a * a;
    let bSquared = b * b;

    // Calculate the square root of the sum of squares of 'a' and 'b' to get the hypotenuse 'c'
    let hypotenuse = Math.sqrt(aSquared + bSquared);

    return hypotenuse;}

// Example usage
let side1 = 3; // Length of the first side of the triangle
let side2 = 4; // Length of the second side of the triangle

let hypotenuse = calculateHypotenuse(side1, side2);
console.log("Hypotenuse of the triangle:", hypotenuse);




/*
Practice exercise 2.4

Create variables for three numbers: d, e, and f. Update these variables with the
following actions using the assignment operators:
• Add e to d
• Divide d by f
• Replace the value of f with the modulus of f and e
• Print all three numbers to the console */



// Initialize variables for three numbers: d, e, and f
let d = 10;
let e = 5;
let f = 3;

// Update variables using assignment operators
d += e; // Add e to d
d /= f; // Divide d by f
f %= e; // Replace the value of f with the modulus of f and e

// Print all three numbers to the console
console.log("Updated value of d:", d);
console.log("Updated value of e:", e);
console.log("Updated value of f:", f);



/*
Chapter 2 project

1. Create a variable that contains a value in miles, convert it to kilometers, and log the
value in kilometers in the following format:
The distance of 130 kms is equal to 209.2142 miles

For reference, 1 mile equals 1.60934 kilometers. */



let miles = 130;
const milesToKilometers = 1.60934;
let kilometers = miles * milesToKilometers;
console.log(`The distance of ${kilometers.toFixed(4)} kms is equal to ${miles} miles`);




/*
2. Set values for height in inches and weight in pounds, then convert the values to
centimeters and kilos, outputting the results to the console:
• 1 inch is equal to 2.54 cm
• 2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos)
divided by squared height (in meters). Output the results to the console. */


let heightInInches = 70;
let weightInPounds = 154;

const inchesToCentimeters = 2.54;
const poundsToKilos = 0.453592;

let heightInCentimeters = heightInInches * inchesToCentimeters;
let weightInKilos = weightInPounds * poundsToKilos;
let heightInMeters = heightInCentimeters / 100;
let bmi = weightInKilos / (heightInMeters * heightInMeters);

console.log(`Height: ${heightInCentimeters.toFixed(2)} cm`);
console.log(`Weight: ${weightInKilos.toFixed(2)} kg`);
console.log(`BMI: ${bmi.toFixed(2)}`);
































