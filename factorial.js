// 5! = 5 x 4 x 3 x 2 x 1 = 120
// n! = n x (n-1) x (n-2) x (n-3) x (n-4)


function fact(inputNum) {

    if(inputNum < 0){
        throw new Error("Not factorial for Negative Number");
    }
    if(!Number.isInteger(inputNum)){
        throw new Error("Input must be integer")
    }

    let result = 1;
    for (let i = 1; i <= inputNum; i++) {

        result = result * i;

    }
    return result;
}
console.log(fact(0));