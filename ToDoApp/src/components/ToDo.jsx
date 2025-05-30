import { useParams, Link } from "react-router-dom"

const ToDo = ({ toDos }) => {
  const { title } = useParams()
  const toDo = toDos.find(t => t.name === title)

  if (!toDo) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center p-4 bg-gradient-to-br from-red-100 to-pink-200">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">Todo not found</h2>
        <Link to="/" className="text-blue-500 underline">Back to List</Link>
      </div>
    )
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-sky-100 via-indigo-100 to-violet-100">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-[500px] space-y-6 border border-gray-200">
        <h2 className="text-3xl font-bold text-indigo-700">{toDo.name}</h2>
        <p className="text-gray-700 leading-relaxed">{toDo.description}</p>
        <p className="text-sm font-medium text-gray-500">
          Status: <span className={toDo.completed ? "text-green-600" : "text-red-600"}>
            {toDo.completed ? "Completed" : "Pending"}
          </span>
        </p>
        <Link to="/" className="text-blue-600 underline text-sm block text-right">← Back to Todos</Link>
      </div>
    </div>
  )
}

export default ToDo
