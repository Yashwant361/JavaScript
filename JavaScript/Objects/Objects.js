// OBJECTS
// Singleton ---> Jab  object sirf ek baar hi baanta hai
// Object.create

//object literals

const mySym = Symbol("key1");
const JsUser = {
    name : "Yash",
    "full name" : "Yash Kumar",
    [mySym] : "myKey1",
    age : 24,
    location : "Patna",
    email : "yash@gmail.com",
    isLoggedIn : false,
    lastloginDays : ["Monday","Saturday"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym]);


JsUser.email = "yashwant@gmail.com"; // Here email is change from yash@gmail.com to yashwantray@gmail.com.
// Object.freeze(JsUser); // here i freeze the Jsuser
JsUser.email = "yashwant123@gmail.com";
// console.log(JsUser);

JsUser.greetingOne = function(){
    console.log("Hello Js User");
};
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`) // backTick (``) this is called String Interpolation.
};

console.log(JsUser.greetingOne());
console.log(JsUser.greetingTwo());

// console.log(JsUser.greetingOne);