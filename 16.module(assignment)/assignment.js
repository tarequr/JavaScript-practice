// 1st function
function feetToMile(feet) {
    if (feet < 0) {
        console.log('You may not valid input. Please checked!');
    }
    var inputFeet = parseFloat(feet);
    var mile = inputFeet*0.000189;
    
    return mile;
}

 var mile = feetToMile(5.868);
 console.log(mile.toFixed(3));


//  2nd function
function woodCalculator(quantity, item) {
    if (item == 'chair') {
        return quantity*1;
    }else if (item == 'table') {
        return quantity*2;
    }else if (item == 'bed') {
        return quantity*5;
    }
}

let result1 = woodCalculator(20,'chair');
let result2 = woodCalculator(5,'table');
let result3 = woodCalculator(5,'bed');

let total = result1+result2+result3;
console.log('Chair', result1,'Table', result2,'Bed', result3 ,'Total Wood: ',total);



// 3rd function
function brickCalculator(floor) {
    let totalBrick = 0;
    if (floor <= 0 ) {
        return console.log('Sorry! You provide negative value.');
    }

    if (floor <= 10) {
        totalBrick = floor * 15 * 1000;
    } else if (floor <= 20) {
        let firstPart = (10 * 15 * 1000);
        let remaining = (floor - 10);

        totalBrick = firstPart + remaining * 12 * 1000;
    }else{
        let firstPart  = (10 * 15 * 1000);
        let secondPart = (20 * 12 * 1000);
        let remaining  = (floor - 20);

        totalBrick = firstPart + secondPart + remaining * 10 * 1000;
    }
    return totalBrick;
}
let showValue = brickCalculator(30);
console.log('Total Brick: ', showValue);


// 4th function
function tinyFriend(friends) {
    if (friends.length == 0) {
        return console.log('Please enter a valid list.');
    }

    let tiny = friends[0];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length < tiny.length) {
           tiny = friends[i];
        }        
    }
    console.log("Lowest name is: ", tiny);    
}

tinyFriend(['sabbir','dad','ra','rafi','radin','rifat','fa']);
