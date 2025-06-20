function SumOfDigit(inputNum) {

    if( typeof inputNum !== "number" || isNaN(inputNum));
    if (inputNum < 1) {
        throw new Error("Input must be positive ");
    }
    let sum = 0;
    const inputNumAsString = inputNum.toString().split(""); // For example, 123 becomes ["1", "2", "3"]

    for (let i = 0; i < inputNumAsString.length; i++) {
        sum += Number(inputNumAsString[i]);

    }


    return sum;
}

console.log(SumOfDigit(123)) 