
let factorial = 1;
for (let i = 1; i < 10; i++) {
    factorial = factorial * i;
    console.log(i, factorial);
}

console.log("Using function");

function factorialResult(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

 value = factorialResult(5);
 console.log(value);