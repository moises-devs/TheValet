import React from "react";
import styles from "./MenuItem.module.css";
export default function MenuItem(props) {
  return (
    <li className={styles.wrapper}>
      <div className={styles.imgwrapper}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={styles.contentwrapper}>
        <h3 className={styles.name}> {props.name} </h3>
      </div>
    </li>
  );
}
