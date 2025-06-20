
let number;

const generate_number = () => {
    let n1 = Math.random();
    let n2 = n1 * 10;
    n2 = Math.trunc(n2);
    n2 = (n2 % 10) + 1;
    number = n2;
    console.log(number);
};

const generate_number_btn_click = () => {
    document.querySelector("#section1").style.display = "none";
    document.querySelector("#section2").style.display = "none";
    document.querySelector("#section3").style.display = "block";

    setTimeout(() => {
        generate_number();
        document.querySelector("#section1").style.display = "none";
        document.querySelector("#section2").style.display = "block";
        document.querySelector("#section3").style.display = "none";
    }, 3000);
};

const check_number = () => {
    let value = document.querySelector("#field").value;
    if (value === "") {
        alert("Oops! Enter a number first.");
    } else if (value == number) {
        alert("Congrats, You won the game!");
    } else {
        alert("Oops! You lose the game.");
    }
    generate_number_btn_click();
};
