
Date

let myDate = new Date();

console.log(" It's an : "+typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString()); // Best for me
console.log(myDate.getTimezoneOffset());

let myCreatedDate = new Date("01-14-2024");
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = new Date();

// console.log(myTimeStamp.getTime()); // Output in millisecond
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: "IST"
});
console.log(newDate);

