const normalPerson = {
    firstName: "Tarequr Rahman",
    lastName : "Sabbir",
    salary: 20000,

    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },

    chargeBill: function(amount){
        this.salary = this.salary - amount;
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

//normal person
normalPerson.chargeBill(500);
normalPerson.chargeBill(5500);
console.log("Normal salary: " + normalPerson.salary);

//hero person
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(7000);
console.log("Hero salary: " + heroPerson.salary);

/**Tree type of call back function
 * 1. bind
 * 2. call
 * 3. apply
 */
