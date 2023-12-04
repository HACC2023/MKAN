// CreateAccount.js
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const CreateAccount = ({ onSignUp  }) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedIsland, setSelectedIsland] = useState('');

  const islands = ['Hawaii', 'Maui', 'Oahu', 'Kauai', 'Molokai', 'Lanai'];
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password matching
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission


  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Check if any required fields are empty
    if (!firstName || !lastName || !email || !password || !confirmPassword || !selectedIsland) {
      // Highlight the empty required fields in red
      setFormSubmitted(true);
      return;
    }

    // Check if passwords match before proceeding with registration
    if (password === confirmPassword) {
      // Passwords match, you can proceed with registration
      setPasswordsMatch(true);

      // Create an Account object with the current accountInfo
      const newAccount = {
        firstName,
        lastName,
        email,
        password,
        island: selectedIsland,
      };

      // Store the newAccount object in localStorage
      localStorage.setItem('userAccount', JSON.stringify(newAccount));

      // Log the newAccount object (you can remove this line in production)
      console.log('New Account:', newAccount);

      // Trigger the onSignIn callback
      onSignUp();

      // Trigger the onAccountCreateSuccess callback with the new user information
      //onAccountCreateSuccess(newAccount);

      // Navigate to the home page
      
      navigate('/');
    } else {
      // Passwords do not match, set a flag to indicate the mismatch
      setPasswordsMatch(false);
    }
  };

  return (
    <div className="create-account-page">
      <header className="header">
        <h1>Lahaina Outreach</h1>
      </header>
      <div className="layout-account-container">
        <div className="create-account-form">
          <h2>Create an Account</h2>
          <form onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`create-account-input ${formSubmitted && !firstName ? 'required' : ''}`}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`create-account-input ${formSubmitted && !lastName ? 'required' : ''}`}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`create-account-input ${formSubmitted && !email ? 'required' : ''}`}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`create-account-input ${formSubmitted && !password ? 'required' : ''}`}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`create-account-input ${formSubmitted && !confirmPassword ? 'required' : ''}`}
            />
            {!passwordsMatch && (
              <p className="password-mismatch">Passwords do not match. Please try again.</p>
            )}
            <label>Select an Island:</label>
            <select
              value={selectedIsland}
              onChange={(e) => setSelectedIsland(e.target.value)}
              className={`create-account-select ${formSubmitted && !selectedIsland ? 'required' : ''}`}
            >
              <option value="">Select an Island</option>
              {islands.map((island) => (
                <option key={island} value={island}>
                  {island}
                </option>
              ))}
            </select>
              <button type="submit" onClick={handleSignUp} className="create-account-button">
                Sign Up
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
