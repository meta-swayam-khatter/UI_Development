import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import ToDoList from './ToDoList';

const Home = ({ toDos, setToDos }) => {

    return (
        <>
            <div>
                <div className='header flex justify-between items-center p-4 border-b-2'>
                    <h1>ToDoList</h1>
                    <Link to={{ pathname: "/add", state: { toDos: toDos, setToDos: setToDos } }} className='bg-blue-400 rounded-full p-2 text-white transition delay-150 duration-300 ease-in-out hover:scale-110 hover:bg-indigo-500'>
                        <Plus />
                    </Link>
                </div>
                <div className='flex justify-center p-2'>
                    <ToDoList toDos={toDos} setToDos={setToDos} />
                </div>
            </div>
        </>
    )
}

export default Home