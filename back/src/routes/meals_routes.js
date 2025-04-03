import express from "express";
import Meal from "../models/meals_model.js";
import { calculateDailyTotals } from "../services/meals_services.js";
import { generateRecommendations } from "../services/recommandations_services.js";


const mealsRoutes = express.Router();

mealsRoutes.post("/", async (req, res) => {
    try {
      const { name, calories, proteines, glucides, lipides } = req.body;
  
      // Vérifiez que toutes les données nécessaires sont présentes
      if (!name || !calories || !proteines || !glucides || !lipides) {
        return res.status(400).json({ error: "Données manquantes ou invalides" });
      }
  
      // Créez un nouvel objet Meal
      const meal = new Meal({
        name,
        calories: Number(calories),
        proteines: Number(proteines),
        glucides: Number(glucides),
        lipides: Number(lipides),
      });
  
      await meal.save(); // Sauvegarde dans MongoDB
      res.status(201).json(meal);
    } catch (error) {
      console.error("Erreur lors de l'ajout du repas :", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  });

//  Récupérer tous les repas
mealsRoutes.get("/", async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

mealsRoutes.get("/recommandations", async (req, res) => {
    try {
      const goals = req.body; // Objectifs nutritionnels envoyés dans le corps de la requête
      if (!goals || !goals.calories || !goals.proteines || !goals.glucides || !goals.lipides) {
        return res.status(400).json({ error: "Objectifs nutritionnels manquants ou incomplets" });
      }
  
      const recommendations = await generateRecommendations(goals);
      res.json(recommendations);
    } catch (error) {
      console.error("Erreur lors de la génération des recommandations :", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  });
  
  mealsRoutes.get("/totals", async (req, res) => {
    try {
      const totals = await calculateDailyTotals();
      res.json(totals);
    } catch (error) {
      console.error("Erreur lors du calcul des totaux journaliers :", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  });
export default mealsRoutes;