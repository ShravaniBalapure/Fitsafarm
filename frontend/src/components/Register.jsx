// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// const Register = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.post('https://fitsafarm-backend.onrender.com//register', { name, email, password })
//             .then(result => {
//                 if (result.data === "Already registered") {
//                     alert("E-mail already registered! Please Login to proceed.");
//                     navigate('/login');
//                 } else {
//                     alert("Registered successfully! Please Login to proceed.");
//                     navigate('/login');
//                 }
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className="auth-container d-flex vh-100 align-items-center justify-content-center">
//             <div className="auth-box bg-white p-4 rounded shadow">
//                 <h2 className="mb-4 text-primary text-center">Register</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3 text-start">
//                         <label htmlFor="name" className="form-label"><strong>Name</strong></label>
//                         <input
//                             type="text"
//                             id="name"
//                             className="form-control"
//                             placeholder="Enter your name"
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                         />
//                     </div>
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
//                     <button type="submit" className="btn btn-primary w-100">Register</button>
//                 </form>
//                 <p className="mt-3 text-center">Already have an account?</p>
//                 <Link to="/login" className="btn btn-secondary w-100">Login</Link>
//             </div>
//         </div>
//     );
// };

// export default Register;



// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';

// const Register = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // axios.post('https://fitsafarm-backend.onrender.com/register', { name, email, password })
//  // ✅ Fixed URL
//             .then(result => {
//                 if (result.data === "Already registered") {
//                     alert("E-mail already registered! Please Login to proceed.");
//                     navigate('/login');
//                 } else {
//                     alert("Registered successfully! Please Login to proceed.");
//                     navigate('/login');
//                 }
//             })
//             .catch(err => {
//                 console.error("Registration failed:", err);
//                 alert("Something went wrong. Please try again.");
//             });
//     };

//     return (
//         <div className="auth-container d-flex vh-100 align-items-center justify-content-center">
//             <div className="auth-box bg-white p-4 rounded shadow">
//                 <h2 className="mb-4 text-primary text-center">Register</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3 text-start">
//                         <label htmlFor="name" className="form-label"><strong>Name</strong></label>
//                         <input
//                             type="text"
//                             id="name"
//                             className="form-control"
//                             placeholder="Enter your name"
//                             autoComplete="off"
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3 text-start">
//                         <label htmlFor="email" className="form-label"><strong>Email</strong></label>
//                         <input
//                             type="email"
//                             id="email"
//                             className="form-control"
//                             placeholder="Enter your email"
//                             autoComplete="off"
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
//                             autoComplete="off"
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary w-100">Register</button>
//                 </form>
//                 <p className="mt-3 text-center">Already have an account?</p>
//                 <Link to="/login" className="btn btn-secondary w-100">Login</Link>
//             </div>
//         </div>
//     );
// };

// export default Register;



import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://127.0.0.1:3001/register', { name, email, password })  // Replace with your actual backend URL
            .then(result => {
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                } else {
                    alert("Registered successfully! Please Login to proceed.");
                    navigate('/login');
                }
            })
            .catch(err => {
                console.error("Registration failed:", err);
                alert("Something went wrong. Please try again.");
            });
    };

    return (
        <div className="auth-container d-flex vh-100 align-items-center justify-content-center">
            <div className="auth-box bg-white p-4 rounded shadow">
                <h2 className="mb-4 text-primary text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                        <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="Enter your name"
                            autoComplete="off"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your email"
                            autoComplete="off"
                            value={email}
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
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
                <p className="mt-3 text-center">Already have an account?</p>
                <Link to="/login" className="btn btn-secondary w-100">Login</Link>
            </div>
        </div>
    );
};

export default Register;


