export class Owner {
  readonly id: string;
  // readonly cpf:
  readonly name: string;
  readonly email: string;

  constructor(init: Owner) {
    this.id = init.id;
    this.email = init.email;
    this.name = init.name;
  }
}
