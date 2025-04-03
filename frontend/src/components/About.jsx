// import React, { useState, useEffect } from 'react';


// const About = () => {
//   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

//   const quotes = [
//     "The only bad workout is the one that didn’t happen.",
//     "Fitness is not about being better than someone else. It’s about being better than you used to be.",
//     "Take care of your body. It’s the only place you have to live."
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
//     }, 4000); // Changes quote every 4 seconds
//     return () => clearInterval(interval);
//   }, [quotes.length]);

//   return (
//     <div className="about-page">
//       <div className="content-wrapper">
//         <div className="about-section">
//           <h1>Welcome to FitSafar</h1>
//           <p>Your Fitness Journey, Perfected.</p>
//           <p>
//             At FitSafar, we combine cutting-edge technology with your fitness goals to create a seamless workout experience. 
//             Our platform uses advanced Mediapipe pose detection to analyze and guide your exercise posture in real time, 
//             ensuring you work out safely and effectively.
//           </p>
//         </div>

//         {/* Image Section
//         <div className="about-image-section">
//           <div className="image-container">
//             <img
//               src="/about.jpeg" // Replace with the actual path of your image
//               alt="Fitness"
//               className="about-image"
//             />
//           </div>
//         </div> */}

//         <div className="thought-box">
//           <p>{quotes[currentQuoteIndex]}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


// import React, { useState, useEffect } from 'react';
// import './About.css'; // Ensure you have a CSS file for styles

// const About = () => {
//   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

//   const quotes = [
//     "The only bad workout is the one that didn’t happen.",
//     "Fitness is not about being better than someone else. It’s about being better than you used to be.",
//     "Take care of your body. It’s the only place you have to live."
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
//     }, 4000); // Changes quote every 4 seconds
//     return () => clearInterval(interval);
//   }, [quotes.length]);

//   const teamMembers = [
//     { name: "Shravani Balapure", image: "/team/shravani.jpg", role: "Founder & CEO" },
//     { name: "Chaitanya Lokhande", image: "/team/chaitanya.jpg", role: "Lead Developer" },
//     { name: "Omkar Shelke", image: "/team/omkar.jpg", role: "UI/UX Designer" },
//   ];

//   return (
//     <div className="about-page">
//       <div className="content-wrapper">
//         <div className="about-section">
//           <h1>Welcome to FitSafar</h1>
//           <p>Your Fitness Journey, Perfected.</p>
//           <p>
//             At FitSafar, we combine cutting-edge technology with your fitness goals to create a seamless workout experience. 
//             Our platform uses advanced Mediapipe pose detection to analyze and guide your exercise posture in real time, 
//             ensuring you work out safely and effectively.
//           </p>
//         </div>

//         {/* Team Section */}
//         <div className="team-section">
//           <h2>Meet the Team</h2>
//           <div className="team-members">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="team-member">
//                 <img src={member.image} alt={member.name} className="team-member-img" />
//                 <h3>{member.name}</h3>
//                 <p>{member.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="thought-box">
//           <p>{quotes[currentQuoteIndex]}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


// 




import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = [
    "The only bad workout is the one that didn’t happen.",
    "Fitness is not about being better than someone else. It’s about being better than you used to be.",
    "Take care of your body. It’s the only place you have to live."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const teamMembers = [
    { name: "AVNI MIRANI", role: "LEADER", img: "/avniip.jpeg"},
    { name: "SHRAVANI BALAPURE", role: "DEVELOPER", img: "/shravanip.jpeg" },
    { name: "GAURI WATMODE", role: " DESIGNER", img: "/gaurip.jpeg" }
  ];

  return (
    <div className="about-container">
      {/* Thought Box at the Top */}
      <motion.div
        className="thought-box"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p>"{quotes[currentQuoteIndex]}"</p>
      </motion.div>

      {/* Main Section: Content & Logo */}
      <div className="top-section">
        <motion.div
          className="content-box"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="welcome-text">
          <span className="highlight">FitSafar</span>
          </h1>
          <h2 className="tagline">Your Virtual Trainer for a Healthier You</h2>
          <p className="description">
            At <span className="highlight">FitSafar</span>, we combine cutting-edge AI with fitness 
            to create a seamless workout experience. Our platform provides real-time posture correction 
            using Mediapipe pose detection, ensuring a safer and more effective workout.
          </p>
        </motion.div>

        <motion.img
          src="manlogo.png"
          alt="FitSafar Logo"
          className="logo-box"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* Meet the Team Section */}
      <div className="team-section">
        <h2>Meet the Team</h2>
        <motion.div className="team-members">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-member"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="team-member-img"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
