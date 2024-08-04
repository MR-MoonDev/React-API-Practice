import React, { useState } from "react";

const PostApiForm = () => {
  const [ID, SetID] = useState("");
  const [Title, SetTitle] = useState("");
  const [Body, setBody] = useState("");
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const onSubmitHandler = () => {
    let data = { ID, Title, Body };
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url, {
      method: "post",
      headers: {
        Accept: "Application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
      setSubmitted(true); // Set submitted to true after successful post
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Post Api Form</h2>
        {!submitted ? (
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                type="text"
                placeholder="Enter your ID"
                value={ID}
                onChange={(e) => SetID(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                type="text"
                placeholder="Enter your Title"
                value={Title}
                onChange={(e) => SetTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Body
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                type="Body"
                placeholder="Enter your Body"
                value={Body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={onSubmitHandler}
              className=" w-full py-2 bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none"
            >
              Submit
            </button>
          </form>
        ) : (
          // Card displaying submitted data
          <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{ID}</div>
              <p className="text-gray-700 text-base">
                <span className="font-semibold">Username:</span> {Title}
              </p>
              <p className="text-gray-700 text-base">
                <span className="font-semibold">Body:</span> {Body}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostApiForm;
