import React, { useContext } from "react";
import styles from "./Menu.module.css";
import MenuOption from "./MenuOption";
import MenuList from "./MenuList";
import { MenuContext } from "../../Context/MenuContext";
import { MoonLoader } from "react-spinners";
/* https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian */
export default function Menu() {
  const { meals, originalMeals,setMeals, isLoading } = useContext(MenuContext);

  function filterMealsHandler(id) {
    if (id === "fish") {
      let filterMeals = originalMeals.filter(
        (meal) => meal.contains === "fish"
      );
      setMeals(filterMeals);
    } else if (id === "vegetarian") {
      console.log("inside vege");
      let filterMeals = originalMeals.filter(
        (meal) => meal.contains === "vegetarian"
      );
      setMeals(filterMeals);
    } else if (id === "chicken") {
      let filterMeals = originalMeals.filter(
        (meal) => meal.contains === "chicken"
      );
      setMeals(filterMeals);
    } else {
      setMeals(originalMeals);
    }
  }

  return (
    <section id="menu" className={`${styles.container}`}>
      <h2 className={styles.title}> Menu </h2>
      <div className={styles.options}>
        <MenuOption filterMeals={filterMealsHandler} />
      </div>
      <div className={`${styles.card} animate`}>
        <MoonLoader color={"#feba1c"} loading={isLoading} cssOverride={{
          height:"50vh",
          width:'100%',
        }} />
        {!isLoading && <MenuList meals={meals} />}
      </div>
    </section>
  );
}
