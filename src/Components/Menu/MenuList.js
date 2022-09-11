import React from 'react'
import styles from "./MenuList.module.css";
import MenuItem from "./MenuItem";
export default function MenuList(props) {
  return (
    <ul className={styles.wrapper}>
      {props.meals.map(meal => <MenuItem key={meal.idMeal} id={meal.idMeal} isPasta={meal.pasta} name={meal.strMeal} img={meal.strMealThumb}/> )}
    </ul>
  )
}
