const API_URL = "http://localhost:4000";

export const getTotals = async () => {
  const response = await fetch(`${API_URL}/meals/totals`);
  return response.json();
};

export const getRecommendations = async ( goals) => {
  const response = await fetch(`${API_URL}/meals/recommandations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(goals),
  });
  return response.json();
};

export const addMeal = async (meal) => {
  const response = await fetch(`${API_URL}/meals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(meal),
  });
  return response.json();
};