function findLargestNum(arr){
    if(arr.length == 0) // Base case
        return undefined;

    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i];
        }
        
    }
    return max;
    

}
// Test Cases:

// 1. Standard case (sorted ascending)
console.log(findLargestNum([1, 2, 3, 4, 5])); // Expected output: 5

// 2. Standard case (sorted descending)
console.log(findLargestNum([5, 4, 3, 2, 1])); // Expected output: 5

// 3. Mixed positive and negative numbers
console.log(findLargestNum([-3, -1, 4, -5, 0])); // Expected output: 4

// 4. All negative numbers
console.log(findLargestNum([-3, -1, -7, -5])); // Expected output: -1

// 5. Single element array
console.log(findLargestNum([10])); // Expected output: 10

// 6. Array with duplicate elements
console.log(findLargestNum([2, 2, 2, 2])); // Expected output: 2

// 7. Empty array (edge case)
console.log(findLargestNum([])); // Expected output: undefined