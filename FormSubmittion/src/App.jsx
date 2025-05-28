import { Routes, Route } from 'react-router-dom'
import Form from './Form'
import Profile from './Profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App