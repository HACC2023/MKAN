import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ onSignIn }) => {
  // Define the onSignIn prop, even if it's not used in this component
  onSignIn = onSignIn || (() => {});

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [isReadyToRedirect, setIsReadyToRedirect] = useState(false);

  const handleSignIn = () => {
    // Basic email format validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    const isValidEmail = emailRegex.test(email);
  
    if (!isValidEmail) {
      setIsEmailValid(false);
      setIsReadyToRedirect(false); // Email is not valid, so not ready to redirect
      return;
    } else {
      setIsEmailValid(true);
    }
  
    // Retrieve account information from localStorage
    const storedAccount = localStorage.getItem('userAccount');
    const account = storedAccount ? JSON.parse(storedAccount) : null;
  
    // Check if the email and password match the stored account information
    if (account && account.email === email && account.password === password) {
      setIsPasswordCorrect(true);
      setIsReadyToRedirect(true);
      // Call the onSignIn function passed as a prop
      onSignIn({
        firstName: account.firstName,
        lastName: account.lastName,
        email: account.email,
        // Add other user properties as needed
      });
    } else {
      // Email or password is incorrect
      setIsPasswordCorrect(false);
      setIsReadyToRedirect(false);
    }
  };
  

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`login-input ${!isEmailValid ? 'invalid' : ''}`}
      />
      {!isEmailValid && <p className="error-message">Invalid email format.</p>}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`login-input ${!isPasswordCorrect ? 'invalid' : ''}`}
      />
      {!isPasswordCorrect && <p className="error-message">Incorrect password.</p>}
      {isReadyToRedirect ? (
        <Link to="/">
          <button className="login-button">Sign In</button>
        </Link>
      ) : (
        <button onClick={handleSignIn} className="login-button">
          Sign In
        </button>
      )}
      <p className="create-account-link">
        Don't have an account? <Link to="/create-account">Create one</Link>
      </p>
    </div>
  );
};

export default LoginForm;
