
// for loop syntax 

/* for (let index = 0; index < array.length; index++) {
   const element = array[index];
   
} */

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
  //  console.log("5 is the best number");
    }
  //  console.log(element);
}

for( let i = 0 ; i<= 10 ; i++){
  //  console.log(`Outer loop value : ${i}`)
    for(let j = 0 ; j <=  10 ; j++){
     //   console.log(`Inner loop value : ${j} and inner loop ${i}`);

   //   console.log(/* `Multiple of ${i} :` , */  i + " * " + j + " = " + i * j );
    }
}

let heroArray = ["Batman" , "Superman", "Spiderman" , "WonderWomen" , "Captain" , "IronMan"];
// console.log(heroArray.length);

for( let i = 0 ; i < heroArray.length ; i++){
    const element =  heroArray[i] ; 
  //  console.log("\n"+element);

}

// break and continue

for( let num = 0 ; num <= 20 ; num++)
{
    if( num == 5){
   //     console.log(`Detected 5 `);
        break;
    }
 //   console.log("value of i is :" , num);

}

for( let num = 0 ; num <= 20 ; num++)
{
    if( num == 5){
       console.log(`Detected 5  `);
        continue; // Ignore the first time condition.
    }
   console.log("value of i is :" , num);

}





// Code to print largest element of an array

/* const arr = [1, 2, 33, 43, 43];
for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] = arr[j]) {
            console.log(arr);
        }
    }

} */