import React from "react";
import styles from "./LoginScreen.module.css";
import LoginButton from "../Buttons/LoginButton";

const LoginScreen = () => {
  return (
    <div className={styles.loginScreen}>
      <h1>Welcome to Upliance.AI</h1>
      <p>Please log in to access the dashboard.</p>
      <LoginButton />
    </div>
  );
};

export default LoginScreen;
