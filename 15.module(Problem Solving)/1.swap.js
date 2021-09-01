let a = 5;
let b = 10;

console.log("Before swap: a =",a, "b =",b);

let temp = a;
 a = b;
 b = temp;

console.log("After swap: a =",a, "b =",b);


console.log('2nd process :');

let x = 10;
let y = 20;

console.log("Before swap: x =",x, "y =",y);
x = x+y;

//here x is result of sum. because 30 value of x
y = x-y;
x = x-y

console.log("After swap: x =",x, "y =",y);

console.log('3rd process :');

let p = 50;
let q = 100;

console.log("After swap: p =",p, "q =",q);

[p, q] = [q, p]

console.log("Before swap: p =",p, "q =",q);
