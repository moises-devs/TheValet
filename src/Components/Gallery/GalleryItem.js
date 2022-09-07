import React from 'react'
import styles from "./GalleryItem.module.css";
export default function GalleryItem(props) {
  return (
    <li className={styles['gallery-item']}>
        <figure className={styles['img-wrapper']}>
            <img src={props.src} alt="" />
            <figcaption>
                {props.caption}
            </figcaption>
        </figure>
    </li>
  )
}
