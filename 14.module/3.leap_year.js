const year = 3689;

if ((year % 4) == 0) {
    console.log(`It's leap Year!`);
}else{
    console.log(`It's not leap Year!`);
}


function isLeapYear(year) {
    if ((year % 4) == 0) {
       return `It's leap Year!`;
    }else{
        return `It's not leap Year!`;
    }
}

const checkLeapYear = isLeapYear(3688);
console.log(checkLeapYear);

const checkLeapYear2 = isLeapYear(2608);
console.log(checkLeapYear2);