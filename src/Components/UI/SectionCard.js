import React from 'react'
import styles from "./SectionCard.module.css";
export default function SectionCard(props) {
  return (
    <div className={`${styles.card} ${props.transparent ? styles.cardTransparent : null}`}> 
    <p className={styles.subtitle}> {props.subtitle} </p>
    <h2 className={styles.title}>{props.title}</h2>
    {props.children} </div>
  )
}
