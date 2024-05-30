import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    navigate('/home'); 
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">ActsConnect</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on ActsConnect.
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleRegister}>
            <h2 className="registerTitle">Create a New Account</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="registerInput"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="registerInput"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="registerInput"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="registerInput"
              required
            />
            <button className="registerButton" type="submit">Sign Up</button>
            <button
              className="registerLoginButton"
              type="button"
              onClick={() => navigate('/login')}
            >
              Log Into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
