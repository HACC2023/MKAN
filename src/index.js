import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Layout from './Layout'; // Import the RedditLayout component
import reportWebVitals from './a/reportWebVitals';
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Layout />
  </BrowserRouter>


);

reportWebVitals();
