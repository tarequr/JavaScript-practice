var speech = "Hello everyone. I'm Tarequr Rahman Sabbir. I'm web devloper and designer.";

var count = 0;
for (var i = 0; i < speech.length; i++) {
    var char = speech[i];

    if (char == " ") {
        count++;
    }
    
}
count++;
console.log(count);

console.log("Another part: ");


var talk = "My father          was     a Armay. He was a      engineer. My mother is a Home     Maker";

var count = 0;
for (var i = 0; i < talk.length; i++) {
    var character = talk[i];

    if (character == " " && talk[i-1] != " ") {
        count++;
    }
    
}
count++;
console.log(count);