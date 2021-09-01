var foo = -1;
var output = 'Output: ';
 switch (foo) {
     case 0:
         output += '50';
         break;
     case 1:
         output += 'What ';
         output += 'Is ';
         break;
     case 2:
         output += 'Your ';
         break;
     case 3:
         output += 'Name ';
         break;
     case 4:
         output += '?';
         console.log(output);
         break;
     case 5:
         output += '!';
         console.log(output);
         break;
     default:
         console.log('Please pick a number form 0 to 5!');
 }