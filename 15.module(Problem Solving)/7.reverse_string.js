function reverseString(str){
    let reverse = "";
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
let statment = "hello everyone. How are you??";
let show = reverseString(statment);

console.log(show);