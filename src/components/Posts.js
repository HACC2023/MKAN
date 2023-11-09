import React, { useState } from 'react';

const Post = ({ post }) => {
  const { title, content, likes, comments } = post;

  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    // Implement liking functionality here
  };

  const handleComment = () => {
    if (commentText.trim() !== '') {
      // Add a comment to the post
      post.comments.push(commentText);
      setCommentText('');
    }
  };

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
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
