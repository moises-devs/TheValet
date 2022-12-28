import React, { useContext } from 'react'
import styles from "./Modal.module.css";
import { ModalContext } from '../../Context/ModalContext';
import {MdCancel } from "react-icons/md";
export default function Modal(props) {
  function closeModalHandler(e) {
    e.stopPropagation();
    props.clearImg();
    toggleModal();
  }
  const { toggleModal } = useContext(ModalContext);
  return (
    <div className={styles.modal} onClick={closeModalHandler}>
        <div className={styles['img-wrapper']}>
        <img src={props.src} alt={props.caption}/>
        <button onClick={closeModalHandler} className={styles.btn}>
          <MdCancel className={styles.icon}/>
        </button>
        </div>
    </div>
  )
}
