import React, {forwardRef} from "react";
import styles from "./Card.module.css";
export default forwardRef(function Card(props, ref) {
  return (
    <div className={styles.card} ref={ref}>
      <div className={styles["card-text"]}>{props.children}</div>
      <div className={styles["img-container"]}>
        <div className={styles["img-wrapper"]}>
          <img src={props.img1} alt="" />
        </div>
        <div className={`${styles['img-wrapper']} ${styles.extra}`}>
          <img src={props.img2} alt="" />
        </div>
      </div>
    </div>
  );
});