import { calculateProgress } from "../utils/functionnals.js";
import { getRecommendations } from "../services/api.js";

export const renderRecommendations = async ( goals) => {
  const recommendations = await getRecommendations(goals);
  const recommendationsDiv = document.getElementById("recommandations");
  recommendationsDiv.innerHTML = `
    <h2>Recommandations</h2>
    <ul>
      ${recommendations.map((meal) => `<li>${meal.name}</li>`).join("")}
    </ul>
  `;
};

export const renderDashboard = (totals, goals) => {
    console.log("Données reçues dans renderDashboard :", { totals, goals });
  const dashboard = document.getElementById("dashboard");
  dashboard.innerHTML = `
    <h2>Résumé des apports journaliers</h2>
    <div>
      <p>Calories : ${totals.calories || 0} / ${goals.calories}</p>
      <p>Protéines : ${totals.proteines || 0} / ${goals.proteines}</p>
      <p>Glucides : ${totals.glucides || 0} / ${goals.glucides}</p>
      <p>Lipides : ${totals.lipides || 0} / ${goals.lipides}</p>
    </div>
    <div id="progress-bars"></div>
  `;
  renderProgressBars(totals, goals);
};
export const renderProgressBars = (totals, goals) => {
    const progressBars = document.getElementById("progress-bars");
    progressBars.innerHTML = `
      ${Object.keys(goals).map((key) => {
        const progress = calculateProgress(totals[key], goals[key]);
        return `
          <div>
            <label>${key}</label>
            <progress value="${progress}" max="100"></progress>
            <span>${progress.toFixed(1)}%</span>
          </div>
        `;
      }).join("")}
    `;
  };