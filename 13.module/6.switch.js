var num = 50;

switch (num) {
    case 100:
        console.log('i am 100');
        break;
    case 90:
        console.log('i am 90');
        break;
    case 80:
        console.log('i am 80');
        break;
    case 60:
    case 50:
        console.log('i am eigther 60 or 50');
        break;
    case 10:
        console.log('i am 10');
        break;
    default:
        console.log(`Sorry,i don't get any number!`);
        break;
}