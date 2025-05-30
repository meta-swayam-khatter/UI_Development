import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import ToDoList from './ToDoList'
import { useState } from 'react'

const Home = ({ toDos, setToDos }) => {
  const [filter, setFilter] = useState("all")

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="header flex justify-between items-center p-4 border-b-2 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-indigo-700">My ToDo List</h1>
        <Link
          to="/add"
          className="bg-indigo-500 rounded-full p-2 text-white hover:scale-110 hover:bg-indigo-600 transition"
        >
          <Plus />
        </Link>
      </div>

      <div className="flex justify-center gap-4 py-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full border ${filter === "all" ? "bg-indigo-500 text-white" : "bg-white hover:bg-indigo-100"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`px-4 py-2 rounded-full border ${filter === "active" ? "bg-indigo-500 text-white" : "bg-white hover:bg-indigo-100"}`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-4 py-2 rounded-full border ${filter === "completed" ? "bg-indigo-500 text-white" : "bg-white hover:bg-indigo-100"}`}
        >
          Completed
        </button>
      </div>

      <div className="flex justify-center p-4">
        <ToDoList toDos={toDos} setToDos={setToDos} filter={filter} />
      </div>
    </div>
  )
}

export default Home
