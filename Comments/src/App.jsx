import { useState } from 'react';
import './App.css';
import { MessageSquareText, ChevronRight } from 'lucide-react';

function App() {
  const [selectedComment, setSelectedComment] = useState(null);
  const comments = [
    {
      id: 1,
      title: "The Rise of JavaScript Frameworks",
      description: "Explore how JavaScript frameworks like React, Vue, and Angular have changed web development."
    },
    {
      id: 2,
      title: "Understanding REST APIs",
      description: "A beginner-friendly guide to understanding how RESTful APIs work and how to integrate them."
    },
    {
      id: 3,
      title: "Designing for Accessibility",
      description: "Learn the principles of accessible web design and how to implement them in your projects."
    },
    {
      id: 4,
      title: "A Deep Dive into Node.js",
      description: "Understand the event-driven architecture of Node.js and how it handles asynchronous operations."
    }
  ];

  const handleSelect = (comment) => {
    setSelectedComment(comment);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-full max-w-2xl border rounded-lg shadow-md overflow-hidden">
        <div className="bg-indigo-600 text-white px-6 py-4 text-xl font-semibold">
          Comment Box
        </div>
        <div className="flex">
          <div className="w-1/2 border-r border-gray-200 h-[500px] overflow-auto bg-white">
            {comments.length > 0 ? (
              <ul className="flex flex-col divide-y divide-gray-100">
                {comments.map((comment) => (
                  <li
                    onClick={() => handleSelect(comment)}
                    key={comment.id}
                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-indigo-50 transition ${
                      selectedComment?.id === comment.id ? 'bg-indigo-100 font-semibold border-l-4 border-indigo-500' : ''
                    }`}
                  >
                    <MessageSquareText className="text-indigo-500" />
                    <span className="text-sm truncate w-full">
                      {comment.title.length > 30
                        ? comment.title.substring(0, 30) + '...'
                        : comment.title}
                    </span>
                    {selectedComment?.id === comment.id && (
                      <ChevronRight className="text-indigo-500" />
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center p-4 text-gray-500">No comments available!</div>
            )}
          </div>

          <div className="w-1/2 h-[500px] overflow-auto p-4 bg-gray-50">
            {selectedComment ? (
              <div className="space-y-4">
                <div className="text-lg font-bold border-b pb-2">
                  {selectedComment.title}
                </div>
                <div className="text-sm text-gray-700">
                  {selectedComment.description}
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 pt-20">
                Select a comment to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;