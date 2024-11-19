"use client"
import React, { useEffect, useState } from 'react';

const FetchPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);
  
  // State to track the hovered post ID
  const [hoveredPostId, setHoveredPostId] = useState<number | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/external');  // Correct API route
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data.data);  // Assuming the response has a "data" field with posts
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {error && <div className="text-red-500 text-center mb-4">Error: {error.message}</div>}
      
      {/* Display the list of posts with hover effects */}
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="relative p-4 bg-gray-50 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            onMouseEnter={() => setHoveredPostId(post.id)}  // Set hovered post ID on hover
            onMouseLeave={() => setHoveredPostId(null)}    // Reset hovered post ID when mouse leaves
          >
            <h2 className="text-xl font-semibold text-indigo-600">{post.title}</h2>
            <p className="mt-2 text-gray-700">{post.body}</p>

        
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchPosts;
