import React from 'react'
import styles from "./ReviewCard.module.css";
export default function ReviewCard(props) {
  return (
    <div className={styles.wrapper}>
        <div className={styles['img-wrapper']}>
            <img src={props.src} alt={props.name}/>
        </div>
        <p className={styles.quote}>
            {props.quote}
        </p>
        <p className={styles.name}>
            {props.name}
        </p>
    </div>
  )
}
