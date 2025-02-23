// function evenOdd(num){

//     // if(typeof num == "string"){
//     //     num = Number(num)
//     // }

//   if(typeof num !== "number" || isNaN(num)){
//     console.log("Please provide a valid number")
//     return;
//   }

//     if(num % 2 == 0){
//         console.log(num," is Even Number")
//     }
//     else
//         console.log(num," is Odd Number")

// }
// evenOdd(-2)
// evenOdd(0)
// evenOdd(2)
// evenOdd(131)
// evenOdd("hello")


function evenOdd1(num){
    
    return num % 2 == 0 ? "even ": "Odd";
 
}
console.log(evenOdd1(-2))
console.log(evenOdd1(0))
console.log(evenOdd1(2))
console.log(evenOdd1(131))
