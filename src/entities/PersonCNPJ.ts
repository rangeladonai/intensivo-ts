import PersonInterface from "../interfaces/PersonInterface";

//property decorator
function verifyCNPJSize(size: number) {
  return function (target: any, propertyKey: string) {
    let value: any;

    const getter = function () {
      return value;
    };

    const setter = function (newValue: any) {
      const text = String(newValue);
      if (text.length !== size) {
        throw new Error(
          `O valor da propriedade '${propertyKey}' deve ter exatamente ${size} caracteres. Recebido: ${text.length}`
        );
      }
      value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

export default class PersonCNPJ implements PersonInterface {
  name: string;
  age: number;
  @verifyCNPJSize(14)
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
