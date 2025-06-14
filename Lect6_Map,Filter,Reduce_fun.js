function sum (a,...num) { //rest opertaor ==> grped the elements in single unit
    let total  = a +  num[0] + num[1]
    console.log(total)
}

sum(4,5,6,`\n`);

let obj = {
    title:"Lecture 30",
    tags:"lec30,rest,spread",
    description:"helllo dosto"
}

function obj1({title,tags,description}){
  //  console.log(tags)
     let tagsArray = tags.split(",");
     console.log(tagsArray)
}

obj1(obj); // call functions

let {title,...remaining} = obj
console.log(remaining);


let arr = [4,5,67,42,5,334,345]
let arr2 = [7,0,6,2,45,456]
let newArray = [...arr] //spread
console.log(newArray);
console.log(Math.max(...newArray));
console.log(Math.min(...newArray));
console.log(Math.abs(...newArray,)); //When you call Math.abs() with multiple arguments, JavaScript ignores all but the first argument.
console.log()


// let arr1 = [3,6,23,43,555];
// arr1.forEach(function(val){
//     console.log(val)
// })

const newArray1 = (arr) =>{
    console.log(arr)
}
newArray1(arr)

/** MAP */
let arr001 = [3,6,23,57,86]

// const newArr = arr001.map(function(val){
//      val *= 5;
//     return val
// })

//ARROW FUNCTION

const newArr = arr001.map((Val) => {
    Val *=5;
    return Val
})

console.log(newArr)
console.log()

let arr002 = [3,6,23,57,86]
// const newArr1 = arr002.filter((val) => {
//     if(val <= 23){
//         return val
//     }
//     else{
//         console.log("Aakat mai rhe!!!")
//     }
const newArr1 = arr002.filter((val) => val <=  23 );

console.log(newArr1);

/**In your array [3, 6, 23, 57, 86], the callback is invoked once for each element:
 * 

For 3 — 3 <= 23 → returns true, no message.
For 6 — 6 <= 23 → returns true, no message.
For 23 — 23 <= 23 → returns true, no message.
For 57 — 57 <= 23 → false, logs "Aaat mai rhe!!!".
For 86 — 86 <= 23 → false, logs "Aaat mai rhe!!!". */


const Sum = arr002.reduce((accumulator,currentValue)=>{
     return accumulator + currentValue;
},0); // Start with 0 as the initial value

console.log("Sum of array :", Sum);

/**Explanation:

accumulator starts at 0.
For each currentValue, add it to accumulator.
After processing all elements, sum will hold the total. */


let students = [
  { name: "Rinku", course: "Btech", branch: "cse" },
  { name: "Rohit", course: "Btech", branch: "civil" },
  { name: "Virat", course: "Btech", branch: "cse" },
  { name: "Mukesh", course: "Btech", branch: "mechanical" },
  { name: "Aksar", course: "Btech", branch: "civil" },
];
console.log()
const newArr3 = students.filter((Val) => {
    if(Val.branch === 'civil'){
        return Val;
    }
}).map((val) => val.name);

console.log(newArr3);
console.log()


const obj0001 = {
    name1: "Nishant",
    id1: 23134563,
    course1: "B.tech",
    Branch1: "Cse",
    hosteller1: false,
  };

 const obj0002 = {
    name: "Nishant",
    id: 23134563,
    course: "B.tech",
    Branch: "Cse",
    hosteller: false,
  };

const newObj0001 = {...obj0001, ...obj0002}

//  Handling duplicate keys in an object:
let objjj = {
    name: "nishant",
    name:"rahul"
}
console.log(objjj)

console.log(newObj0001)