import { addMeal } from "../services/api.js";

export const renderMealForm = () => {
    const form = document.getElementById("meal-form");
    form.innerHTML = `
      <h2>Ajouter un repas</h2>
      <form id="add-meal">
        <input type="text" name="name" placeholder="Nom du repas" required />
        <input type="number" name="calories" placeholder="Calories" required />
        <input type="number" name="proteines" placeholder="Protéines" required />
        <input type="number" name="glucides" placeholder="Glucides" required />
        <input type="number" name="lipides" placeholder="Lipides" required />
        <button type="submit">Ajouter</button>
      </form>
    `;
  
    document.getElementById("add-meal").addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const meal = Object.fromEntries(formData.entries());

    // Convertir les valeurs numériques
    meal.calories = Number(meal.calories);
    meal.proteines = Number(meal.proteines);
    meal.glucides = Number(meal.glucides);
    meal.lipides = Number(meal.lipides);

      console.log("Données envoyées :", meal); // Vérifiez les données ici
      await addMeal(meal); // Appel à l'API
      alert("Repas ajouté !");
    });
  };