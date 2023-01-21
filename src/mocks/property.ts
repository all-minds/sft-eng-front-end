import { faker } from "@faker-js/faker";
import Property from "@/models/property";

export function generateProperty(): Property {
  return new Property({
    id: faker.datatype.uuid(),
    city: faker.address.city(),
    number: faker.address.buildingNumber(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    street: faker.address.street(),
    ownerId: faker.datatype.uuid(),
    name: faker.company.name(),
    complement: faker.address.secondaryAddress(),
  });
}
