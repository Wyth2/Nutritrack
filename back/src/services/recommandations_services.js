import Meal from "../models/meals_model.js";

export const generateRecommendations = async ( goals) => {
  const meals = await Meal.find();
  const recommendations = meals.filter((meal) => {
    return (
      meal.calories <= goals.calories &&
      meal.proteines <= goals.proteines &&
      meal.glucides <= goals.glucides &&
      meal.lipides <= goals.lipides
    );
  });
  return recommendations;
};