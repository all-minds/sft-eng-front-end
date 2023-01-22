import { Owner } from "@/models/owner";

interface VendorOwner {
  Id: string;
  Email: string;
  Name: string;
  Cpf: string;
}

type NewVendorOwner = VendorOwner;

export class OwnerAdapter {
  static toRequest(owner: Owner): NewVendorOwner {
    return { Id: owner.id, Email: owner.email, Name: owner.name, Cpf: "Testing" };
  }
}
