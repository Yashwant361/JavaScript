
// const score = 400;
// console.log(score);
// console.log(score.toString());

// const bal = new Number(100);
// console.log(bal);

// console.log(bal.toString().length);
// console.log(bal.toFixed(2));
// console.log(typeof(bal.toString));

// const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));

console.log("+++++++++ MATH +++++++++++");

// console.log(Math);
// console.log(Math.abs(-4)); // Its' works as Modulas
// console.log(Math.round(4.639));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.sqrt(25));

console.log(Math.min(9,4,35,2));
console.log(Math.max(9,4,35,2));

console.log(Math.random()); // Always lies between 0 to 9.
console.log((Math.random() * 10) + 1); //  to shift the number form left to right.
console.log(Math.floor(Math.random() * 10) + 1); // floor gives 0 to get minimum , we should add 1 over here.

const Min = 10;
const Max = 20;

console.log(Math.floor(Math.random() * (Max - Min + 1)) + Min);
