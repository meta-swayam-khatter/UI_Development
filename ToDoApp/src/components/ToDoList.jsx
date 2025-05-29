import { NotebookPen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CircleCheckBig } from 'lucide-react';
import { Circle } from 'lucide-react';
import { Trash2 } from 'lucide-react';

const ToDoList = ({ toDos, setToDos }) => {
    const navigate = useNavigate();
    const handleSelect = (toDo) => {
        navigate(`/todo/${toDo.name}`);
    }
    const toggleComplete=(toDo)=>{
        console.log("toggled")
        const updatedToDos = toDos.map((task)=>{
            task.id === toDo.id ? {...task, completed: !task.completed} : task;
            console.log(task.id === toDo.id)
        })
        setToDos(updatedToDos);
    }

    return (
        <>
            <div className='body flex justify-center'>
                <div className='list w-150'>
                    {toDos.length > 0 ? (
                        <ul className="flex flex-col divide-y gap-4 divide-gray-100">
                            {toDos.map((toDo) => (
                                <div key={toDo.id} className={`flex items-center justify-between px-4 ${toDo.completed ? "bg-green-50 hover:bg-green-200" : "bg-indigo-50 hover:bg-indigo-200"}`}>
                                    <li
                                        onClick={() => handleSelect(toDo)}
                                        
                                        className={`flex items-center gap-3 p-4 w-full rounded-md cursor-pointer transition`}
                                    >
                                        <NotebookPen className="text-indigo-500" />
                                        <span className="text-md truncate w-full">
                                            {toDo.name.length > 40
                                                ? toDo.name.substring(0, 40) + '...'
                                                : toDo.name}
                                        </span>
                                    </li>
                                    <div className='px-2 cursor-pointer hover:scale-120' onClick={()=>{toggleComplete(toDo)}}>
                                        {toDo.completed ? <CircleCheckBig className='text-blue-500' /> : <Circle />}
                                    </div>
                                    <Trash2 className='text-red-500'/>
                                </div>
                            ))}
                        </ul>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ToDoList