//const tinderUser = new Object(); // Declearation Type_1 ---> This is singleton Object.

const tinderUser = {}; // Declearation Type_2 ---> THis is non Singleton Object.


tinderUser.id = "123abc",
    tinderUser.name = "Sammy",
    tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "alpha@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Yashwant",
            lastname: "ray"

        }

    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};

// const obj3 = {obj1,obj2};
//const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const users = [
    {
        id : 1,
        email: "h@gmail.com",

    },
    {
        id : 2,
        email: "h@gmail.com",

    },
    {
        id : 3,
        email: "h@gmail.com",

    },
    {
        id : 4,
        email: "h@gmail.com",

    }
];
//console.log(users[1].id) ;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


