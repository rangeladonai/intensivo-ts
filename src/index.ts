import Account from "./entities/Account";
import PersonCNPJ from "./entities/PersonCNPJ";
import PersonCPF from "./entities/PersonCPF";

const PessoaFisica: PersonCPF = new PersonCPF(
  "Mayra",
  21,
  "maceansu@gmail.com"
);

const PessoaJuridica: PersonCNPJ = new PersonCNPJ("Rangel", 21, 11191919191);

const contaBancaria = new Account(PessoaFisica);

console.log(contaBancaria.getTypeOfPerson());
