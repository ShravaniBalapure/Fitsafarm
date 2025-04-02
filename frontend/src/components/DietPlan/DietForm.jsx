import React, { useState } from "react";

const DietForm = ({ onSubmit }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("maintain");
  const [activity, setActivity] = useState("moderate");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ weight, height, goal, activity });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Goal:</label>
        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="maintain">Maintain</option>
          <option value="lose">Lose</option>
          <option value="gain">Gain</option>
        </select>
      </div>
      <div>
        <label>Activity Level:</label>
        <select value={activity} onChange={(e) => setActivity(e.target.value)}>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
      </div>
      <button type="submit">Generate Diet Plan</button>
    </form>
  );
};

export default DietForm;
