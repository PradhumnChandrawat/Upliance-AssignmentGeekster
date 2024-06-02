import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Counter from "../Counter/Counter";
import UserDataForm from "../UserDataForm/UserDataForm";
import TextEditor from "../TextEditor/TextEditor";
import styles from "./Dashboard.module.css";
import LoginScreen from "../Screen/LoginScreen";

const Dashboard = () => {
  const contexState = useContext(AuthContext);

  // console.log("context state ", contexState);

 

  if (!contexState.isUserAuthenticated) {
    return <LoginScreen />;
  }
  return (
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
  );
};

export default Dashboard;
