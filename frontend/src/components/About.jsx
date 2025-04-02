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


import React, { useState, useEffect } from 'react';

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
    }, 4000); // Changes quote every 4 seconds
    return () => clearInterval(interval);
  }, [quotes.length]);

  const teamMembers = [
    { name: 'John Doe', role: 'Founder', img: '/team/john.jpg' },
    { name: 'Jane Smith', role: 'Lead Developer', img: '/team/jane.jpg' },
    { name: 'Sarah Lee', role: 'UI/UX Designer', img: '/team/sarah.jpg' }
  ];

  return (
    <div className="about-page">
      <div className="content-wrapper">
        <div className="about-section">
          <h1>Welcome to FitSafar</h1>
          <p>Your Fitness Journey, Perfected.</p>
          <p>
            At FitSafar, we combine cutting-edge technology with your fitness goals to create a seamless workout experience. 
            Our platform uses advanced Mediapipe pose detection to analyze and guide your exercise posture in real time, 
            ensuring you work out safely and effectively.
          </p>
        </div>

        {/* Thought Box */}
        <div className="thought-box">
          <p>{quotes[currentQuoteIndex]}</p>
        </div>

        {/* Meet the Team Section */}
        <div className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img
                  src={member.img}
                  alt={member.name}
                  className="team-member-img"
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
