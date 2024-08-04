import React, { useEffect, useState } from "react";
import Edit_Button from "./Edit_Button";

const FetchApi = () => {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  const DeleteRecord = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
      method: "DELETE",
    })
      .then((result) => {
        if (result.ok) {
          setData((prevData) => prevData.filter((item) => item.id !== userId));
        } else {
          console.error(`Failed to delete record with ID: ${userId}`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const api_call = () => {
    fetch(url)
      .then((result) => result.json())
      .then((response) => setData(response))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    api_call();
  }, []);

  return (
    <div className="min-h-screen bg-fuchsia-300 p-4">
      <h1 className="text-2xl font-semibold mb-6">
       play with Api 
        </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20">
        {data.map((curItem) => (
          <div
            key={curItem.id}
            className="w-80 bg-white shadow-black shadow-md rounded-lg overflow-hidden mx-auto flex flex-col"
          >
            <div className="px-6 py-4 flex-grow">
              <p className="text-gray-700 text-base">
                <span className="font-semibold underline">ID:</span> {curItem.id}
              </p>
              <p className="text-gray-700 text-base">
                <span className="underline font-semibold">Title:</span> {curItem.title}
              </p>
              <p className="text-sm">
                <span className="font-semibold underline">Body:</span> {curItem.body}
              </p>
            </div>
            <div className="flex justify-between bg-gray-100 px-6 py-4">
             <Edit_Button/>
              <button
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600"
                onClick={() => {
                  // Define the action for the second button here
                  DeleteRecord(curItem.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchApi;
