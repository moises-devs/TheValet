import React from 'react'
import styles from "./Input.module.css";
export default function Input(props) {
  return (
    <> <label className={styles.label} htmlFor={props.id}></label>
        <input  className={styles.input} min={props.min} max={props.max} required={props.required} type={props.type} id={props.id} placeholder={props.placeholder} />
    </>
  )
}
