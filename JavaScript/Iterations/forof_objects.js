

/*  SYNTAX---
 for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
 */

const myObject = {
    js: "JavaScript",
    java: "JAVA",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = [
    "JavaScript",
    "JAVA",
    "C++",
    "Ruby",
    "Swift by apple"
]

for(const key in programming){
   // console.log(key);
   // console.log(programming[key]);
    console.log(key ,programming[key]);

}