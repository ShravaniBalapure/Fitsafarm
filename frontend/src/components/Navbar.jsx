// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; // Import 'Link' for internal navigation


// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if user is logged in by reading from localStorage
//     const userStatus = localStorage.getItem("userLoggedIn") === "true";
//     setLoggedIn(userStatus);
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="navbar">
//       <div className="logo">
//         <img src="Logofit.png" alt="FitSafar Logo" className="logo-img" />
//         <h1 className="wow bounceIn" data-wow-delay="0.9s">FitSafar</h1>
//       </div>
//       <nav className={`navbar-nav ${menuOpen ? "open" : ""}`}>
//         <ul>
//           <li><Link to="/Hero">Home</Link></li>
//           <li><Link to="/Biceps">Workout's</Link></li>
//           <li><Link to="/Pricing">Plans</Link></li>
//           <li><Link to="/About">About</Link></li>
//           <li><Link to="/Contact">Contact</Link></li>
//           <li><Link to="/Detector">Pose Detection</Link></li>
//           <li><Link to="/BMICalculator">BMI</Link></li>

//           {loggedIn ? (
//             <li className="nav-item">
//               <Link to="/login">
//               <img src="avatar.png" alt="User Avatar" className="avatar" />
//               </Link>
//             </li>
//           ) : (
//             <li className="nav-item">
//               <Link className="nav-link" to="/login">Login</Link>
//             </li>
//           )}
//         </ul>
//       </nav>
//       <div className="hamburger" onClick={toggleMenu}>
//         <span>&#9776;</span>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExercisePage from "./Exercise/ExercisePage";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    const userStatus = localStorage.getItem("userLoggedIn") === "true";
    setLoggedIn(userStatus);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLangMenu = () => {
    setShowLangMenu(!showLangMenu);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setShowLangMenu(false);
    // Logic to change the website language goes here
  };

  return (
    <header className="navbar">
      {/* Left: Logo & Name */}
      <div className="logo-container">
        <img src="Logofit.png" alt="FitSafar Logo" className="logo-img" />
        <h1 className="fitSafar-name">FitSafar</h1>
      </div>

      {/* Center: Navigation (slightly moved to the right) */}
      <nav className={`navbar-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/Hero">Home</Link></li>
          <li><Link to="/Biceps">Workouts</Link></li>
          <li><Link to="/Pricing">Plans</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Detector">Pose Detection</Link></li>
          <li><Link to="/BMICalculator">BMI</Link></li>
          <li><Link to="/Login">Login</Link></li>
          
        </ul>
      </nav>

      <div className="language-switcher" onClick={toggleLangMenu}>
          <span>Training</span> {/* Globe Icon */}
          {showLangMenu && (
            <div className="lang-dropdown">
              <div onClick={() => ExercisePage()}>Exercise</div>
              <div onClick={() => changeLanguage("HI")}>हिन्दी</div>
              <div onClick={() => changeLanguage("ES")}>Español</div>
              <div onClick={() => changeLanguage("FR")}>Français</div>
            </div>
          )}
        </div>

      {/* Right: Notification, Language Switcher & Avatar */}
      <div className="right-icons">
        <div className="notification-icon">
          <span>&#128276;</span> {/* Notification Bell */}
        </div>

        {/* Language Switcher */}
        <div className="language-switcher" onClick={toggleLangMenu}>
          <span>&#127760;</span> {/* Globe Icon */}
          {showLangMenu && (
            <div className="lang-dropdown">
              <div onClick={() => changeLanguage("EN")}>English</div>
              <div onClick={() => changeLanguage("HI")}>हिन्दी</div>
              <div onClick={() => changeLanguage("ES")}>Español</div>
              <div onClick={() => changeLanguage("FR")}>Français</div>
            </div>
          )}
        </div>

        {loggedIn ? (
          <Link to="/profile">
            <img src="avatar.png" alt="User Avatar" className="avatar" />
          </Link>
        ) : (
          <Link className="nav-link login-btn" to="/login">Login</Link>
        )}
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span>&#9776;</span>
      </div>
    </header>
  );
};

export default Navbar;
