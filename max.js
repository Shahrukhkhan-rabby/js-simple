const business = 350;
const minister = 250;
const army = 600;
// if (business >minister){
// console.log('Business person er pola bigger');
// }
// else{
// console.log('minister er pola is bigger');
// }

function findLargest()
/*
if(business > minister && business > army){
    console.log('Business is bigger');
}
else if(minister > business && minister > army){
    console.log('Minister is bigger');
}
else{
    console.log('Army is bigger');
}
    */

var max = Math.max(business, minister, army);
console.log('largest is', max);