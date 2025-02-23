const user = {
    username: "Yash",
    price: 99,

    welcomeMessage: function (username) {
        console.log(` Welcome ${this.username} you brought a course of ${this.price}`);
        // this is a keyword ---> refers  current context
       // console.log(this);
    }


};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this); // this keyword gives ----> window object

// function chai(){
//     let username = "Yash";
//     console.log(this);
// }
// chai();


// Define a function by using arrow fucntion
const chai = () => {
    let username = " Yash ";
    console.log(this);
}
// chai();

// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1 , num2) => num1 + num2 ;  // No need to use return keyword

// const addTwo = (num1 , num2) => (num1 + num2); 

const addTwo = (Num1 ,  num2) => ({username : "yash"})  // We always need parenthsis() , when we use Object for execution

console.log(addTwo(3,4));