import React from "react";
import styles from "./Card.module.css";
import { motion } from "framer-motion";
const cardVariant = {
  hidden: {
    opacity:0,
    x:'-100vh',
  },
  show:{
    opacity:1,
    x:0,
    transition:{
      delay:2
    }
  }
};
export default function Card(props) {
  return (
    <motion.div className={styles.card} variants={cardVariant} animate="show" initial="hidden" >
      <div className={styles["card-text"]}>{props.children}</div>
      <div className={styles["img-container"]}>
        <div className={styles["img-wrapper"]}>
          <img src={props.img1} alt="" />
        </div>
        <div className={`${styles['img-wrapper']} ${styles.extra}`}>
          <img src={props.img2} alt="" />
        </div>
      </div>
    </motion.div>
  );
  };
