"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("./entities/Account"));
const PersonCNPJ_1 = __importDefault(require("./entities/PersonCNPJ"));
const PersonCPF_1 = __importDefault(require("./entities/PersonCPF"));
const PessoaFisica = new PersonCPF_1.default("Mayra", 21, "maceansu@gmail.com");
const PessoaJuridica = new PersonCNPJ_1.default("Rangel", 21, 11191919191);
const contaBancaria = new Account_1.default(PessoaJuridica);
console.log(contaBancaria.getTypeOfPerson());
