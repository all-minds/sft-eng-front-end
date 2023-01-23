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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URI}/GetAllPropertiesAsync`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = (await response.json()) as VendorProperty[];

      return data.map((value) => PropertyAdapter.fromRequest(value));
    } catch (err) {
      showNotification({
        message: "Não foi possível listar as propriedades owner!",
        color: "red",
      });

      throw err;
    }
  };

  const createProperty = async (newProperty: Omit<NewProperty, "ownerId">) => {
    const nonNullableUser = ensureNotNull(user);
    const token = await nonNullableUser.getIdToken();

    /** API REQUESTS */
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URI}/AddPropertyAsync`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          PropertyAdapter.toRequest({
            ...newProperty,
            ownerId: nonNullableUser.uid,
          })
        ),
      });
      showNotification({
        message: "Propriedade criada com sucesso!",
        color: "green",
      });
    } catch (err) {
      showNotification({
        message: "Não foi possível criar propriedade!",
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
      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URI}/UpdatePropertyAsync/${property.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(PropertyAdapter.toRequest(property)),
        }
      );
      showNotification({
        message: "Propriedade atualizada com sucesso!",
        color: "green",
      });
    } catch (err) {
      showNotification({
        message: "Não foi possível atualizar propriedade!",
        color: "red",
      });

      throw err;
    }
  };

  return { fetchAllProperties, createProperty, updateProperty };
};

export default useProperties;
