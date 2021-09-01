function fibonacci(n) {
    if (n == 0) {
        return [0]
    }else if (n == 1) {
        return [0, 1]
    } else {
        //calculate array nth element
        var fibo = fibonacci(n - 1);
        var nextElement = fibo[n - 1] + fibo[n -2];
        fibo.push(nextElement);
        return fibo;
    }
}

var result = fibonacci(10);
console.log(result);