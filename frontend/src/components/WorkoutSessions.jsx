import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const WorkoutSessions = () => {
  return (
    <section className="workout-sessions">
      <div className="container">
        <div className="text-center section-header">
          <motion.img
            src="/workouts.png" // Replace with your image path
            alt="Workouts Image"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="workout-logo"
          />
          <p className="description">
            Explore a variety of workouts targeting different muscle groups, designed to help you stay fit and healthy.
          </p>
        </div>

        <div className="grid">
          {workouts.map((workout, index) => (
            <div key={index} className="card animated-card">
              <Link to={workout.path}> 
                <img 
                  src={workout.image} 
                  alt={workout.title} 
                  className="workout-image"
                />
              </Link>
              <h4 className="workout-title">{workout.title}</h4>
              <p className="workout-description">{workout.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const workouts = [
  { title: "Bicep Curls",
     description: "Strengthen your arms with controlled bicep curls using dumbbells or barbells.",
     image: "https://www.shutterstock.com/image-photo/asian-man-shirtless-workout-weight-600nw-2280545545.jpg", 
     path: "/Biceps",
     },
  { title: "Squats", description: "Build lower body strength and endurance with bodyweight or weighted squats.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3IW1fTILjpe9XzcrqtBFWsrJCzKK7nILb4g&s", path: "/squats" },
  { title: "Push-Ups", description: "Enhance upper body strength and core stability with different push-up variations.", image: "https://t3.ftcdn.net/jpg/03/43/46/08/360_F_343460855_D1NCqiRFaSD9WPIQLuyGeXRXIrnLGXTK.jpg", path: "/pushups" },
  { title: "Tree Pose", description: "Tree Pose (Vrikshasana) enhances balance, leg strength, and focus by standing on one leg with hands at the chest or overhead.", image: "https://femina.wwmindia.com/content/2021/feb/yoga-011612349368.jpg", path: "/treePose" },
  { title: "Plank Hold", description: "Strengthen your core and improve posture with static plank holds.", image: "https://media.istockphoto.com/id/506760290/photo/plank-it.jpg?s=612x612&w=0&k=20&c=LyLNA1J-mXmB3JwoxyvcRYhCjQfp0n6LV_jMBjdO9ys=", path: "/plank" },
  { title: "Deadlifts", description: "Target multiple muscle groups with effective deadlift techniques.", image: "https://t3.ftcdn.net/jpg/04/85/64/08/360_F_485640894_Ek9L59TH3BBBCNhFDjNNEMibaxOzK3Cj.jpg", path: "/deadlifts" },
  { title: "High Knees", description: "Improve agility and burn calories with high-knee exercises.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcytRyTT78IDgbIi2BW8HFVnNNKE0WVBrrR9sKD5I9AdUXYUk2iSdncmgDgGLVyFwiMM&usqp=CAU", path: "/highknees" },
  { title: "Situps", description: "Strengthen your core with effective sit-up exercises.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzBPvqP7D3Rrzr3lcXscbCjPPXI9mEtWZmEg&s", path: "/situp" }
];

export default WorkoutSessions;
