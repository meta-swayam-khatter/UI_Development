import { NotebookPen, CircleCheckBig, Circle, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ToDoList = ({ toDos, setToDos, filter }) => {
  const navigate = useNavigate()

  const handleSelect = (toDo) => {
    navigate(`/todo/${toDo.name}`)
  }

  const toggleComplete = (toDo) => {
    const updatedToDos = toDos.map((task) =>
      task.id === toDo.id ? { ...task, completed: !task.completed } : task
    )
    setToDos(updatedToDos)
  }

  const handleDelete = (toDoId) => {
    const updatedToDos = toDos.filter((todo) => todo.id !== toDoId)
    setToDos(updatedToDos)
  }

  const filteredToDos = toDos.filter((todo) => {
    if (filter === 'completed') return todo.completed
    if (filter === 'active') return !todo.completed
    return true
  })

  return (
    <div className="body w-full max-w-2xl">
      {filteredToDos.length > 0 ? (
        <ul className="flex flex-col divide-y gap-4 divide-gray-100">
          {filteredToDos.map((toDo) => (
            <div
              key={toDo.id}
              className={`flex items-center justify-between px-4 py-2 rounded-xl shadow-sm ${toDo.completed ? "bg-green-200 hover:bg-green-300" : "bg-indigo-200 hover:bg-indigo-300"} transition`}
            >
              <li
                onClick={() => handleSelect(toDo)}
                className="flex items-center gap-3 p-2 w-full cursor-pointer"
              >
                <NotebookPen className="text-indigo-500" />
                <span className="truncate text-md font-medium text-gray-700 w-full">
                  {toDo.name.length > 40
                    ? toDo.name.substring(0, 40) + '...'
                    : toDo.name}
                </span>
              </li>
              <div className="flex gap-2 items-center">
                <div
                  className="cursor-pointer hover:scale-110"
                  onClick={() => toggleComplete(toDo)}
                >
                  {toDo.completed ? (
                    <CircleCheckBig className="text-green-600" />
                  ) : (
                    <Circle className="text-gray-500" />
                  )}
                </div>
                <div
                  className="cursor-pointer hover:scale-110"
                  onClick={() => handleDelete(toDo.id)}
                >
                  <Trash2 className="text-red-500" />
                </div>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500 text-center p-10">No todos found for this filter.</div>
      )}
    </div>
  )
}

export default ToDoList
