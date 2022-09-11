import React from "react";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.wrapper} id={"contact"}>
    <div className={styles.container}>
      <div className={styles.location}>
        <p className={styles.heading}>Location</p>
        <p> 9400 S Normandie Ave #14 Los Angeles, California(CA), 90044</p>
      </div>
      <div className={styles.hours}>
        <p className={styles.heading}>Hours</p>
        <p>Monday-Friday 7AM - 11AM (Breakfast) 11AM - 10PM (Lunch/Dinner)</p>
        <p>SATURDAY / SUNDAY 8AM - 1PM (Brunch) 1PM - 9PM (Lunch/Dinner)</p>
      </div>
    </div>
    <div className={styles.copyrightwrapper}>
        <p>
            CopyRight 2022 © Made by Moises
        </p>
    </div>
    </div>
  );
}
