"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PersonCNPJ_1 = __importDefault(require("./PersonCNPJ"));
const PersonCPF_1 = __importDefault(require("./PersonCPF"));
class Account {
    constructor(person) {
        this.person = person;
    }
    getNameFromPerson() {
        return this.person.getName();
    }
    getTypeOfPerson() {
        if (this.person instanceof PersonCPF_1.default) {
            return "Fisica";
        }
        if (this.person instanceof PersonCNPJ_1.default) {
            return "Juridica";
        }
    }
}
exports.default = Account;
