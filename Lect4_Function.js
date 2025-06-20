// JavaScript Functions => A JavaScript function is a block of code designed to perform a particular task.

/*//JavaScript Function Syntax

function name(parameter1, parameter2, parameter3) {
  // code to be executed
} */

function myFunction(p1, p2) {
  return p1 * p2;
}

let results = myFunction(4, 3); //main driver code
console.log(results);

console.log();


/**Function Invocation
The code inside the function will execute when "something" invokes (calls) the function:
When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked) */

/*  Function Return
When JavaScript reaches a return statement, the function will stop executing.
If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.*/

function myFunction1(a, b) {
  return a * b;
  return a + b;
}
let x = myFunction1(5, 4);
console.log(x, `\n`);

/**Why Functions?
   1.With functions you can reuse code
   2.You can write code that can be used many times.
   3.You can use the same code with different arguments, to produce different results. */


/**  The () Operator => The () operator invokes (calls) the function: */

// Example => Convert the temp to  calsius

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
let value = toCelsius(77);
console.log(value, `Calesius\n`);

//Example
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let Value = toCelsius; //you are assigning the function toCelsius to the variable Value instead of calling it with an argument.
console.log(Value);

/*//Using a function as a variable:

function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}
// let value1 = toCelsius(77);
// console.log(value1,`Calesius\n`);

let text = "The temperature is " + toCelsius(77) + " Celsius."; */


/**Local Variables=> inside the Created Functions
Variables declared within a JavaScript function, become LOCAL to the function.
Local variables can only be accessed from within the function. */

//Example

// code here can NOT use carName 
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName


let num = 200.5673;
console.log(num.toFixed(2)); //Decimal point के baad kitne digits चाहिए ,Rounding kar deta hai

console.log(num.toPrecision(5)); // Pura number mein kitne digits चाहिए ,Significant digits count करता है

let num1 = new Number(100);
console.log(num1.toPrecision(4));

//String बनाने के 2 तरीके:

//1. Primitive String (Normal way):
let str = "Hello"; //
console.log(str);
//output: Hello 

//2. String Object (new keyword):
let str1 = new String("Hello");
console.log(str1);
// Output: [String: 'Hello']

/**Key Points:
 --------------
new String() creates object, not primitive
Console mein [String: 'value'] format में दिखता है
Performance primitive string बेहतर है
Comparison में issues आ सकते हैं 
*/
console.log();
// Object properties access कर सकते हैं
let str2 = "Code Thread"
console.log(str2.split("e"))
console.log(str2.replace(" ","EEE"))
console.log(str2.length)
console.log(str2.toLowerCase())
console.log(str2.toUpperCase())
console.log(str2.match("Code"))
console.log(str2.charAt(5))
console.log(str2.indexOf("Thread"))


console.log(Math);
console.log(Math.floor(3.99999));
console.log(Math.ceil(3.99999));
console.log(Math.max(3,35,6));
console.log(Math.min(3,35,6));
console.log(Math.round(6.5));
console.log(Math.abs(-5));
console.log(Math.random());

let $RandomNumber = Math.floor(Math.random() * 10) + 1; 

console.log();

let min = 10;
let max = 20;
let $randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;  // Fixed variable name
console.log($randomNumber);  // Now correct!

console.log();

let date = new Date();

console.log("=== Different Date Formats ===");

// 1. Unix Timestamp (seconds)
console.log("Unix Timestamp:", Math.round(date.getTime()/1000));

// 2. ISO String (UTC)
console.log("ISO Format:", date.toISOString());

// 3. Local String (User's timezone)
console.log("Local Format:", date.toLocaleString());

// Bonus methods:
console.log("Date Only:", date.toLocaleDateString());
console.log("Time Only:", date.toLocaleTimeString());
console.log("Full Date:", date.toString());