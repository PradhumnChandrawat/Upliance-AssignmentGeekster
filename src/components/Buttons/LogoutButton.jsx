import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./AuthButtons.module.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <>
      <button
        className={styles.button}
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        LogOut
      </button>
    </>
  );
};

export default LogoutButton;
