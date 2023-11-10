import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = ({ onSignIn, onPostCreate }) => {
  // Define the formData state to manage form input
  const [formData, setFormData] = useState({
    title: '', // Initialize state for the title input
    description: '', // Initialize state for the description input
  });


  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the corresponding field in the formData state
    setFormData({
      ...formData, // Copy the previous state
      [name]: value, // Update the field specified by its name attribute
    });
  };

  // Function to create and add a new post
  const handleCreatePost = () => {
    // Check if both title and description are not empty
    if (formData.title.trim() === '' || formData.description.trim() === '') {
      alert('Title and description are required.');
      return;
    }

    // Create a new post object using the user's input
    const newPost = {
      title: formData.title,
      description: formData.description,
      likes: 0, // Initialize likes to 0
      comments: [], // Initialize comments as an empty array
    };

    // Call the onPostCreate function to add the new post
    onPostCreate(newPost);

    // Clear the form fields for the next input
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
        name="title" // Set the name to match the state key
        value={formData.title}
        onChange={handleInputChange}
      />
      <label>Description:</label>
      <textarea
        name="description" // Set the name to match the state key
        value={formData.description}
        onChange={handleInputChange}
        rows="4"
      />
      <button onClick={handleCreatePost}>Post</button>
      <Link to="/">Back</Link>
    </div>
  );
};

export default CreateAccount;
