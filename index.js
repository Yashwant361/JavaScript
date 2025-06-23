
const btn = document.getElementById('genPass');
const newPass = document.getElementById('newPass');
const slider = document.getElementById('range');
const rangeVal = document.getElementById('rangeVal');
rangeVal.innerText = slider.value;

const upperCase = document.getElementById('capLet');
const lowerCase = document.getElementById('samLet');
const numberBox = document.getElementById('number');
const symbol = document.getElementById('symbol');
const copyBtn = document.getElementById('copyBtn');


slider.addEventListener('input', (event) => {
    rangeVal.innerText = event.target.value;
});

btn.addEventListener('click', () => {

    let captialLetter = 'ABCDEFGHJKLMNOPQRSTUVWXYZ';
    let smallLetter = 'abcdefghijklmnopqrstuvwxyz';
    let numberStr = '0123456789';
    let symbolsStr = `~!@#$%^&*()_-+={[}]|\\:;",\`<,>.?/`;

   let finalStr = '';
   
    if(upperCase.checked){
       finalStr += captialLetter;
    }
    if(lowerCase.checked){
       finalStr += smallLetter;
    }
    if(numberBox.checked){
       finalStr += numberStr;
    }
    if(symbol.checked){
       finalStr += symbolsStr;
    }
    if (finalStr === "") {
        alert("Please Select atleast one option");
        return; // Added to stop execution
    }
    
    let lastestPass ='';

    for(let i = 0 ; i < slider.value ; i++){
        let randNum = Math.floor(Math.random() * finalStr.length);
       lastestPass += finalStr.charAt(randNum);
    }
 
     newPass.innerText = `${lastestPass}`;

});
     copyBtn.addEventListener('click',() => {
      if(!newPass.innerText){
         alert("No PassWord to Copy");
           return;
      }
   
     window.navigator.clipboard.writeText(newPass.innerText);
     alert("PassWord Copied")
   },true);
