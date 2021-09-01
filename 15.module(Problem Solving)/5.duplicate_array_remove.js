let  number = [2,4,5,6,8,8,4,2,8,9,10,2,3,4,5,6,7,8,9,18];
let uniqueNumber = [];

for (let i = 0; i < number.length; i++) {
    let  value = number[i];
    let index = uniqueNumber.indexOf(value);
    if (index == -1) {
        uniqueNumber.push(value);
    }
}
console.log(uniqueNumber);