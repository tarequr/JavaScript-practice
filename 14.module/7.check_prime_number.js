let n = 11;

for (i = 2; i < n; i++) {
    // console.log(i, n%i)
    if (n%i == 0) {
        console.log(n+' '+'The number is not prime number.');
        break;
    }else{
        console.log(n+' '+'The number is prime number.');
        break;
    }
}

console.log('Using function');

function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n%i == 0) {
            return 'The number is not prime number.';
        }
    }
    return 'The number is prime number.';
}

result = isPrime(15);
console.log(result);