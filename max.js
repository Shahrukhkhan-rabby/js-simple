const business = 350;
const minister = 250;
const army = 600;
// if (business >minister){
// console.log('Business person er pola bigger');
// }
// else{
// console.log('minister er pola is bigger');
// }

// function findLargest(first, second, third){
//     if(first > second && first > third){
//         return first;
//     }
//     else if(second > third){
//         return second;
//     } 
//     else{
//         return third;
//     }
// }
// const largest = findLargest(1345, 641, 941);
// console.log('Largest is', largest)


function findSmallest(first, second, third){
    if(first < second && first < third){
        return first;
    }
    else if(second < third){
        return second;
    }
    else{
        return third
    }
}

const smallest = findSmallest(345, 654, 844);
console.log('smallest is', smallest)
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
// console.log('largest is', max);