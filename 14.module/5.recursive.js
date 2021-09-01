// i = 1;
// factorials = 1;
// for (let i = 10; i >= 1; i--) {
//     var factorials = factorials*i;     
// }
// console.log(i, factorials); 


/*---------------------Start Recursive--------------- */
//8! = 1*2*3*4*5*6*7*8
//8! = (8-1)!*8
//n! = (n-1)!*n

function sabbirFactorial(n) {
    if (n == 0) {
        return 1;
    }else{
        return n * sabbirFactorial(n-1);
    }
}
var result = sabbirFactorial(8);
console.log(result);