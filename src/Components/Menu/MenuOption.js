import React from "react";
import styles from "./MenuOption.module.css";
import { useState } from "react";
import { IoFishSharp } from "react-icons/io5";
import { GiChicken } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";
import { MdOutlineRestaurantMenu } from "react-icons/md";
function MenuOption(props) {
  const [activeItem, setActiveItem] = useState('all');
  function filterHandler(e) {
    setActiveItem(e.target.id);
    props.filterMeals(e.target.id);
  }
  console.log(activeItem);
  return (
    <ul className={styles.itemwrapper} >
      <li onClick={filterHandler} className={styles.item}>
        <button id="all" className={`${styles.itembtn} ${activeItem === 'all' ? styles.activebtn : null} `} >
          <MdOutlineRestaurantMenu className={styles.icon} />
          <p className={styles.title}> All </p> 
        </button>
        </li>
      <li onClick={filterHandler} className={styles.item} >
        <button id="fish" className={`${styles.itembtn} ${activeItem === 'fish' ? styles.activebtn : null} `}>
          <IoFishSharp className={styles.icon} />
          <p className={styles.title}> Fish </p> 
        </button>
      </li>
      <li onClick={filterHandler} className={styles.item}>
        <button id="chicken" className={`${styles.itembtn} ${activeItem === 'chicken' ? styles.activebtn : null} `}>
            <GiChicken className={styles.icon} />
            <p className={styles.title}> Chicken </p> 
        </button>
      </li>
      <li onClick={filterHandler} className={styles.item}>
        <button id="vegetarian"  className={`${styles.itembtn} ${activeItem === 'vegetarian' ? styles.activebtn : null} `}>
          <RiPlantFill className={styles.icon} />
          <p className={styles.title}> Vegetarian </p> 
        </button>
      </li>
    </ul>);
}

export default MenuOption;
