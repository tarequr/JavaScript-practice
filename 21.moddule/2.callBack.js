function welcomeGuest(name, greetHandler) {
    greetHandler(name);
}

function greetMorning(name) {
    console.log('Good Morning.', name);
}

function greetEvening(name) {
    console.log('Good Evening.', name);
}

function greetNight(name) {
    console.log('Good Night.', name);
}

const guestName = 'Habibur Rahman.';
welcomeGuest(guestName, greetMorning);
welcomeGuest('Tayebur Rahman Tipu', greetEvening);
welcomeGuest('Tarequr Rahman Sabbir', greetNight);

welcomeGuest('Farida Rahman', function(name){
    console.log('Cheif Guest.',name);
});

/*
    //event call back function
    function callBack() {
        console.log('It is call back function.');
    }

    document.getElementById('call-back').addEventListener('click', callBack);
*/