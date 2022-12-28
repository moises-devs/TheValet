import React, {useContext, useEffect, useState} from 'react'
import styles from "./GalleryItem.module.css";
import Modal from '../UI/Modal';
import { ModalContext } from '../../Context/ModalContext';
export default function GalleryItem(props) {
  const [displayImg, setDisplayImg] = useState(false);
  const {showModal, toggleModal} = useContext(ModalContext);
  function modalHandler(e) {
    setDisplayImg(prevState => !prevState);
    toggleModal();
  }
  function toggleDisplay() {
    setDisplayImg(prevState => !prevState);
  }
  useEffect(() => {
    if (showModal) {
      document.querySelector('body').style.overflow = 'hidden';
    }
    else {
      document.querySelector('body').style.overflow = 'visible';
    }

  },[displayImg, showModal])
  return ( <>
    <li  id={props.id} onClick={modalHandler} className={styles['gallery-item']}>
        <figure className={styles['img-wrapper']}>
            <img src={props.src} alt="" />
            <figcaption>
                {props.caption}
            </figcaption>
        </figure>
    </li>
    {showModal && displayImg && <Modal src={props.src} caption={props.caption} clearImg={toggleDisplay}/>}
    </>
  )
}
