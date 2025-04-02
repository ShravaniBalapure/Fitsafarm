// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.post('https://fitsafarm-backend.onrender.com/login', { email, password })
//             .then(result => {
//                 console.log(result);
//                 if (result.data === "Success") {
//                     alert('Login successful!');
//                     navigate('/home');
//                 } else {
//                     alert('Incorrect password! Please try again.');
//                 }
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className="auth-container d-flex vh-100 align-items-center justify-content-center">
//             {/* Login box */}
//             <div className="auth-box bg-white p-4 rounded shadow">
//                 <h2 className="mb-4 text-primary text-center">Login</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3 text-start">
//                         <label htmlFor="email" className="form-label"><strong>Email</strong></label>
//                         <input
//                             type="email"
//                             id="email"
//                             className="form-control"
//                             placeholder="Enter your email"
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3 text-start">
//                         <label htmlFor="password" className="form-label"><strong>Password</strong></label>
//                         <input
//                             type="password"
//                             id="password"
//                             className="form-control"
//                             placeholder="Enter your password"
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
                    
//                     <button type="submit" className="btn btn-primary w-100">Login</button>
//                 </form>
//                 <p className="mt-3 text-center">Don't have an account?</p>
//                 <Link to="/register" className="btn btn-secondary w-100">Register</Link>
//             </div>
//         </div>
//     );
// };

// export default Login;



import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://fitsafarm-backend.onrender.com/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    alert('Login successful!');
                    navigate('/home');
                } else {
                    alert('Incorrect password! Please try again.');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="auth-container d-flex vh-100 align-items-center justify-content-center">
            <div className="auth-background">
                <div className="overlay-content text-white text-center p-4">
                    <img src="/FitsLogo.png" alt="Fitsafar Logo" className="fits-logo" />
                    <h1 className="mt-3">Welcome to Fitsafar</h1>
                    <p>Get healthier and energetic every day with easy exercises tailored for home workout enthusiasts and fitness beginners.</p>
                    <ul className="text-start">
                        <li><strong>Posture Correction:</strong> Real-time posture corrections while exercising</li>
                        <li><strong>Workout Plan:</strong> Personalized workout plan based on your goal and fitness level</li>
                        <li><strong>Demo Library:</strong> Exercise Demo Library to gain better exercise knowledge</li>
                    </ul>
                </div>
            </div>
            
            {/* Login Box */}
            <div className="auth-box bg-white p-4 rounded shadow">
                <h2 className="mb-4 text-primary text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    
                    <Link to="/hero" className="btn btn-primary w-100">Login</Link>
                </form>
                <p className="mt-3 text-center">Don't have an account?</p>
                <Link to="/register" className="btn btn-secondary w-100">Register</Link>
            </div>
        </div>
    );
};

export default Login;
