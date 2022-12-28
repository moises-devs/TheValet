import React from "react";
import styles from "./Navigation.module.css";
import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Logo from "../../images/Backgrounds/—Pngtree—chef pig cartoon cute_6839717.png";
export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const displayMenuHandler = () => {
    setShowMenu((state) => !state);
  };

  let linkList = (
    <>
      <li className={styles["nav-link"]}>
        <HashLink to="#home" smooth>
          Home
        </HashLink>
      </li>
      <li className={styles["nav-link"]}>
        <HashLink to="#menu" smooth>
          Menu
        </HashLink>
      </li>
      <li className={styles["nav-link"]}>
        <HashLink to="#reservation" smooth>
          Reservation
        </HashLink>
      </li>
      <li className={styles["nav-link"]}>
        <HashLink to="#contact" smooth>
          Contact
        </HashLink>
      </li>
    </>
  );
  return (
    <nav
      className={` ${styles["link-wrapper"]} ${
        showMenu ? styles.active : null
      } `}
    >
      <ul className={styles["links-container"]}>{linkList}</ul>
      <div className={styles.wrapper}>
        <div className={styles.logowrapper}>
          <img src={Logo} alt="chef logo" />
        </div>
        {!showMenu && (
          <GiHamburgerMenu
            onClick={displayMenuHandler}
            className={styles.burger}
          />
        )}
        {showMenu && (
          <AiOutlineClose
            onClick={displayMenuHandler}
            className={styles.burger}
          />
        )}
      </div>
    </nav>
  );
}
