function Student(config) {
    return function(target) {
        Object.defineProperty(target.prototype, 'course', {value: () => config.course})
    }
}

@Student({
    course: "Angular 4"
})
class Person {
    constructor(public firstName, public lastName) { }
}

let luis = new Person("Luis", "Teixeira");
console.log(luis.course());