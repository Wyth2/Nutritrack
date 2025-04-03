import { renderDashboard } from "./components/dashboard.js";
import { renderMealForm } from "./components/form.js";
import { renderRecommendations } from "./components/dashboard.js";
import { renderStatistics } from "./components/statistics.js";
import { getTotals, getRecommendations, addMeal } from "./services/api.js";
import { calculateProgress, calculateTotals } from "./utils/functionnals.js";

const init = async () => {
  const goals = { calories: 2000, proteines: 150, glucides: 250, lipides: 70 }; // Exemple d'objectifs

  // Récupérer les totaux journaliers
  const totals = await getTotals();
  renderDashboard(totals, goals);

  // Afficher le formulaire pour ajouter un repas
  renderMealForm();

  // Afficher les recommandations
  renderRecommendations( goals);

  // Récupérer les repas et afficher les statistiques
  const meals = [
    { name: "Poulet", calories: 300 },
    { name: "Pizza", calories: 500 },
    { name: "Salade", calories: 150 },
  ]; // Exemple de données
  renderStatistics(meals);
};

document.addEventListener("DOMContentLoaded", init);