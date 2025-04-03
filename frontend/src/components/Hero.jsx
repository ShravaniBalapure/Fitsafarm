// import React from "react";


// const Hero = () => {
//   return (
//     <section className="hero">
//       {/* Background Video */}
//       <video
//         className="background-video"
//         autoPlay
//         muted
//         loop
//       >
//         <source
//           src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_680,ar_1.77,q_auto:eco,dpr_2,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>

//       {/* Content Overlay */}
//       <div className="content">
//         <div className="title">
//           <h1>LET'S</h1>
//           <h1>GET</h1>
//           <h1>MOVING</h1>
//         </div>
//         <div className="sub-title">
//           <p>Your Journey to Fitness Starts Here</p>
//           <p>Unleash Your Potential</p>
//         </div>
//         <div className="buttons">
//           <button>Start Your Journey</button>
//           <button>Discover Your Plan</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Video */}
      <video className="background-video" autoPlay muted loop>
        <source
          src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_680,ar_1.77,q_auto:eco,dpr_2,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="content">
        <motion.div
          className="title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1> */}


<motion.img
          src="/lets.png"  // Replace with your image path
          alt="FitSafar Logo"
          className="hero-image"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        </motion.div>

        <motion.div
          className="sub-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <p>Your Journey to Fitness Starts Here</p>
          <p>Your Virtual Trainer for a Healthier You</p>
          {/* <p>Unleash Your Potential</p> */}
        </motion.div>

        <motion.div
          className="buttons"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        >
          <button className="primary-btn">Start Your Journey</button>
          <button className="secondary-btn">Discover Your Plan</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
