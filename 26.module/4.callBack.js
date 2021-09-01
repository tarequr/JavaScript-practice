const normalPerson = {
    firstName: "Tarequr Rahman",
    lastName : "Sabbir",
    salary: 20000,

    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },

    chargeBill: function(amount, tips, tax){
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: "Rafin",
    lastName: "Hasan",
    salary: 40000
}

const friendlyPerson = {
    firstName: "Raisan",
    lastName: "Hasan",
    salary: 30000
}

console.log(normalPerson.firstName, normalPerson.lastName);

normalPerson.chargeBill.apply(heroPerson, [900, 100, 40]);
normalPerson.chargeBill.apply(heroPerson, [900, 30, 20]);
console.log("Hero Person present salary: " + heroPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [900, 100, 40]);
normalPerson.chargeBill.apply(friendlyPerson, [900, 30, 20]);
console.log("Friendly Person present salary: " + friendlyPerson.salary);

console.log("Normal Person present salary: " + normalPerson.salary);

/**Tree type of call back function
 * 1. bind
 * 2. call
 * 3. apply
 */