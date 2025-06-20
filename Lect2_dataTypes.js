/*
JavaScript has 8 Datatypes
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object

1. The Object Datatype
The object data type can contain both built-in objects, and user defined objects:

Built-in object types can be:

objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.


*///Examples

// Numbers:
let length = 16; // int
let weight = 7.5; // float

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

console.log(length, weight, color, lastName, x, y, person, cars, date,);

/*Note : A JavaScript variable can hold any type of data. */

/* The Concept of Data Types
In programming, data types is an important concept.

To be able to operate on variables, it is important to know something about the type.

Without data types, a computer cannot safely solve this: */

let X = 16 + "Volvo";
console.log(X);
// output : 16Volvo ==>

let X1 = "Volvo" + "16"
console.log(X1);
//output : Volvo16

// JavaScript evaluates expressions from left to right. Different sequences can produce different results:

let X2 = "Volvo" + 16
console.log(X2);

let X3 = 16 + 4 + "Js" // In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
console.log(X3);
// output : 20Js

let X4 = "Js" + 16 + 4  // In the second example, since the first operand is a string, all operands are treated as strings.
console.log(X4);
// output : Js164


let X5 = (16 + 4) + "Js" // In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
console.log(X3);
// output : 20Js

let X6 = "Js" + (16 + 4) // In the second example, since the first operand is a string, all operands are treated as strings.
console.log(X4);
// output : Js20


//JavaScript Types are Dynamic => JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

let X7; // Now X7 is undefined

X7 = 5; // Now X7 is int

X7 = 5.854; // Now X7 is float

X7 = "John"; // Now X7 is string

console.log(X7);
// ouput : John => Why only last value? Kyunki JavaScript mein assignment (=) matlab hai replace karna, add karna nahi!


/* JavaScript Strings
A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes: */

// Example 

let carName1 = "volvo Cx60"; // Using double quotes
console.log(carName1);
// output: Volvo Cx60

let carName2 = 'Volvo Cx60'; // Using single quotes
console.log(carName2);
// output : Volvo Cx60

//You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
// Example

//Single quote inside double quotes
let answer1 = "It's alright";
// output: It's alright

//Single quote inside double quotes
let answer2 = "He is called 'Johnny'";
//output: He is called 'Johnny'

//Double  quote inside single quotes
let answer3 = 'He is called "Johnny"';
//output: He is called "Johnny"


console.log(typeof (answer1), answer1);
console.log(answer2);
console.log(answer3);

//JavaScript Numbers => All JavaScript numbers are stored as decimal numbers (floating point).Numbers can be written with, or without decimals:

//with decimal
let X12 = 34.00;
console.log(X12);
//output : 34 // Zero after decimal js will not consider as number

let X13 = 34.10; // Zero after decimal js will not consider as number
console.log(X13);
//output: 3.1 

let X14 = 34;
console.log(X14);
//output : 34


// Exponential Notation==> Extra large or extra small numbers can be written with scientific (exponential) notation:

let X15 = 123e5;
console.log(X15);
//output: 12300000 // "e" ka matlab hai "× 10 to the power" = 123 × 10^5 (10 ki power 5)


let X16 = 123e-5;
console.log(X16);
//output: 0.00123 // "e" ka matlab hai "× 10 to the power" = 10^(-5) = 1/(10^5) = 1/100000 = 0.00001

// JavaScript BigInt ==> All JavaScript numbers are stored in a 64-bit floating-point format.
let X17 = BigInt("12345678909876543210");
console.log(X17);

// JavaScript Booleans ==> Booleans can only have two values: true or false.

let X18 = 5;
let X19 = 5;
let X20 = 6;

let results1 = (X18 == X19);
let results2 = (X18 == X20);

console.log(results1); //output: true
console.log(results2); // output : false


/* JavaScript Arrays
------------------------
JavaScript arrays are written with square brackets.

Array items are separated by commas.

The following code declares (creates) an array called cars, containing three items (car names):

*/

const programmingLang = ["Js", "Java", "C++"];
console.log(programmingLang);
//output: ["Js","Java", "C++"]
/**Array indexes are zero-based, which means the first item is [0], second is [1], and so on. */



/** JavaScript Objects
  1.JavaScript objects are written with curly braces {}.

  2.Object properties are written as name:value pairs, separated by commas.

 */

  const  Person = {firstName:"Yash" , lastName : "Ray" , age:"24" , hight : "167cm"};
  console.log(Person);

// Objects are work on keys and value , heres {key : value}.










//Null 

let X10;
console.log(X10);

//Symbol

let X11 = Symbol("js");
console.log(X11)