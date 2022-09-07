import React from "react";
import styles from "./Menu.module.css";
import { useEffect, useState } from "react";
import MenuOption from "./MenuOption";
import MenuList from "./MenuList";
/* https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian */
export default function Menu() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [originalMeals, setOriginalMeals] = useState("");

  useEffect(() => {
    fetch(" https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        let updatedMeals = res.meals.map((meal) => {
          meal.pasta = false;
          let pastaNames = [
            "Alfredo",
            "linguine",
            "alfredo",
            "Lasange",
            "Pasta",
            "Spaghetti",
            "Penne",
          ];
          let veganKeyWords = ["Spinach", "Squash", "Vegan"];
          if (pastaNames.some((pasta) => meal.strMeal.includes(pasta))) {
            meal.pasta = true;
          }
          if (meal.strMeal.includes("Chicken")) {
            return { ...meal, contains: "chicken" };
          } else if (
            meal.strMeal.includes("prawn") ||
            meal.strMeal.includes("Salmon")
          ) {
            return { ...meal, contains: "fish" };
          } else if (
            veganKeyWords.some((word) => meal.strMeal.includes(word))
          ) {
            return { ...meal, contains: "vegetarian" };
          }
          return meal;
        });
        setMeals(updatedMeals);
        setOriginalMeals(updatedMeals);
        setIsLoading(false);
      });
  }, []);

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
    <section id="menu" className={styles.container}>
      <h2 className={styles.title}> Menu </h2>
      <div className={styles.options}>
        <MenuOption filterMeals={filterMealsHandler} />
      </div>
      <div className={styles.card}>
        {!isLoading && <MenuList meals={meals} />}
      </div>
    </section>
  );
}
