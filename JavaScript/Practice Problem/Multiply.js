function Multiply(tableOf , tableTill){

    console.log(tableOf,tableTill);

    for (let i = 1; i <= tableTill; i++) {
        console.log(`${tableOf} * ${i} = ${ i * tableOf} ` ); // $string laterals
        
    }


}
Multiply(4,10);
