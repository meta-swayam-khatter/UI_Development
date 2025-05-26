import './App.css'
import { FaRegThumbsUp } from "react-icons/fa";

function App() {
  const posts = [
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

  return (
    <>
      <div className='flex flex-col justify-self-center min-w-[450px] m-2 max-h-[700px] overflow-auto border-2 border-black'>
        <div className='px-16 pt-6 text-2xl font-bold'>Blog Posts</div>
        <div className='p-8'>{posts.length > 0 ? (
          <ul className='flex flex-col gap-2'>
            {
              posts.map((post) => (
                <li key={post.id} className='border-2 boder-black h-[4em] flex'>
                  <div className='w-[20%] p-2 overflow-hidden'>{post.avatar ? post.avatar : <img className='object-cover rounded-full' src='https://placehold.co/40'></img>}</div>
                  <div className='w-[70%] flex flex-col p-1'>
                    <div className='font-bold text-sm'>{post.title}</div>
                    <div className='text-sm'>{post.description.substring(0, 30)+'...'}</div>
                  </div>
                  <div className='w-[10%] flex justify-center items-center'>
                  <FaRegThumbsUp />
                  </div>
                </li>
              ))
            }
          </ul>
        ) : (
          <div className='flex justify-self-center text-lg'>No blog posts available!!</div>
        )}</div>
      </div >
    </>
  )
}

export default App
