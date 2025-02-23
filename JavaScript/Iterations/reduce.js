const array1 = [1, 2, 3, 4, 5];

const initialValue = 0;
// const myTotal =  sumWwithInital = array1.reduce( function (acc,currval){
//     console.log(`acc: ${acc} and currval :${currval}`)
//         return acc + currval;
//     }, 0 );

const myTotal = array1.reduce((acc, currval) => acc + currval, 0)
// console.log(`Total Sum is :`, myTotal);

const shoppingCart = [
    {
        itemName: "Jeans",
        price: 5000
    }, 
    {
        beg: "Skybeg",
        price : 3000
    }, 
    {
        wallet: "Gucci",
        price : 10000
    }, 
    {
        watch: " Rolex",
        price : 100000
    }, 
    {
        Chocolate: "Kitkat",
        price : 300
    }
];

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceTopay);