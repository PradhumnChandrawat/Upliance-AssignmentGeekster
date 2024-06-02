import React, {
  createContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const { isAuthenticated, user, isLoading, loginWithRedirect, logout } =
    useAuth0();
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  //   console.log("isAuthenticated from context = ", isAuthenticated);
  //   console.log("isUserAuthenticated from context = ", isUserAuthenticated);

  useEffect(() => {
    setIsUserAuthenticated(isAuthenticated);
  }, [isAuthenticated]);

  const providerValue = useMemo(
    () => ({
      isUserAuthenticated,
      user,
      isLoading,
      loginWithRedirect,
      logout,
    }),
    [isUserAuthenticated, user, isLoading, loginWithRedirect, logout]
  );

  console.log("Context values provided:", providerValue);

  return (
    <AuthContext.Provider value={providerValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
