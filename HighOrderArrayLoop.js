// for of

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Maps

// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "America");
// map.set('Fr', " France");

// //console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

const myObject = {
    name: "Example",
    age: 30,
    city: "New York",
    isEmployed: true,
    hobbies: ["reading", "hiking", "coding"],
    address: {
        street: "123 Main St",
        zipcode: "10001",
    }
};

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);

// }
// // Output :  myObject is not iterable

for (const key in myObject) {
    //  console.log(key);
    console.log(myObject[key], `\n`);
}

const numString = ["1", "2", "3", "4", "5"]

// numString.forEach( function (item) {
//     console.log(item);
// })

// Arrow func
// numString.forEach( (item) =>  {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// numString.forEach(printMe);


// numString.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// } );

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    }
    , 
    {
        languageName: "java",
        languageFileName: "java"
    }
    ,
     {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})