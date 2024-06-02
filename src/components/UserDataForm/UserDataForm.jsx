import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./UserDataForm.module.css";

function UserDataForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [isDirty, setDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = "";
      }
    };
    // " beforeunload" is an inbuilt event in web browsers. It's part of the standard JavaScript API for handling events that occur right before the user is about to navigate away from a page or close a browser tab.
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = uuidv4();
    localStorage.setItem(userId, JSON.stringify(formData));
    alert("Data saved!");
    setFormData({ name: "", address: "", email: "", phone: "" });
    setDirty(false);
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.heading}>User Form</h2>
          {Object.keys(formData).map((key) => (
            <div key={key} className={styles.inputWrapper}>
              <input
                className={styles.input}
                type={key === "email" ? "email" : "text"}
                id={key}
                name={key}
                value={formData[key]}
                required
                autoComplete="off"
                onChange={handleChange}
              />
              <label htmlFor={key}>Enter your {key}</label>
              <div className={styles.underline}></div>
            </div>
          ))}
          <div className={styles.btnContainer}>
            <button className={styles.button} type="submit">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserDataForm;
