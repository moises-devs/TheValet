import React, {useState, useEffect} from "react";

export const MenuContext = React.createContext({});


export default function MenuContextProvider({children}) {
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

  return (
    <MenuContext.Provider value={{
        meals,
        isLoading,
        setMeals,
        originalMeals
    }}>
        {children}
    </MenuContext.Provider> 
    );
}

