var names =  "Raisan";

function add(num1, num2){
    //window.result = num1 + num2;
    result = num1 + num2;
    console.log('Name inside: ' + names);

    function double(num){
        return num * 2;
    }

    var total = double(result);
    return total;
}

console.log('Name outside: ', names);
var sum = add(13, 12);

console.log("Sum of math: " + sum);
console.log('Result outside: ' + result);