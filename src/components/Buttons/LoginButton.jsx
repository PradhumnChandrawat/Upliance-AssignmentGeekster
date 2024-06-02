import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./AuthButtons.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button className={styles.button} onClick={() => loginWithRedirect()}>
        LogIn
      </button>
    </>
  );
};

export default LoginButton;
