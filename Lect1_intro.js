 
//  a  = "yash"
//  b  =" Ray"
//  console.log(a,b)

//  Keyword

// // In Var keyword , the value inside it can be changable
// var a = 10;
// var a = 20;
// console.log(a)


// let keyword => we can used for updation the value not the Declaration

// let a = 10;
// let a = 50;
// console.log(a);

// // Const keyword => If we used const keyword , it's means that we not use or take that value again in future.
// const a = 3;
// const a = 4;
// console.log(a)

// Local Scope => we cant be update or declear inside the local scope

{
    let Id = 84541414;
    Id = 787877898
   console.log(Id)
}
let Id = 77777
console.log(Id)
// Id can NOT be used here





// Global JavaScript Variables => A variable declared outside a function, becomes GLOBAL.

let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
console.log(carName)
}

/*
// RULE TO DECLEAR THE VARIABLE

1. Do not use var variable
2. Used let and const => use where you want to update in future
3. varibale name should be Meaningfull
4. case sensitive
5. alphabet and Numberic use only(special character _ and $)
6. keyword not use in time of variable 


==> "var" flexible hai, par scope wide hota hai, toh dhyan se use karo.
==> "let" usmein change kar sakte ho, scope local hota hai.
==> "const" ek baar set karne ke baad badal nahi sakte, jise aapki fixed value ke liye use karte hain.

*/
