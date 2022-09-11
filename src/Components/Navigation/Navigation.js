import React from "react";
import styles from "./Navigation.module.css";
import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
export default function Navigation() {
  const navRef = useRef();

  const [showMenu, setShowMenu] = useState(false);
  const displayMenuHandler = () => {
    setShowMenu((state) => !state);
  };

  useEffect(() => {
    gsap.to(navRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 4,
      ease: "circ.out",
    });
  });

  let linkList = (
    <>
      <li className={styles['nav-link']}>
        <HashLink to="#home" smooth>
          Home
        </HashLink>
      </li>
      <li className={styles['nav-link']}>
        <HashLink to="#menu" smooth>
          Menu
        </HashLink>
      </li>
      <li className={styles['nav-link']}>
        <HashLink to="#reservation" smooth>
          Reservation
        </HashLink>
      </li>
      <li className={styles['nav-link']}>
        <HashLink to="#contact" smooth>
          Contact
        </HashLink>
      </li>
    </>
  );
  return (
    <nav ref={navRef}>
      <p> logo here </p>
      <ul className={styles["links-container"]}>{linkList}</ul>
      <GiHamburgerMenu onClick={displayMenuHandler} className={styles.burger} />
      {showMenu && (
        <div
          className={` ${styles["link-wrapper"]} ${
            showMenu ? styles.active : null
          } `}
        >
          <AiOutlineCloseCircle
            className={styles['close-icon']}
            onClick={displayMenuHandler}
          />
          {linkList}
        </div>
      )}
    </nav>
  );
}
