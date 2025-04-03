import express from "express";
import { getGoals, setGoal } from "../services/goals_services.js";

const goalsRoutes = express.Router();

goalsRoutes.get("/", async (req, res) => {
  const goals = await getGoals(); 
  res.json(goals);
});

goalsRoutes.post("/", async (req, res) => {
  const goal = await setGoal({ ...req.body });
  res.status(201).json(goal);
});

export default goalsRoutes;