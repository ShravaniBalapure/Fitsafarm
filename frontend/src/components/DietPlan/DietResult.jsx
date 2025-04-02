import React from "react";

const DietResult = ({ plan }) => {
  return (
    <div className="diet-result">
      <h3>Your Custom Diet Plan:</h3>
      <p><strong>Calories per Day:</strong> {plan.calories}</p>
      <p><strong>Protein:</strong> {plan.protein}g</p>
      <p><strong>Carbs:</strong> {plan.carbs}g</p>
      <p><strong>Fats:</strong> {plan.fats}g</p>
      <h4>Sample Meals:</h4>
      <ul>
        {plan.meals.map((meal, index) => (
          <li key={index}>{meal}</li>
        ))}
      </ul>
    </div>
  );
};

export default DietResult;
