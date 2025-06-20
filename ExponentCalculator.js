function ExpoCal(Base,Exponent){
    //check if Base and Exponent are +ve or not

    if(Base == undefined || Exponent == undefined){
        throw new Error("Missing Argument")
    }

    if(typeof Base != "number" || typeof  Exponent!= "number" ){
        throw new Error("Invalid Input")
    }

    let result = 1;
    for (let i = 1; i <= Exponent; i++) {
    
        result = result * Base;
        
        
    }
    return result;

}

console.log(ExpoCal(2,3));
console.log(ExpoCal(5,4));

try{
console.log(ExpoCal());
}catch(e){
    console.log(e.message); 
}

try{
console.log(ExpoCal("a","d"));
}catch(e){
    console.log(e.message);
}