import React from "react";


const ExerciseCard = ({ name, description, image, sets, reps }) => {
  return (
    <div className="exercise-card">
      <img src={image} alt={name} className="exercise-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>Sets:</strong> {sets}</p>
      <p><strong>Reps:</strong> {reps}</p>
    </div>
  );
};

export default ExerciseCard;
