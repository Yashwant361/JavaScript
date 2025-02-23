
let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    //    console.log("INNER:", a);
}


//console.log(a);
// console.log(b);


function one() {  // Parent function
    const username = " Yash";

    function two() {  //Child function
        const website = "Youtube";
        //    console.log(username);

    };
    //   console.log(website);

    two();

};

one();

if (true) {
    const username = "Yash"; // Yash

    if (username == "Yash") {
        const website = " Youtube";
        //    console.log(username + website);  // Yash Youtube
    };
    // console.log(website); // Getting error ---> due to outside the scope
    // console.log(username);
}


// ++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++

addone(5);   // function is not hold inside the variable
function addone(number) {
    return number + 1;
}


addTwo(5);  // error due to , function is hold inside the variable 
const addTwo = function (number) {
    return number + 2;
}
