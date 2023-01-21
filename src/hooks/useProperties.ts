import { PropertyAdapter, VendorProperty } from "@/adapters/property.adapter";
import { useAuthContext } from "@/contexts/auth.context";
import Property, { NewProperty } from "@/models/property";
import { ensureNotNull } from "@/utils/ensure-not-null";
import { showNotification } from "@mantine/notifications";

const useProperties = () => {
  const { user } = useAuthContext();

  const fetchAllProperties = async () => {
    const nonNullableUser = ensureNotNull(user);
    const token = await nonNullableUser.getIdToken();

    /** API REQUESTS */
    try {
      const { json } = await fetch(`${process.env.BASE_URI}/properties`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = (await json()) as VendorProperty[];

      return data.map((value) => PropertyAdapter.fromRequest(value));
    } catch (err) {
      showNotification({
        message: "Não foi possível listar as propriedades owner!",
        color: "red",
      });

      throw err;
    }
  };

  const createProperty = async (newProperty: NewProperty) => {
    const nonNullableUser = ensureNotNull(user);
    const token = await nonNullableUser.getIdToken();

    /** API REQUESTS */
    try {
      await fetch(`${process.env.BASE_URI}/properties`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(PropertyAdapter.toRequest(newProperty)),
      });
    } catch (err) {
      showNotification({
        message: "Não foi possível listar as propriedades owner!",
        color: "red",
      });

      throw err;
    }
  };

  const updateProperty = async (property: Property) => {
    const nonNullableUser = ensureNotNull(user);
    const token = await nonNullableUser.getIdToken();

    /** API REQUESTS */
    try {
      await fetch(`${process.env.BASE_URI}/properties`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(PropertyAdapter.toRequest(property)),
      });
    } catch (err) {
      showNotification({
        message: "Não foi possível listar as propriedades owner!",
        color: "red",
      });

      throw err;
    }
  };

  return { fetchAllProperties, createProperty, updateProperty };
};

export default useProperties;
