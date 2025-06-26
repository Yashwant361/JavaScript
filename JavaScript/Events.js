const myBtn = document.getElementById('btn');
myBtn.addEventListener('click', () => {
    setTimeout(() => {
        alert('Hello');
    }, 3000);
    myBtn.style.backgroundColor = 'green'; // change color
    myBtn.style.color = 'white';
});

//+++++++++++++++++++++++++++++++++++++

let myVar = null;
const myBtn1 = document.getElementById('Trybtn');
myBtn1.addEventListener('click', () => {
    //Jab user "Try" button click karta hai, tab myVar mein ek numeric timeout ID store hota hai.
    myVar = setTimeout(() => {
        alert('Hello');
    }, 3000);

    myBtn1.style.backgroundColor = 'green'; // change color
    myBtn1.style.color = 'white';
    console.log("Started");

});
const myBtn2 = document.getElementById('Stopbtn');
myBtn2.addEventListener('click', () => {
    if (myVar== null) {
        alert('Please click "Try it" button first');
        return; // ⛔ stop further execution
    }

    clearTimeout(myVar);
    myVar = null; // reset after cancel

    myBtn2.style.backgroundColor = 'green'; // change color
    myBtn2.style.color = 'white';
    console.log("Stopped");
});

//++++++++++++++++++++++++++++++++++++++++++++++
// // Naming functions

// setInterval(myTimer , 1000);
//     function myTimer(){
//         const d = new Date();
//     document.getElementById('demo').innerHTML = d.toLocaleTimeString();
// }


setInterval(()=>{
const d = new Date();
document.getElementById('demo').innerHTML = d.toLocaleTimeString();
},1000);

//++++++++++++++++++++++++++++++++++++++++++++++


let X = setInterval(()=> {
    const d = new Date();
document.getElementById('Demo').innerHTML= d.toLocaleTimeString();
},1000);

// ✅ Stop button logic using arrow function

document.getElementById('stopBtn').addEventListener('click',()=>{
    clearInterval(X);
  //  alert('Timer has Stopped');
})