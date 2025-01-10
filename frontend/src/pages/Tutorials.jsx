import React, { useState, useEffect } from "react";
import axios from "axios";

function Tutorials() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: "snippet",
            q: "role based tutorials",
            type: "video",
            key: "YOUR_YOUTUBE_API_KEY", // Replace with your YouTube API key
          },
        }
      );
      setVideos(response.data.items);
    };
    fetchVideos();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold mb-4">Role-Based Tutorials</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id.videoId} className="bg-gray-100 p-4 rounded shadow">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-full mb-2"
            />
            <p className="text-lg font-bold">{video.snippet.title}</p>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Watch Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tutorials;
