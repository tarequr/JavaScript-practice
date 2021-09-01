let arrayValue = [10, 20, 40, 900, 80, 100];

let max =  arrayValue[0];

for (let i = 0; i < arrayValue.length; i++) {
    let output = arrayValue[i];
    if (output > max) {
        max = output;
    }
}
console.log("Highest number is: ", max);