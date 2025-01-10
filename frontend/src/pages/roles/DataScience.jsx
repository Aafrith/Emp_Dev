import React from "react";

function Frontend() {
  const tutorials = [
    { title: "Introduction to React", progress: "Completed" },
    { title: "Advanced JavaScript", progress: "In Progress" },
    { title: "CSS Tricks for Modern UIs", progress: "Not Started" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Frontend Tutorials</h1>
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
        <ul className="list-disc pl-6">
          {tutorials.map((tutorial, index) => (
            <li key={index} className="mb-2">
              <span className="font-bold">{tutorial.title}</span>: {tutorial.progress}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Frontend;
