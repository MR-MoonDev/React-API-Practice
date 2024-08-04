import React, { useState } from 'react';
import EditForm from './EditForm';

const Edit_Button = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleSave = (updatedPost) => {
    console.log('Updated Post:', updatedPost);
    setShowForm(false);
  };

  return (
    <div>
      {showForm ? (
        <EditForm onSave={handleSave} initialData={{ id: 1, title: 'Sample Title', body: 'Sample Body' }} />
      ) : (
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
          onClick={handleButtonClick}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default Edit_Button;
