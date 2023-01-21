import { User, onAuthStateChanged } from "firebase/auth";
import { createContext, useCallback, useContext, useState } from "react";
import { auth } from "@/utils/config";

interface AuthContextProps {
  user: User | null;
  loginStatus: "logged" | "unknown" | "unlogged";
  setUser: (user: User | null) => void;
  getUser: () => User | null;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loginStatus, setLogginStatus] = useState<
    "logged" | "unknown" | "unlogged"
  >("unknown");

  onAuthStateChanged(auth, (user) => {
    setUser(user);

    if (!user) {
      setLogginStatus("unlogged");
    }

    if (user) {
      setLogginStatus("logged");
    }
  });

  const getUser = useCallback(() => user, [user]);

  return (
    <AuthContext.Provider value={{ user, loginStatus, setUser, getUser }}>
      <>{children}</>
    </AuthContext.Provider>
  );
};
