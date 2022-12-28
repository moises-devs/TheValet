import React from 'react'
import SectionCard from '../UI/SectionCard'
import styles from "./Gallery.module.css";
import GalleryItem from "./GalleryItem";
import {MenuContext} from '../../Context/MenuContext';
import { useContext } from 'react';
import ModalContextProvider from '../../Context/ModalContext';
export default function Gallery() {
  const { originalMeals } = useContext(MenuContext);
  return (
    <SectionCard title={'Our Photo Gallery'} subtitle={'Discover'} transparent={true}>
      <ModalContextProvider>
      <ul className={`${styles['gallery-wrapper']}`}>
          {originalMeals.map(item => <GalleryItem id={item.idMeal} key={item.idMeal} caption={item.strMeal} src={item.strMealThumb} /> )}
        </ul>
      </ModalContextProvider>
    </SectionCard>
  )
}
