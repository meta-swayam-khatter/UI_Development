import { useLocation, useNavigate } from 'react-router-dom'

function Profile() {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!state) {
    return (
      <div className="text-center mt-10">
        <p>No user data. Please submit the form first.</p>
        <button onClick={() => navigate('/')} className="mt-4 px-4 py-2 bg-blue-400 text-white rounded">Go back</button>
      </div>
    )
  }

  const { name, age, email, phone, gender, address, avatar } = state

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="border p-6 rounded-xl shadow-xl bg-white space-y-4 w-[400px]">
        <img src={avatar} alt="Avatar" className="w-32 h-32 mx-auto rounded-full border" />
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Address:</strong> {address}</p>
        <div className="text-center">
          <button onClick={() => navigate('/')} className="bg-blue-400 text-white px-4 py-2 mt-4 rounded">Go back</button>
        </div>
      </div>
    </div>
  )
}


export default Profile
