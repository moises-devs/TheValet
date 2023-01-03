import React from 'react'
import styles from "./MenuList.module.css";
import MenuItem from "./MenuItem";
import { AnimatePresence } from 'framer-motion';
export default function MenuList(props) {
  return (
    <AnimatePresence>
    <ul className={styles.wrapper}>
      {props.meals.map(meal => <MenuItem key={meal.idMeal} id={meal.idMeal} isPasta={meal.pasta} name={meal.strMeal} img={meal.strMealThumb}/> )}
    </ul>
    </AnimatePresence>
  )
}
