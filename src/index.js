import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Layout from './Layout';
import reportWebVitals from './a/reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import ToolsPage from "./components/toolsPage/ToolsPage"
import NotFound from './components/NotFound';
import CreateAccount from './components/CreateAccount';
import LoginForm from './components/LoginForm';
import CreatePost from './components/CreatePost';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const handleSignIn = (userInfo) => {
    setCurrentUser(userInfo);
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  const addPost = (post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
    const postsInStorage = JSON.parse(localStorage.getItem('posts')) || [];
    postsInStorage.push(post);
    localStorage.setItem('posts', JSON.stringify(postsInStorage));
  };
  
  const onDeletePost = (index) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      updatedPosts.splice(index, 1);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      return updatedPosts;
    });
  };

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
              onDeletePost={onDeletePost}
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
          element={<CreatePost currentUser={currentUser} onPostCreate={addPost} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

reportWebVitals();
