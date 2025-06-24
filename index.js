const ticTac = document.querySelector('.ticTac');
const boxes = document.querySelectorAll('.box');
const h1 = document.getElementsByTagName('h1');
const rBtn = document.getElementById('rstbtn');
console.log(h1);

let currentPlayer = 'X';
let count = 0;

// Winner Conditions

const winningCondition = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal
    [2, 4, 6]  // other diagonal
];

function eventStart(event) {

    if (event.target.className !== 'ticTac') {

        if (event.target.innerText === '') {
            event.target.textContent = currentPlayer;
            winner();
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
        if (count === 9) {
            h1[0].innerText = 'Match Draw';
        }
    }
}
function gameStart() {
    ticTac.addEventListener('click', eventStart);
}

function winner() {
    winningCondition.forEach((item => {
        let val0 = boxes[item[0]].innerText;
        let val1 = boxes[item[1]].innerText;
        let val2 = boxes[item[2]].innerText;
        console.log(item[0], val0, item[1], val1, item[3], val2);

        if (val0 !== '' && val1 !== '' && val2 !== '') {
            console.log('1st Check');
            if (val0 === val1 && val0 === val2) {
                console.log("final Check");
                boxes[item[0]].classList.add('WinnerClass');
                boxes[item[1]].classList.add('WinnerClass');
                boxes[item[2]].classList.add('WinnerClass');
                count = 0;
                h1[0].innerText = `Winner is ${val1}`;
                ticTac.removeEventListener('Click', eventStart);
            }
        }

    }));

}

rBtn.addEventListener('click', () => {
    currentPlayer = 'X';
    h1[0].innerText = 'Tic Tac Toc';
    boxes.forEach((item) => {
        item.classList.remove('WinnerClass');
        item.innerText = '';
    });
    gameStart();
});

gameStart();
