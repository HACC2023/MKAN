import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './Layout'; // Import the RedditLayout component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout /> {/* Render the RedditLayout component here */}
  </React.StrictMode>
);

reportWebVitals();
