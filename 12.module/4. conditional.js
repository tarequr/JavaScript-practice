var mobilePrice = 20000

if (mobilePrice < 25000) {
    console.log('Yes! i am buying a new phone.');
}else{
    console.log('Sorry! i do not have lots of money')
}


//and operator
var job = true;
var age = 21;

if (job == true && age > 20) {
    console.log('You can marry now.')
}else{
    console.log('You can not perfectly okay for marry');
}


//or operator
var yourFatherRech = true;
var yourAmount     = 50000;

if (yourFatherRech == true || yourAmount > 100000) {
    console.log('Your family is rich');
}else{
    console.log('Opps! your are poor');
}

//elseif
var yourName = "Tipu";

if (yourName ==  "Tipu") {
    console.log('Yes your name is Tipu');    
}else if (yourName == "Tarequr") {
    console.log('Yes your name is Sabbir');
} else {
    console.log('No data found');
}