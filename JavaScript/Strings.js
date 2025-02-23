const name = "yash";
const repoCount = 12;

//console.log(name + repoCount);

// String Inter-polation best way
console.log(`${name} ${repoCount}`); 

const gameName = new String("Yash_want");

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); // know the position
console.log(gameName.indexOf("Y")); // know the position
console.log(gameName.split("-"));
console.log(gameName.blink());
console.log(gameName.endsWith("yash"));
console.log(gameName.fixed())

console.log("------------");

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = " Yashwant  ";
console.log(newStringOne.trim()); // avoid the extra spaces

const url = "https://github.com/github%20career";      

console.log(url.replace("%20","-"));

//  this method show present or not
console.log(url.includes("yashwant")); 

