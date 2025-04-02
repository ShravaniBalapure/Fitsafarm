import React, { useState } from "react";
import DietForm from "./DietForm";
import DietResult from "./DietResult";

const DietPlanPage = () => {
  const [plan, setPlan] = useState(null);

  const generateDietPlan = (data) => {
    // Simple logic for diet generation based on user input
    const calories = data.goal === "gain" ? 2500 : data.goal === "lose" ? 1800 : 2200;
    const protein = data.goal === "gain" ? 150 : 100;
    const carbs = data.activity === "high" ? 300 : 250;
    const fats = 70;

    const meals = [
      "Breakfast: Oats with nuts and banana",
      "Lunch: Grilled chicken with brown rice and vegetables",
      "Dinner: Fish with sweet potatoes and a side salad",
    ];

    setPlan({ calories, protein, carbs, fats, meals });
  };

  return (
    <div className="diet-plan">
      <h2>Diet Plan Generator</h2>
      {!plan ? (
        <DietForm onSubmit={generateDietPlan} />
      ) : (
        <DietResult plan={plan} />
      )}
    </div>
  );
};

export default DietPlanPage;
