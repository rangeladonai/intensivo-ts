"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
const Rangel = new Person("Rangel", 21);
console.log(Rangel.getName());
console.log(Rangel.getAge());
