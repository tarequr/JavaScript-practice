let num = 7.5899038;

let floorNum = Math.floor(num);
let ceilNum = Math.ceil(num);
let roundNum = Math.round(num);

console.log(num, 'Floor number is :', floorNum);
console.log(num, 'Ceil number is :', ceilNum);
console.log(num, 'Round number is :', roundNum);

console.log('find random number.');

let randomNumber = Math.random() * 100;
let output = Math.round(randomNumber);

console.log("Random number is: ",output);

console.log('If we want to see random number into 6 :');

for (i = 0; i <= 10; i++) {
    let randomNumber = Math.random() * 6;
    let output = Math.round(randomNumber);
    console.log("Random number is: ",output);
}