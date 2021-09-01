var BGB  = 309;
var rab  = 407;
var army = 593;

if (BGB > rab) {
    if (BGB > army) {
        console.log("BGB is bigger.");
    }else{
        console.log("Army is bigger.");
    }
}else {
    if (rab > army) {
        console.log("RAB is bigger.");
    }else{
        console.log("Army is bigger");
    }
}

console.log('2nd step: ')

var tipu  =  30;
var sabbir = 27;
var jannat = 17;

var maxResult = Math.max(tipu, sabbir, jannat);

if (maxResult <= tipu) {
    console.log('Tipu is bigger');
}else if (maxResult <= sabbir) {
    console.log('Sabbir is bigger');
}else{
    console.log('Jannat is bigger');
}