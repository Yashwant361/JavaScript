// IIFE -->  Immediately Invoked Function Expressions


// function chai(){  // First way
//     console.log("DB CONNECTED");
// }

// chai();

// This is a Named IIFE
(function chai(){  // Second way to excute the function --> called IIFE --> Used for , to avoid the pollution of a Global variables
    console.log("DB CONNECTED");
}) ();

// Third way

// This is a simple IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ("Yash");