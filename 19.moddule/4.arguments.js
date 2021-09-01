function addNumber() {
    let sum  = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum  = sum + num;        
    }
    return sum;
}

let result = addNumber(17, 3, 16, 14);
console.log(result);