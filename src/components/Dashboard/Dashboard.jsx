import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../../context/AuthContext";
import Counter from "../Counter/Counter";
import UserDataForm from "../UserDataForm/UserDataForm";
import TextEditor from "../TextEditor/TextEditor";
import styles from "./Dashboard.module.css";
import LoginScreen from "../Screen/LoginScreen";

const Dashboard = () => {
  const { isUserAuthenticated } = useAuth();

  const { isAuthenticated } = useAuth0();
  console.log("isUserAuthenticated : => ", isAuthenticated);

  return (
    <>
      {isUserAuthenticated ? (
        <div className={styles.dashboardcontainer}>
          <div className={styles.upperDiv}>
            <div className={styles.leftpanel}>
              <Counter />
            </div>
            <div className={styles.rightpanel}>
              <UserDataForm />
            </div>
          </div>
          <div className={styles.lowerDiv}>
            <div className={styles.editorcontainer}>
              <TextEditor />
            </div>
          </div>
        </div>
      ) : (
        <LoginScreen />
      )}
    </>
  );
};

export default Dashboard;
