function getArraySum(numbers) {
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

let numbers = [45,35,38,3,7,2,45,75,32,89];
let show = getArraySum(numbers);
console.log("Total number of array is: ", show);

let shows = getArraySum([5,7,3,2,3]);
console.log("Total number of array is: ", shows);