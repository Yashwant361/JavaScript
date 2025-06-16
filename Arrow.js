const user = {
    userName : "hitesh",
    price : 999,
    
    welcomeMessage : function(){
        console.log(`${this.userName} , welcome to website`);
        // console.log(this); // this --> this keyword is talk about current context ( means current values)
    }
}
user.welcomeMessage();
user.userName = "Sam";
user.welcomeMessage();

console.log(this);

function chai (){
    let userName = "Yash"
    console.log(this.userName);
}
chai();
/*output : undefine  ==> let userName = "Yash" → sirf function ke andar ka variable hai

this.userName → global object pe userName dhundta hai, lekin mila nahi, isliye undefined */

/*++++++++++ ARROW FUNCTIONS++++++++

const functionName = (parameters) => {
  // function body
}
 */

// const greet = (name)=> {
//     return "Hello " + name;
//     // console.log(this);
// }

// console.log(greet("yash"));


// Implicit functions
//const greet1 = (name)  =>  "Hello " + name; // part 1
//const greet1 = (name)  =>  ("Hello " + name); // part 2
const greet1 = (name)  =>  ({userName : "Yash"}) ; // part 2

console.log(greet1("yAsH"));
