import Goal from "../models/goals_model.js";

// Récupérer tous les objectifs
export const getGoals = async () => {
  try {
    const goals = await Goal.find(); // Récupère tous les objectifs
    return goals;
  } catch (error) {
    console.error("Erreur lors de la récupération des objectifs :", error);
    throw error;
  }
};

// Définir ou mettre à jour un objectif
export const setGoal = async (goalData) => {
  try {
    // Vérifiez si un objectif existe déjà (globalement, sans utilisateur)
    let goal = await Goal.findOne();

    if (goal) {
      // Mettre à jour l'objectif existant
      goal.dailyCalories = goalData.dailyCalories;
      goal.dailyProteines = goalData.dailyProteines;
      goal.dailyGlucides = goalData.dailyGlucides;
      goal.dailyLipides = goalData.dailyLipides;
    } else {
      // Créer un nouvel objectif
      goal = new Goal(goalData);
    }

    await goal.save(); // Sauvegarde dans MongoDB
    return goal;
  } catch (error) {
    console.error("Erreur lors de la définition de l'objectif :", error);
    throw error;
  }
};