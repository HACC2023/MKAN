import React, { Component } from 'react';
import { BrowserRouter as BRouter, Route, Routes } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import LoginForm from './components/LoginForm';
import Layout from "./Layout"

function App() {
  
  
  return (
    <BRouter>
        <Routes>
          <Route exact path="/" element={<Layout />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BRouter>
  );
}

export default App;
