// Post.js
import React, { useState } from 'react';

const Post = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    if (commentText.trim() !== '') {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <div className="post">
      <h2>Post Title 1</h2>
      <p>Content of the first post goes here...</p>
      <p>Comments: {comments.length}</p>
      <button onClick={handleLike}>
        <span role="img" aria-label="Like">👍</span> Like
      </button>
      <span>{likes} likes</span>
      <div>
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button onClick={handleComment}>Comment</button>
      </div>
      <div>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
};

export default Post;
