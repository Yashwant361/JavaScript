let arr = [2, 4, 56, 24, 57, 25];
console.log(typeof arr);

console.log()

let language = ["Cpp", "JAVA", "Rust", "C", "JAVASCRIPT"];

console.log(language[0]);

console.log()

let random  = [1 , "Hello" , "Sir" , true , {name:"Nishant"} , 22]

console.log(typeof random[4])

console.log()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let newArr  =  fruits.join("-")

console.log(newArr,`\n`);

let arr4 = [45,64,3,34,5,3]
let [first , second , third , fourth, ...remaining] = arr4;
console.log(remaining,`\n`)

/** OBJECTS */

const obj = {
  name: "Nishant",
  id: 23134563,
  course: "B.tech",
  Branch: "Cse",
  hosteller: false,
};
console.log(obj["name"]);
console.log(obj.id,`\n`);

const obj2 = {
  name: "Nishant2",
  id: 23134563,
  course: "B.tech",
  Branch: "Cse",
  hosteller: false,
};
