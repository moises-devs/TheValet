import React from "react";
import styles from "./MenuItem.module.css";
import { motion } from "framer-motion";

const itemVariant = {
  hidden:{
    opacity:0,
    x:'100vh',
  },
  show: {
    opacity:1,
    x:0,
    transition: {yoyo: 10}
  },
  exit : {
    opacity:0,
    x:'100vh',
  }
};

export default function MenuItem(props) {
  return (
    <motion.li className={styles.wrapper} variants={itemVariant}
    initial="hidden" animate="show" exit="exit">
      <div className={styles.imgwrapper}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={styles.contentwrapper}>
        <h3 className={styles.name}> {props.name} </h3>
      </div>
    </motion.li>
  );
}
