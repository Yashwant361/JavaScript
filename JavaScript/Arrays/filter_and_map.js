
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNums = myNums.filter( (num) => num > 4 );

// const newNums = myNums.filter( (num) => {
//     num > 4
// });


/* const newNums = [];  //Creating a new array

 myNums.forEach( (num) => {
    if(num > 4) {
        newNums.push(num);
    }
 });

console.log(newNums); */


const Books = [
    {
        title: "Book one", genre: "Fiction", publish: 1987, edition: 1900
    },
    {
        title: "Book two", genre: "Non-Fiction", publish: 1987, edition: 1900

    },
    {
        title: "Book three", genre: "Fiction", publish: 1910, edition: 1940

    },
    {
        title: "Book four", genre: "Arts", publish: 2000, edition: 2004

    },
    {
        title: "Book five", genre: "Science", publish: 2007, edition: 2014

    },
    {
        title: "Book six", genre: "Horror", publish: 2015, edition: 2020

    },
    {
        title: "Book seven", genre: "Kids", publish: 1956, edition: 1960

    },
    {
        title: "Book eight", genre: "Comics", publish: 1987, edition: 1988

    }
];

let userBooks = Books.filter((bk) => bk.genre === "Fiction");

//  userBooks = Books.filter( (bk) => {
//     return bk.publish >= 2000 && bk.genre == "History"    // here bk.publish is under scope

userBooks = Books.filter((bk) => {
    if (bk.publish >= 2000 && bk.genre == "Arts")    // here bk.publish is under scope
    {
        //    console.log(`Title: ${bk.title} is available`);
        return true;
    } else
        //   console.log(`Title: ${bk.title} is not available`);
        return false;
});

// console.log("Filtered Books:", userBooks);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Given at above

const newNum = myNums.map((num) => num + 10);
// console.log(newNum);

// This is called a Chaining Concept
const newNums = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);
console.log(newNums);




/* // logic 
function addTenToEachElement(myNumbers) {
    for (let index = 1; index <= myNumber.length; index++) {
        myNumber[index] += 10;
    }
    return myNumbers;
}
const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const modifiedArray = addTenToEachElement(myNumber);
console.log(myNumber); */

