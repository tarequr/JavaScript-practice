function getValue(num) {
    var result = num * 2;
    return result;
}

var first = getValue(5);
var second = getValue(50);

var total = first + second;

console.log('Our value is: '+first+', '+second);
console.log('Our total number is: '+total);

console.log('Another example');

function add(num1, num2) {
    var result = num1 + num2;
    return result;    
}

var sumTotal = add(15, 35);
console.log(sumTotal);
