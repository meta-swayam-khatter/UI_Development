import './App.css';
import { useState } from 'react';
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";

function App() {
  const initialPosts = [
    {
      id: 1,
      // avatar: "https://example.com/avatars/user1.jpg",
      title: "The Rise of JavaScript Frameworks",
      description: "Explore how JavaScript frameworks like React, Vue, and Angular have changed web development."
    },
    {
      id: 2,
      // avatar: "https://example.com/avatars/user2.jpg",
      title: "Understanding REST APIs",
      description: "A beginner-friendly guide to understanding how RESTful APIs work and how to integrate them."
    },
    {
      id: 3,
      // avatar: "https://example.com/avatars/user3.jpg",
      title: "Designing for Accessibility",
      description: "Learn the principles of accessible web design and how to implement them in your projects."
    },
    {
      id: 4,
      // avatar: "https://example.com/avatars/user4.jpg",
      title: "A Deep Dive into Node.js",
      description: "Understand the event-driven architecture of Node.js and how it handles asynchronous operations."
    }
  ];

  const [posts, setPosts] = useState(initialPosts.map(post => ({ ...post, liked: false })));

  const toggleLike = (id) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id ? { ...post, liked: !post.liked } : post
      )
    );
  };

  return (
    <div className="flex justify-center py-8">
      <div className="bg-white shadow-xl border border-gray-300 rounded-lg w-full max-w-xl max-h-[700px] overflow-auto">
        <h1 className="text-3xl font-bold text-center py-6 border-b border-gray-200">Blog Posts</h1>
        <div className="p-4">
          {posts.length > 0 ? (
            <ul className="flex flex-col gap-4">
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md transition"
                >
                  <img
                    src={post.avatar || "https://placehold.co/40"}
                    alt="Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{post.title}</div>
                    <div className="text-sm text-gray-600">
                      {post.description.substring(0, 60) + '...'}
                    </div>
                  </div>
                  <button
                    className={`text-blue-600 hover:text-blue-800 transition`}
                    onClick={() => toggleLike(post.id)}
                  >
                    {post.liked ? <FaThumbsUp size={18} /> : <FaRegThumbsUp size={18} />}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center text-lg text-gray-600">No blog posts available!!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;