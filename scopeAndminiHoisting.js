
//"Jo function jahan likha gaya hai, wo us jagah ke variables ko dekh sakta hai"— yahi hota hai Lexical Scoping.

function one() {                   //1
    const userName = "hitesh";     //2

    function two() {                //3
        const webSite = "youtube"   //4
        console.log(userName,`\n`);      //5
    }
    // console.log(webSite);

    two(); //CallFunctionTwo       //6
}
one(); // callFunctionOne         //7

/* WORKING

[7] one();
Global scope se one() function call hota hai.

[1] function one() start
Execution one() function ke andar chala jata hai.

[2] const userName = "hitesh";
Ek constant variable userName banaya gaya hai with value "hitesh".

[3] function two() define hota hai
Is point pe two() sirf define ho raha hai, call nahi hua.

[6] two();
Ab two() function ko call kiya ja raha hai one() ke andar se.

[4] const webSite = "youtube";
two() function start hota hai, aur isme ek local variable webSite define hota hai.

[5] console.log(userName);
two() ke andar userName ko access karne ki koshish hoti hai.

userName two() ke andar nahi mila, so JavaScript uske parent scope (one()) mein search karta hai.

userName = "hitesh" mil gaya → print ho jaata hai "hitesh"


*/

// ++++++++++++++++ Interesting ++++++++++++

console.log(addOne(5),`\n`);
function addOne(num){
    return num + 1;
}

/*
// case Of Hoisting ==> JavaScript mein variables aur functions ko execution se pehle memory mein space mil jata hai (but value nahi)
addTwo(5);
const addTwo = function(num){
    return num + 2;
}
*/
// +++++++++ Lexical scoping ==>  Function apne parent ke variables ko access kar sakta hai.
// "Child function can access parent function's properties based on where it's written in the code (lexically defined)" +++++++

/*
function init(){
    let name = "Chrome";
     console.log(secert);

    function displayName(){
        let secert = "my123";
        console.log("displayName",name);
    }
   // displayName();
    function displayModel(){
        console.log("displayModel",name);
        console.log(secert);
    }
    displayName();
    displayModel();
}
init(); */
/*
function init() {
    let name = "Chrome";
    let secert = "my123";  // moved here ✅

    function displayName() {
        console.log("displayName", name);
    }

    function displayModel() {
        console.log("displayModel", name);
        console.log(secert);  // ✅ now accessible
    }

    displayName();
    displayModel();
}
init();


*/
// function outer(){
//     let userName = "yash";
//     function inner() {
//         console.log("inner",userName);
//     } 
//     inner();
//     function innerTwo() {
//         console.log("innerOne",userName);
//     } 
//     inner();
//     innerTwo();
// }
// outer();
// console.log(userName);

//++++++++ CLOSURE ++++++++++++++

function makeFunc(){
    const name = "Mozilla";    // Parent ka variable
   
    function displayName (){
        console.log(name);      // Child accessing parent's variable
    }
    return displayName;       // Function return kar rahe (not calling)
}

const myFunc = makeFunc();     // Function assign kar rahe
myFunc();                   // Ab function call kar rahe 