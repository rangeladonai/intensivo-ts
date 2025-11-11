import PersonInterface from "../interfaces/PersonInterface";
import PersonCNPJ from "./PersonCNPJ";
import PersonCPF from "./PersonCPF";

export default class Account {
  person: PersonInterface;

  constructor(person: PersonInterface) {
    this.person = person;
  }

  getNameFromPerson(): string {
    return this.person.getName();
  }

  getTypeOfPerson(): string | void {
    if (this.person instanceof PersonCPF) {
      return "Fisica";
    }
    if (this.person instanceof PersonCNPJ) {
      return "Juridica";
    }
  }
}
