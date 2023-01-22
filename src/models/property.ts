export default class Property {
  readonly id: string;
  readonly ownerId: string;
  readonly name: string;
  readonly street: string;
  readonly number: string;
  readonly city: string;
  readonly state: string;
  readonly zipCode: string;
  readonly complement?: string;
  readonly active: boolean;

  constructor(init: Property) {
    this.id = init.id;
    this.ownerId = init.ownerId;
    this.name = init.name;
    this.street = init.street;
    this.number = init.number;
    this.city = init.city;
    this.state = init.state;
    this.zipCode = init.zipCode;
    this.complement = init.complement;
    this.active = init.active;
  }
}

export type NewProperty = Omit<Property, "id" | "active">;
