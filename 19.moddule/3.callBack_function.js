function explain_callback(name, age, work) {
    console.log('Hello ',name);
    console.log('Your age is ',age);
    work();
}


function design() {
    console.log('Design a web site using React.');
}

function devlop() {
    console.log('Devlop a applicastion using Laravel');
}

explain_callback('Tayebur Rahman Tipu',30,design);
explain_callback('Tarequr Rahman Sabbir',25,design);