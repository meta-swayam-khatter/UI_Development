import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddToDo = ({ toDos, setToDos }) => {
  const navigate = useNavigate()
  const [newToDo, setNewToDo] = useState({
    id: toDos.length + 1,
    name: '',
    description: '',
    completed: false
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewToDo(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newToDo.name.trim()) return alert("Name is required!")
    setToDos([...toDos, newToDo])
    navigate('/')
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <form onSubmit={handleSubmit} className="w-[600px] border border-gray-300 rounded-2xl shadow-2xl p-8 bg-white space-y-6">
        <h2 className="text-3xl font-semibold text-center text-indigo-600">Add New Task</h2>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Task Name</label>
          <input type="text" name="name" value={newToDo.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Description</label>
          <textarea name="description" value={newToDo.description} onChange={handleChange} rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        </div>

        <div className="flex justify-end">
          <button type="submit" className="px-6 py-2 rounded-lg shadow-md text-white bg-indigo-500 hover:bg-indigo-600 transition">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddToDo
