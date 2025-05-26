import { useState } from 'react';
import './App.css'
import { MessageSquareText } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

function App() {
  const [selectedComment, setSelectedComment] = useState(null);
  const comments = [
    {
      "id": 1,
      // "avatar": "https://example.com/avatars/user1.jpg",
      "title": "The Rise of JavaScript Frameworks",
      "description": "Explore how JavaScript frameworks like React, Vue, and Angular have changed web development."
    },
    {
      "id": 2,
      // "avatar": "https://example.com/avatars/user2.jpg",
      "title": "Understanding REST APIs",
      "description": "A beginner-friendly guide to understanding how RESTful APIs work and how to integrate them."
    },
    {
      "id": 3,
      // "avatar": "https://example.com/avatars/user3.jpg",
      "title": "Designing for Accessibility",
      "description": "Learn the principles of accessible web design and how to implement them in your projects."
    },
    {
      "id": 4,
      // "avatar": "https://example.com/avatars/user4.jpg",
      "title": "A Deep Dive into Node.js",
      "description": "Understand the event-driven architecture of Node.js and how it handles asynchronous operations."
    }
  ];

  const handleSelect = (comment) => {
    setSelectedComment(comment);
  }

  return (
    <>
      <div className='flex flex-col justify-self-center w-[450px] border-2 m-2 max-h-[700px]'>
        <div className='w-full border-b-2 p-2 text-2xl font-bold'>Comment Box</div>
        <div className='flex w-full'>
          <div className='w-[50%] border-1 border-indigo-300 p-2'>{comments.length > 0 ? (
            <ul className='flex flex-col gap-2'>
              {
                comments.map((comment) => (
                  <li onClick={() => handleSelect(comment)} key={comment.id} className='border-2 boder-black h-[4em] flex hover:cursor-pointer'>
                    <div className='flex justify-center items-center p-2'>
                      <MessageSquareText />
                    </div>
                    <div className='flex flex-col p-1'>
                      <div className='font-bold text-sm'>{comment.title.substring(0,25)+'...'}</div>
                    </div>
                    {(selectedComment?.id == comment.id) && (
                      <div className='flex justify-center items-center'>
                        <ChevronRight />
                      </div>
                    )}
                  </li>
                ))
              }
            </ul>
          ) : (
            <div className='flex justify-self-center text-lg'>No comments available!!</div>
          )}
          </div>
          <div className='w-[50%] border-1 border-indigo-900 p-2'>
            {selectedComment && (
              <div className='overflow-auto'>
                <div className='font-bold border-b-2'>{selectedComment.title}</div>
                <div className='p-2'>{selectedComment.description}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
