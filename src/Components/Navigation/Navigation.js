import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import {AiOutlineCloseCircle } from "react-icons/ai"
import { useState } from "react";
export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const displayMenuHandler = () => {
    setShowMenu((state) => !state);
  };
  let linkList = (
    <>
      <li className={styles.navlink}>
        <Link to="/"> Home </Link>
      </li>
      <li className={styles.navlink}>
        <HashLink to="#menu" smooth>
          Menu
        </HashLink>
      </li>
      <li className={styles.navlink}>
        <HashLink to="#reservation" smooth>
          Reservation
        </HashLink>
      </li>
      <li className={styles.navlink}>
        <HashLink to="#contact" smooth>
          Contact
        </HashLink>
      </li>
    </>
  );
  return (
    <nav>
      <p> logo here </p>
      <ul className={styles["links-container"]}>{linkList}</ul>
      <GiHamburgerMenu onClick={displayMenuHandler} className={styles.burger} />
      {showMenu && (
        <div
          className={` ${styles["link-wrapper"]} ${
            showMenu ? styles.active : null
          } `}
        >   
            <AiOutlineCloseCircle className={styles.closeIcon} onClick={displayMenuHandler}/>
          {linkList}
        </div>
      )}
    </nav>
  );
}
