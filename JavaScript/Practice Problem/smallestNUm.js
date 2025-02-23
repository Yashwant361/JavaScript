function smallestnum(a, b, c) {

    if(a == undefined || b == undefined || c == undefined){
        throw new Error("Missing Argument")
    }

    if(typeof a != "number" || typeof b != "number" || typeof c != "number" || isNaN(a) || isNaN(b) || isNaN (c)){
        throw new Error("Invalid Input")
    }

      // sorting a number in array then  "using bubble sort ALgo --> for arranging number in ascending order"

    let number = [a, b, c]; // [3,1,6]
   
    for (let i = 0; i <= number.length; i++) {
        for (let j = 0; j <= number.length - 1 - i; j++) {
            if (number[j] > number[j+1]) {
                let temp = number[j];
                number[j] = number[j+1];
                number[j+1] = temp;
            }
        }
    }
      console.log(number[0], "is smallest");
      return number[0]; // After sorting the array in ascending order, the smallest number is guaranteed to be at index 0

}
smallestnum(3,1,6); // 1
smallestnum(3,6,1); // 1
smallestnum(-1,-6,9); //-6
smallestnum(3,3,3); // 3
smallestnum(3,3,1); //1
smallestnum(3,3,4); // 3

try{
smallestnum(3,4)
}catch(e){
    console.error(e.message);
}

try{
smallestnum("hello",3,4);
}catch(e){
    console.log(e.message);
}


// Approach 2

// function findSmall(a,b,c){
//     if( a < b && a < c){
//         return a;
//     }
//     else if( b < a && b < c){
//         return b;
//     }
//     else if  (c < a  &&  c < b){
//         return c;
//     }

// }
// console.log(findSmall(3,1,6), 'is smallest')