import React from 'react'
import styles from "./ChefCard.module.css";
import { BsFacebook } from "react-icons/bs"
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
export default function ChefCard(props) {
  return (
    <div className={styles.container}>
        <div className={styles['img-wrapper']}>
            <img src={props.src} alt=""/>
        </div>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.position}>{props.position}</p>
        <p className={styles.description}>{props.description}</p>
        <ul className={styles['social-list']}>
            <li className={styles['social-item']}>
                <BsFacebook/>
            </li>
            <li className={styles['social-item']}>
                <AiFillTwitterCircle/>
            </li>
            <li className={styles['social-item']}>
                <AiFillInstagram/>
            </li>
        </ul>
    </div>
  )
}
