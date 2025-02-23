
// const isUserloggedIn = true;
// const temperature = 41;

// if(temperature < 50){
//     console.log("Less than 50");
// } else{

//     console.log("Temperature is greater than 50");
// }


// <,>,<=,>=,==,===,!=,!==

// const score = 200;

// if(score > 100){
//     const power = "fly";
//     console.log(`User power : ${power}`);
// }
 
//     console.log(`User power : ${power}`);


// const balance = 1000;

// if(balance < 500 ){
//     console.log("Less than 500");
// }else if(balance < 750){
//     console.log("Less than 750");
// }else if(balance < 900){
//     console.log("Less than 900");
// }
// else
//    console.log("Less than 1200");


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==2 ){
     console.log("Allowed to Buy Course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In");
}


// Nullish Coalescing Operator (??) : null underfined

let val1;
val1 = 5 ?? 10 ;
console.log(val1);


val1 = null ?? 10 ;
console.log(val1);


/*  Terniary Operator ---> condition ? true : false */

 const iceTeaPrice = 100;
 iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");