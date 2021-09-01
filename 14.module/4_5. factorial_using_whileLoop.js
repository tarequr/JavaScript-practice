i = 1;
factorial = 1;

while (i <= 5) {
    factorial = factorial * i;
    console.log(factorial);
    i++;
}

console.log('Using function with while loop');

function factorials(num) {
    i = 1;
    factorial = 1;

    while (i <= num) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

var value = factorials(10);
console.log(value);