import { Owner } from "@/models/owner";

interface VendorOwner {
  id: string;
  email: string;
  name: string;
}

export class OwnerAdapter {
  static toRequest(owner: Owner): VendorOwner {
    return { ...owner };
  }
}
