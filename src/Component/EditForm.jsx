import React, { useState } from 'react';

const EditForm = ({ onSave, initialData }) => {
  const [id, setId] = useState(initialData.id || '');
  const [title, setTitle] = useState(initialData.title || '');
  const [body, setBody] = useState(initialData.body || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedPost = { id, title, body };
    onSave(updatedPost);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Edit Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700 font-semibold mb-2">ID</label>
            <input
              type="number"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-gray-700 font-semibold mb-2">Body</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              rows="4"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
