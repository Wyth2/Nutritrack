import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema({
  dailyCalories: { type: Number, required: true },
  dailyProteines: { type: Number, required: true },
  dailyGlucides: { type: Number, required: true },
  dailyLipides: { type: Number, required: true },
});

export default mongoose.model("Goal", GoalSchema);