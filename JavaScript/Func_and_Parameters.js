// console.log("Y");
// console.log("A");
// console.log("S");
// console.log("H");


function sayMyname() {
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
};

//sayMyname();

// This is function 1

// function addTwoNumbers(number1,number2){
//    sum = number1 + number2 ;
//    console.log( sum);
// }

// addTwoNumbers(3,4);

// This is function 2
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
};

const result = addTwoNumbers(3, 5);

//console.log("Result:" , result);

// This is function 3

// function loginUserMessage(username) {
//     return `${username} just logged in`
// };

// console.log(loginUserMessage("Yash"));



// Task : write a function , to print that user is just logged in , And also if user is undefined.
// also optimize the code.

function loginUserMessage(username){
    // if(username === undefined){ // we can also use double equal ==
    //     console.log("Please enter a username first");
    //     return;
    // }

    if(!username){   // optimize code same as an above
        console.log("Please enter a username first");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage());

// Task2 : Write a function to create a shoping cart.

function calculateCartPrice(...num1){ // ... this is spread operator
  return num1
};

//console.log(calculateCartPrice(200,500,499,543.9));

const user = {
    username : "Yash",
    price : 199
}

function handleObject(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
// handleObject({
//     username : "Dugu",
//     prices : 399
// });

const myNewArray = [200,500,400,520.8];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));