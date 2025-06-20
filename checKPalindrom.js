function isPalindrome(inputString){

    inputString = inputString.toLowerCase();

    for (let i = 0; i <= inputString.length / 2; i++) {
        if(inputString[i] != inputString[inputString.length-1-i]){
            return false; // return false string is Not palindrome
        }   
    } 
    return true; // return true String is Plaindrome
}
let is_Palindrome = isPalindrome("RADAr"); 
 /* R --> R 
    A --> A
                                */
                         
let is_Palindrome1 = isPalindrome("Yash");
console.log(is_Palindrome);