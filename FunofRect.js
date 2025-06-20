function RecSum(length , width){
    if ( length <= 0 ){
        throw new RangeError("Lengthe should be postive ");
        
    }
    if ( width <= 0 ){
        throw new RangeError("width should be postive ");
        
    }
    const Area = length * width;
    console.log(Area);
    return Area;
    
}
// RecSum(3,4)
RecSum(0,2)
 RecSum(-3,-4)