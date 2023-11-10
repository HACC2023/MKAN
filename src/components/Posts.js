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
    <div className="post" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
      <div className="image-container">
      <img src="lahaina.jpg" alt="Lahaina" style={{ width: "250px", height: "auto" }} />
    </div>
        <div className="post-content">
          <h2>Post Title</h2>
          <p>Content of the post goes here...</p>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={handleLike} style={{ padding: "10px 10px", marginRight: "10px" }}>
          <span role="img" aria-label="Like" style={{ fontSize: "14px" }}>👍</span>
        </button>
        <span>{likes} likes</span>
        <p style={{ marginLeft: "10px" }}>{comments.length} comments</p>
      </div>
      <div style={{ marginTop: "auto", display: "flex" }}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          style={{ height: "20px", width: "188px" }}
        />
        <button onClick={handleComment} style={{ marginLeft: "10px" }}>
          Comment
        </button>
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