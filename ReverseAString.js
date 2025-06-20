function reverseString(string) {

    let arr = string.split("") // "yash" --become -->"y","a","s","h"

    let Left_pointer1 = 0;
    let rht_pointer2 = arr.length - 1;

    while (Left_pointer1 < rht_pointer2) {
        let temp = arr[Left_pointer1];
        arr[Left_pointer1] = arr[rht_pointer2];
        arr[rht_pointer2] = temp;

        Left_pointer1++;
        rht_pointer2--;

    }

    let reversed = arr.join(""); // Convert the array back to a string
    console.log(reversed);
    return reversed;

}

reverseString("yashwant")

