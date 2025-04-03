export const calculateProgress = (current, goal) => Math.min((current / goal) * 100, 100);

export const filterByNutrients = (meals, nutriments) =>
  meals.filter((meal) =>
    Object.keys(nutriments).every((key) => meal[key] <= nutriments[key])
  );

  export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);
export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const calculateTotals = (meals) =>
    meals.reduce(
      (totals, meal) => ({
        calories: totals.calories + meal.calories,
        proteines: totals.proteines + meal.proteines,
        glucides: totals.glucides + meal.glucides,
        lipides: totals.lipides + meal.lipides,
      }),
      { calories: 0, proteines: 0, glucides: 0, lipides: 0 }
    );