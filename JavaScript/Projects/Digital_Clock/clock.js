window.onload = () => {
   
    function buildClock() {
        const date  = new Date();
        let hours   = date.getHours() % 12 || 12;
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours   = hours   < 10 ? "0" + hours   : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes ;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        const meridiem = hours < 12 ? "AM" : "PM";

        document.querySelector("#clock-hours").innerText = hours;
        document.querySelector("#clock-minutes").innerText = minutes;
        document.querySelector("#clock-seconds").innerText = seconds;
        document.querySelector("#meridiem").innerHTML = meridiem;

        setTimeout(buildClock, 1000)
    }
    buildClock();
}

// window.onload = () => {
//     function buildClock() {
//         const date = new Date();
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         document.querySelector("#clock-hours").innerText = hours;
//         document.querySelector("#clock-minutes").innerText = minutes;
//         document.querySelector("#clock-seconds").innerText = seconds;
//         setTimeout(buildClock, 1000);
//     }
//     buildClock();
// };