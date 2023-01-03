import React from "react";
import styles from "./Navigation.module.css";
import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Logo from "../../images/Backgrounds/—Pngtree—chef pig cartoon cute_6839717.png";
import { useScroll, motion, useSpring } from "framer-motion"; 
export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress)
  const displayMenuHandler = () => {
    setShowMenu((state) => !state);
  };

  let linkList = (
    <>
      <li className={styles["nav-link"]}>
        <HashLink to="#home" smooth
        >
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
    <motion.nav
    initial={{y:-100, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{duration:1}}
      className={` ${styles["link-wrapper"]} ${
        showMenu ? styles.activewrapper : null
      } `}
    >
    <motion.div style={{scaleX}} className={styles.progressBar}></motion.div>
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
    </motion.nav>
  );
}
