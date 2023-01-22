import Property, { NewProperty } from "@/models/property";

export interface VendorProperty {
  id: string;
  owner_id: string;
  name: string;
  street: string;
  number: string;
  city: string;
  state: string;
  zip_code: string;
  complement?: string;
  active: boolean;
}

export type NewVendorProperty = Omit<VendorProperty, "id" | "active">;

export class PropertyAdapter {
  static toRequest(
    property: NewProperty | Property
  ): NewVendorProperty | VendorProperty {
    return {
      ...property,
      owner_id: property.ownerId,
      zip_code: property.zipCode,
    };
  }

  static fromRequest({
    owner_id,
    zip_code,
    ...property
  }: VendorProperty): Property {
    return new Property({
      ...property,
      ownerId: owner_id,
      zipCode: zip_code,
      active: property.active ?? true,
    });
  }
}
