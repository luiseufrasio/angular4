class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    name() {
        return `${this.firstName} ${this.lastName}`;
    }
    whoAreYou() {
        return `Hi I'm ${this.name()}`;
    }
}
class Student extends Person {
    constructor(firstName, lastName, course) {
        super(firstName, lastName);
        this.course = "";
        this.course = course;
    }
    whoAreYou() {
        return `${super.whoAreYou()} and I'm studying ${this.course}`;
    }
}
let luis = new Student("Luis", "Teixeira", "Angular 4");
console.log(luis.whoAreYou());
