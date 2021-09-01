function factorialRecursive(num) {
    if (num == 1) {
        return 1;
    }else{
        //console.log(num, num-1); 
        return num * factorialRecursive(num -1);
    }
}

let result = factorialRecursive(5);
console.log("Result is: ", result);