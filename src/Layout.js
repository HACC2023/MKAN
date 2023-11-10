import React from "react"
import "./style.css" /* ./style.css */
import { Link } from "react-router-dom"
import ReactDOM from "react-dom"
import { createRoot } from "react-dom/client"
import { useState } from 'react';
import Posts from './components/Posts';


const Layout = ({ isAuthenticated, onSignOut, posts }) => {
  const [commentText, setCommentText] = useState('');
  const [commentTextByPost, setCommentTextByPost] = useState({});
  const [statePosts, setStatePosts] = useState(posts);

  const handleLike = (selectedPost) => {
    // Create a copy of the state posts
    console.log('like');
    const updatedPosts = statePosts.map((post) =>
      post.id === selectedPost.id
        ? {
            ...post,
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1,
            
          }
        : post
        
    );

    // Update the state with the updated posts
    setStatePosts(updatedPosts);
  };


  const handleComment = (post) => {
    const newComment = commentTextByPost[post.id];

    if (post && newComment) {
      if (!post.comments) {
        post.comments = [];
      }

      // Add the new comment to the post's comments array
      post.comments.push(newComment);

      // Clear the comment input field for this post
      setCommentTextByPost({ ...commentTextByPost, [post.id]: '' });

      // Update the posts array to reflect the changes
      ;
    }
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
              <Link to='/Page1'>Link to Page 1</Link>
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
              <p>Likes: {post.likes || 0}</p>
              <button onClick={() => handleLike(post)}>
                {post.liked ? 'Unlike' : 'Like'}
              </button>
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
