import { OwnerAdapter } from "@/adapters/owner.adapter";
import { useAuthContext } from "@/contexts/auth.context";
import { ensureNotNull } from "@/utils/ensure-not-null";
import { showNotification } from "@mantine/notifications";

const useOwner = () => {
  const { user } = useAuthContext();

  const createOwner = async () => {
    const nonNullableUser = ensureNotNull(user);
    const token = await nonNullableUser.getIdToken();

    /** API REQUESTS */
    try {
      await fetch(process.env.BASE_URI, {
        method: "POST",
        body: JSON.stringify(
          OwnerAdapter.toRequest({
            ...nonNullableUser,
            id: nonNullableUser.uid,
            name: ensureNotNull(nonNullableUser.displayName),
            email: ensureNotNull(nonNullableUser.email),
          })
        ),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      showNotification({
        message: "Não foi possível criar um owner!",
        color: "red",
      });

      throw err;
    }
  };

  return { createOwner };
};

export default useOwner;
