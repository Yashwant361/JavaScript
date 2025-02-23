/* 
          SYNTAX
array.forEach(element => {
    
}); */


const programmingArray = ["JavaScript", "JAVA", "C++", "Ruby","Swift by apple"];

programmingArray.forEach(languages => {  // here "language is function with ARROW" ---> Its a called callback function
 //   console.log(programmingArray);
});
// programmingArray.forEach( function (languages) {  // here "language is function without ARROW" --> Its a called function
//     console.log(programmingArray);
// });

const myCoding = [
     {
        languagesName : "javaScript",
        languagesFileName : "js"
     },
     {
        languagesName : "java",
        languagesFileName : "java"
     },
     {
        languagesName : "python",
        languagesFileName : "py"
     }
];

myCoding.forEach( (item) => {
   // console.log(item.languagesName);
})


const values = myCoding.forEach( (item) => {
    console.log(item);
    return item;
})

console.log(values);