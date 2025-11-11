import PersonInterface from "../interfaces/PersonInterface";
class PersonCPF implements PersonInterface {
  name: string;
  age: number;

  constructor(name: string, age: number, cpf: string) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

export default PersonCPF;
