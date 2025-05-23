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
      <div className='flex justify-self-center h-screen font-bold text-4xl'>
        <div className='self-center'>
          {displayTime}
        </div>
      </div>
    </>
  )
}

export default App
