import React from "react";
import ExerciseCard from "./ExerciseCard";
import"./Exercise.css";

const exercises = [
  {
    name: "Biceps Curl",
    description: "A great exercise to target your biceps and build arm strength.",
    image: "/images/biceps.jpg", // Add an image for biceps curl
    sets: 3,
    reps: 12,
  },
  {
    name: "Squats",
    description: "Squats target your legs and help improve lower body strength.",
    image: "/images/squats.jpg", // Add an image for squats
    sets: 4,
    reps: 15,
  },
  {
    name: "Sit-ups",
    description: "Sit-ups are excellent for building core strength.",
    image: "/images/situps.jpg", // Add an image for sit-ups
    sets: 3,
    reps: 20,
  },
  {
    name: "Jumping Jacks",
    description: "Jumping jacks help with overall fitness and cardiovascular health.",
    image: "/images/jumpingjacks.jpg", // Add an image for jumping jacks
    sets: 3,
    reps: 30,
  },
];

const ExercisePage = () => {
  return (
    <div className="exercise-page">
      <h2>Exercise Training</h2>
      <div className="exercise-list">
        {exercises.map((exercise, index) => (
          <ExerciseCard
            key={index}
            name={exercise.name}
            description={exercise.description}
            image={exercise.image}
            sets={exercise.sets}
            reps={exercise.reps}
          />
        ))}
      </div>
    </div>
  );
};

export default ExercisePage;
