import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isAuthenticated, user, isLoading, loginWithRedirect, logout } =
    useAuth0();
  const [isUserAuthenticated, setIsUserAuthenticated] =
    useState(isAuthenticated);
  console.log("isAuthenticated from context = ", isAuthenticated);
  console.log("isUserAuthenticated from context = ", isUserAuthenticated);
  useEffect(() => {
    setIsUserAuthenticated(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isUserAuthenticated,
        user,
        isLoading,
        loginWithRedirect,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
