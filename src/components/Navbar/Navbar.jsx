import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import LoginButton from "../Buttons/LoginButton";
import LogoutButton from "../Buttons/LogoutButton";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.navcontainer}>
        <div className={styles.leftDiv}>
          <div className={styles.logo} onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon className={styles.menu} />
          </div>
          <div className={styles.logoTextDiv}>
            <Link
              to="/dashboard"
              className={styles.logoTextLink}
              onClick={closeMenu}
            >
              <h2 className={styles.logoText}>Upliance.AI</h2>
            </Link>
          </div>
        </div>
        {isOpen && (
          <div className={styles.dropdown}>
            <Link
              to="/counter"
              className={styles.dropdownItem}
              onClick={closeMenu}
            >
              Counter
            </Link>
            <Link
              to="/form"
              className={styles.dropdownItem}
              onClick={closeMenu}
            >
              User Form
            </Link>
            <Link
              to="/editor"
              className={styles.dropdownItem}
              onClick={closeMenu}
            >
              Text Editor
            </Link>
          </div>
        )}
        <div className={styles.authBtns}>
          <LoginButton />
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
