"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PersonCNPJ {
    constructor(name, age, cnpj) {
        this.name = name;
        this.age = age;
        this.cnpj = cnpj;
    }
    getAge() {
        return this.age;
    }
    getName() {
        return this.name;
    }
}
exports.default = PersonCNPJ;
