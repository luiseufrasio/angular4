/// <reference path="./typings/index.d.ts" />

let decimal: number = 6;
let done: boolean = false;
let color: string = "blue";

let list: number[] = [1, 2, 3];
let Array<number> = [1, 2, 3];

let fun: Function = () => console.log("Hello");

function returnNumber(): number {
    return 1;
}

enum Direction {
    Up,
    Down,
    Left,
    Right
}

let go: Direction;
go = Direction.Up;

class Person {};

let person: Person;
let person: Person[];

let notSure: any = 1;
notSure = "hello";

function returnNothing(): void {
    console.log("Moo");
}

let value: any = "Asim Hussain";
(<string>value).length;








class Audio {}
class Video {}
class Link {}
class Text {}

class Post<T> {
    content: T;
}

let videoPost: Post<Video>;