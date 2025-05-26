import { useState } from 'react';
import './App.css'

function App() {
  let time = new Date().toLocaleTimeString()

  const [displayTime, setTime] = useState(time)
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  return (
    <>
      <div className='flex justify-center h-screen font-bold text-8xl'>
        <div className='flex justify-center items-center h-[2em] w-[5em] self-center border-3 p-8 rounded-2xl shadow-2xl'>
          {displayTime}
        </div>
      </div>
    </>
  )
}

export default App
