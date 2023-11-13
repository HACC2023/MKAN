import React from "react"
import "./style.css" /* ./style.css */
import { Link } from "react-router-dom"
import ReactDOM from "react-dom"
import { createRoot } from "react-dom/client"
import { useState, useEffect } from 'react';
import Posts from './components/Posts';


const Layout = ({ isAuthenticated, onSignOut, posts, onDeletePost }) => {
  const [commentText, setCommentText] = useState('');
  const [commentTextByPost, setCommentTextByPost] = useState({});
  const [statePosts, setStatePosts] = useState(posts);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setStatePosts(storedPosts);
  }, []);
  

  const handleLike = (selectedPost) => {
    // Create a copy of the state posts
    const updatedPosts = statePosts.map((post) =>
      post.id === selectedPost.id
        ? {
            ...post,
            liked: !post.liked,
            likes: !post.liked ? post.likes + 1 : post.likes - 1,
          }
        : post
    );

    // Update the state with the updated posts
    setStatePosts(updatedPosts);

    // Update localStorage after liking/unliking the post
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    window.location.reload();
  };
  
  const handleComment = (post) => {
    const newComment = commentTextByPost[post.id];
  
    if (post && newComment) {
      if (!post.comments) {
        post.comments = [];
      }
  
      // Add the new comment to the post's comments array
      post.comments.push(newComment);
  
      // Update the posts array to reflect the changes
      setStatePosts((prevPosts) =>
        prevPosts.map((p) => (p.id === post.id ? { ...post } : p))
      );
  
      // Update localStorage with the updated posts
      localStorage.setItem(
        'posts',
        JSON.stringify(statePosts.map((p) => (p.id === post.id ? { ...post } : p)))
      );
  
      // Clear the comment input field for this post
      setCommentTextByPost({ ...commentTextByPost, [post.id]: '' });
    }
  };
  

  const handleDeletePost = (index) => {
    const originalIndex = posts.length - 1 - index;
    onDeletePost(originalIndex);
    
    // Update localStorage after deleting the post
    const updatedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    updatedPosts.splice(originalIndex, 1);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div>
      <header className='header'>
        <h1 className='header-title'>Lahaina Outreach</h1>
        <div className='header-search'>
          <input type='text' placeholder='Search...' /> {/* Search input */}
          <button className='search-button'>Search</button>{" "}
          {/* Search button */}
        </div>
        <div className="header-buttons">
          {isAuthenticated ? (
            <>
              <button id="signOutButton" onClick={onSignOut}>
                Sign Out
              </button>
              <Link to="/create-post">
                <button>Create Post</button>
              </Link>
            </>
          ) : (
            <Link to="/login">
              <button id="signInButton">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </header>
      <div className='layout-container'>
        <aside className='sidebar'>
          <h2>Explore</h2>
          <ul>
            <li>
              <Link to='/Page1'>More information</Link>
            </li>
            <li>
              <Link to='/Page2'>Link to Page 2</Link>
            </li>
            <li>
              <Link to='/Tools'>Tools</Link>
            </li>
          </ul>
        </aside>
        <aside>
          <div className='communities'>
            <h2>Communities</h2>
            <ul>
              <li>
                <a href='#'>Community 1</a>
              </li>
              <li>
                <a href='#'>Community 2</a>
              </li>
              <li>
                <a href='#'>Community 3</a>
              </li>
              {/* Add more Community items here */}
            </ul>
          </div>
        </aside>

        <main className='main-content'>
          {posts.slice().reverse().map((post, index) => (
            <div key={index} className="post">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>Likes: {post.likes} </p>
              {/* | Posted by: {post.user ? `${post.user.firstName} ${post.user.lastName}` : 'Unknown User'} */}
              <button onClick={() => handleLike(post)}>
                {post.liked ? 'Unlike' : 'Like'}
              </button>
              {isAuthenticated && (
                <button onClick={() => handleDeletePost(index)}>
                  Delete Post
                </button>
              )}
              <div>
                {post.comments && post.comments.length > 0 && (
                  <div>
                    <h3>Comments:</h3>
                    {post.comments.map((comment, commentIndex) => (
                      <p key={commentIndex}>{comment}</p>
                    ))}
                  </div>

                )}
              </div>
              <input
                type="text"
                placeholder="Add a comment..."
                value={commentTextByPost[post.id] || ''}
                onChange={(e) =>
                  setCommentTextByPost({
                    ...commentTextByPost,
                    [post.id]: e.target.value,
                  })
                }
              />
              <button onClick={() => handleComment(post)}>Comment</button>
            </div>
          ))}
        </main>

        <aside className='trending-subscriptions'>
          <div className='subscriptions'>
            <h2>Subscriptions</h2>
            <ul>
              <li>
                <a href='#'>Subscription 1</a>
              </li>
              <li>
                <a href='#'>Subscription 2</a>
              </li>
              <li>
                <a href='#'>Subscription 3</a>
              </li>
              {/* Add more subscription items here */}
            </ul>
          </div>

          <div className='trending'>
            <h2>Trending</h2>
            <ul>
              <li>
                <a href='#'>Trending Topic 1</a>
              </li>
              <li>
                <a href='#'>Trending Topic 2</a>
              </li>
              <li>
                <a href='#'>Trending Topic 3</a>
              </li>
              {/* Add more trending topics here */}

            </ul>
          </div>
        </aside>
      </div>
    </div>

  );
};


export default Layout
