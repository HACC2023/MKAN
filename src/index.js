import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM correctly
import './style.css';
import Layout from './Layout';
import reportWebVitals from './a/reportWebVitals'; // Correct the path
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import ToolsPage from "./components/toolsPage/ToolsPage"
import NotFound from './components/NotFound';
import CreateAccount from './components/CreateAccount';
import LoginForm from './components/LoginForm';
import CreatePost from './components/CreatePost'; // Import CreatePost component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]); // Create state for posts

    // Use useEffect to retrieve posts from localStorage on component mount
    useEffect(() => {
      const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
      setPosts(storedPosts);
    }, []);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  const addPost = (post) => {
    // Update component state
    setPosts((prevPosts) => [...prevPosts, post]);
  
    // Store posts in localStorage
    const postsInStorage = JSON.parse(localStorage.getItem('posts')) || [];
    postsInStorage.push(post);
    localStorage.setItem('posts', JSON.stringify(postsInStorage));
  };
  

  //  // Add an example post
  //  useEffect(() => {
  //   const examplePost = {
  //     title: 'Example Post',
  //     description: 'This is an example post description.',
  //   };
  //   addPost(examplePost);
  // }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout
              isAuthenticated={isAuthenticated}
              onSignOut={handleSignOut}
              posts={posts}
            />
          }
        />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path='/Tools' element={<ToolsPage />} />
        <Route path="/login" element={<LoginForm onSignIn={handleSignIn} />} />
        <Route
          path="/create-account"
          element={<CreateAccount onSignIn={handleSignIn} />}
        />
        <Route
          path="/create-post"
          element={<CreatePost onPostCreate={addPost} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = document.getElementById('root'); // No need to use createRoot
ReactDOM.render(<App />, root); // Render the App component

reportWebVitals();

