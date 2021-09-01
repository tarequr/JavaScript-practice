//absulate -> abs
var number = -10;
var absulateNumber = number+' Absulate Number: '+Math.abs(number);

console.log(absulateNumber);


//round
var number1 = 5.53632;
var result = number1+' Round Number: '+Math.round(number1);

console.log(result);

//ceil
var number2 = 7.000000001;
var ceilResult = number2+' Ceil Number: '+Math.ceil(number2);

console.log(ceilResult);

//floor
var number3 = 9.99999999;
var floorResult = number3+' Floor Number: '+Math.floor(number3);

console.log(floorResult);

//random
var number4 = Math.random()*10000;
var randomResult = 'Random Number: '+Math.round(number4);

console.log(randomResult);