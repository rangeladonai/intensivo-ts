import PersonInterface from "../interfaces/PersonInterface";

export default class PersonCNPJ implements PersonInterface {
  name: string;
  age: number;
  cnpj: number;

  constructor(name: string, age: number, cnpj: number) {
    this.name = name;
    this.age = age;
    this.cnpj = cnpj;
  }

  getAge(): number {
    return this.age;
  }

  getName(): string {
    return this.name;
  }
}
