import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddButton = ({toDos, setToDos}) => {
  const navigate = useNavigate();
  const [newToDo, setNewToDo] = useState({
    id: toDos.length+1,
    name: '',
    description: '',
    completed: false
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewToDo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setToDos([...toDos, newToDo]);
    navigate('/');
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="w-[600px] border-2 rounded-2xl shadow-2xl p-6 bg-white space-y-1">
          <label className="block">
            Name: <input type="text" name="name" value={newToDo.name} onChange={handleChange} className="w-full p-2 border rounded" />
          </label>

          <label className="block">
            Description: <textarea name="description" value={newToDo.description} onChange={handleChange} className="w-full p-2 border rounded" />
          </label>


          <div className="flex justify-between mt-4">
            <button type="submit" className={`px-4 py-2 rounded-md shadow text-white bg-blue-500 hover:bg-blue-600`} >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddButton