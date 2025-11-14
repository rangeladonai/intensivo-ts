import PersonInterface from "../interfaces/PersonInterface";
import PersonCNPJ from "./PersonCNPJ";
import PersonCPF from "./PersonCPF";

function log() {
  return (target: any) => {
    console.log(`executando - ${target}`);
  };
}

@log()
export default class Account {
  person: PersonInterface;

  constructor(person: PersonInterface) {
    this.person = person;
  }

  public getNameFromPerson(): string {
    return this.person.getName();
  }

  public getTypeOfPerson(): string | void {
    if (this.person instanceof PersonCPF) {
      return "Fisica";
    }
    if (this.person instanceof PersonCNPJ) {
      return "Juridica";
    }
  }
}
