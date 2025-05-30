import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AddToDo from './components/AddToDo'
import { useState } from 'react'
import ToDo from './components/ToDo'

function App() {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      name: "The Rise of JavaScript Frameworks",
      description: "Explore how JavaScript frameworks like React, Vue, and Angular have changed web development.",
      completed: true
    },
    {
      id: 2,
      name: "Understanding REST APIs",
      description: "A beginner-friendly guide to understanding how RESTful APIs work and how to integrate them.",
      completed: false
    },
    {
      id: 3,
      name: "Designing for Accessibility",
      description: "Learn the principles of accessible web design and how to implement them in your projects.",
      completed: true
    },
    {
      id: 4,
      name: "A Deep Dive into Node.js",
      description: "Understand the event-driven architecture of Node.js and how it handles asynchronous operations.",
      completed: false
    }
  ]);

  return (
    <Routes>
      <Route path="/" element={<Home toDos={toDos} setToDos={setToDos} />} />
      <Route path="/add" element={<AddToDo toDos={toDos} setToDos={setToDos} />} />
      <Route path="/todo/:title" element={<ToDo toDos={toDos} />} />
    </Routes>
  )
}

export default App
