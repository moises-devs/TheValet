import React from "react";
import styles from "./DetailItem.module.css";
export default function DetailItem(props) {
  return (
    <div className={styles.wrapper}>
      <lord-icon
        className={styles.icon}
        src={props.src}
        trigger={props.trigger}
        colors={props.colors}
        style={{ width: props.width, height: props.height }}
      ></lord-icon>
      <div className={styles.amount}>{props.amount}</div>
      <div className={styles.title}> {props.title}</div>
    </div>
  );
}
