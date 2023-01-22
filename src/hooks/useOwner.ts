import { OwnerAdapter } from "@/adapters/owner.adapter";
import { ensureNotNull } from "@/utils/ensure-not-null";
import { showNotification } from "@mantine/notifications";
import { User } from "firebase/auth";

const useOwner = () => {
  const createOwner = async (user: User) => {
    const token = await user.getIdToken();

    /** API REQUESTS */
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URI}/AddUserAsync`, {
        method: "POST",
        body: JSON.stringify(
          OwnerAdapter.toRequest({
            ...user,
            id: user.uid,
            name: ensureNotNull(user.displayName),
            email: ensureNotNull(user.email),
          })
        ),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': "application/json"
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
