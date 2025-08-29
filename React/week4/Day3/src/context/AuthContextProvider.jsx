import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({
    user: "",
    email: "",
  });
  const [load, setLoad] = useState(false);

  const login = async () => {
    setLoad(true);
    await new Promise((res, rej) => setTimeout(res, 1200));

    setAuth({
      user: "Himanshu Dhammeriya",
      email: "himan30051999@gmail.com",
    });
    setLoad(false);
  };
  const logout = async () => {
    setLoad(true);
    await new Promise((res, rej) => setTimeout(res, 1200));

    setAuth({
      user: "",
      email: "",
    });
    setLoad(false);
  };
  return (
    <AuthContext.Provider value={{ auth, login, logout, load }}>
      {children}
    </AuthContext.Provider>
  );
}
