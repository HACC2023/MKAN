import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreatePost = ({ onPostCreate, currentUser }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreatePost = () => {
    if (formData.title.trim() === '' || formData.description.trim() === '') {
      alert('Title and description are required.');
      return;
    }

    const newPost = {
      title: formData.title,
      description: formData.description,
      likes: 0,
      comments: [],
    };

    onPostCreate(newPost);

    setFormData({
      title: '',
      description: '',
    });

    console.log('New post created:', newPost);
    window.location.href = '/';
  };

  return (
    <div className="create-post-page">
      <h2>Create a Post</h2>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        className="create-post-input"
      />
      <label>Description:</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        rows="4"
        className="create-post-textarea"
      />
      <button onClick={handleCreatePost} className="create-post-button">
        Post
      </button>
      <Link to="/" className="create-post-link">
        Back
      </Link>
    </div>
  );
};

export default CreatePost;
