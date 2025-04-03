import { Meal } from "../models/meals_model.js"; // Assure-toi que ce modèle existe

const createMeal = async (req, res) => {
  try {
    const newMeal = new Meal({
      name: "Pizza",
      calories: 300,
      proteines: 12,
      glucides: 30,
      lipides: 15,
    });
    await newMeal.save();
    res.status(201).json(newMeal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default createMeal;