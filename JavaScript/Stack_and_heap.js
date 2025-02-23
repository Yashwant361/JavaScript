
// Stack ( Its stores --> Primitive data types) , Heap (Its stores --> Non-Primitive Data types)
// Stack returns Copy and heap returns reference

let myCompanyname = "Ray Corporation"

let anotherCompanyname = "Ray Tech";
anotherCompanyname = "Ray Tech Corporation";

console.log(myCompanyname);
console.log(anotherCompanyname);

let userOne = {
    email : "user@google.com",
    upi : "user@sbi"
}
let userTwo = userOne;

userTwo.email = "yash@google.com";

console.log(userOne.email);
console.log(userTwo.email);