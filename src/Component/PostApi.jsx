import React, { useState } from 'react';
import PostApiForm from './PostApiForm'; // Assuming you have a PostForm component defined

const PostApi = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div >
      {showForm ? (
        <PostApiForm />
      ) : (
        <button
        className="fixed top-3 right-3 px-6 py-2 bg-green-700 text-white font-semibold rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-neon focus:outline-none"
        onClick={handleButtonClick}
      >
        Post Api
      </button>
      )}
    </div>
  );
};

export default PostApi;
