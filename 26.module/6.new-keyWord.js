class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.salary    = salary;
    }
}

const personOne = new Person('Tarequr', 'Rahman', 20000);
console.log(personOne);

const personTwo = new Person('Tayebur', 'Rahman', 30000);
console.log(personTwo);