import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Layout from './Layout';
import reportWebVitals from './a/reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import NotFound from './components/NotFound';
import CreateAccount from './components/CreateAccount';
import LoginForm from './components/LoginForm';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    // Simulated sign-in logic
    // Set isAuthenticated to true upon successful sign-in
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // Implement your sign-out logic here
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Layout isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/login" element={<LoginForm onSignIn={handleSignIn} />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();
