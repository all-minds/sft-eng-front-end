import { showNotification } from "@mantine/notifications";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  User,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../utils/config";

export default function useAuth() {
  const [loading, setLoading] = useState(false);

  const createUser = async ({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }): Promise<User> => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(user, { displayName: name });

      showNotification({
        message: "Sua conta foi criada com sucesso!",
        color: "green",
      });

      await login({ email, password });

      return user;
    } catch (err) {
      showNotification({
        message: "Não foi possível criar conta neste momento!",
        color: "red",
      });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      showNotification({
        message: "Não foi possível logar com este usuário",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return { createUser, login, logout, loading };
}
