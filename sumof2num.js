function sum(a, b) {
    const sum = a + b;
    console.log(sum)
}

sum(4, 3);
sum(0, 0);
sum(4, 3);
sum(-5, 5);
sum(-3, -3);
sum(-3, -2);
sum(4.5, 7.3)
sum("4", 3);    //"43" (string concatenation)
sum("4", "3");  //"43" (string concatenation)
sum(4, null);  // null converts to zero 4 + 0 = 4
sum(undefined, 3); // undefined coverts to NaN( Not a number)
sum();
sum(1, 2, 3);   // 3 is extra just ignored 
