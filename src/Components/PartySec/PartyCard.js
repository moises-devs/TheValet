import React from 'react'
import styles from "./PartyCard.module.css";
export default function PartyCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles['img-wrapper']}>
        <img src={props.img} alt='' />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>
          {props.name}
        </p>
        <p className={styles.location}>
          Los Angels, CA
        </p>
        <p className={styles.time}>
          {props.time}
        </p>
        <p>
          Buy tickets Now
        </p>
      </div>
    </div>
  )
}
