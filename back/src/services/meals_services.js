import Meal from "../models/meals_model.js";

export const calculateDailyTotals = async () => {
    const meals = await Meal.find();
    const totals = meals.reduce(
      (acc, meal) => {
        acc.calories += meal.calories || 0;
        acc.proteines += meal.proteines || 0;
        acc.glucides += meal.glucides || 0;
        acc.lipides += meal.lipides || 0;
        return acc;
      },
      { calories: 0, proteines: 0, glucides: 0, lipides: 0 }
    );
    return totals;
  };

export const getMeals = async () => {
  try {
    const meals = await Meal.find(); // Récupérer tous les repas depuis MongoDB
    return meals;
  } catch (error) {
    console.error("Erreur lors de la récupération des repas :", error);
    throw error;
  }
};

export const addMeal = async (mealData) => {
  try {
    const meal = new Meal(mealData);
    await meal.save(); // Sauvegarde dans MongoDB
    return meal;
  } catch (error) {
    console.error("Erreur lors de l'ajout du repas :", error);
    throw error;
  }
};