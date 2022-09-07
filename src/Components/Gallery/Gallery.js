import React from 'react'
import SectionCard from '../UI/SectionCard'
import styles from "./Gallery.module.css";
import GalleryItem from "./GalleryItem";
import dish0 from "../../images/Dishes/pexels-engin-akyurt-1527603.jpg";
export default function Gallery() {
  return (
    <SectionCard title={'Our Photo Gallery'} subtitle={'Discover'} transparent={true}>
        <ul className={styles['gallery-wrapper']}>
            <GalleryItem caption={'italian sausage'} src={dish0} />
        </ul>
    </SectionCard>
  )
}
