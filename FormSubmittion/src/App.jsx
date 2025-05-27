import { useState } from 'react'
import './App.css'

function App() {
  const [avatarURL, setAvatarURL] = useState("https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg");

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className="w-[600px] h-[600px] border-2 rounded-2xl shadow-2xl p-4">
          <img
            src={avatarURL}
            alt="Avatar"
            className="h-70 w-70 flex justify-self-center rounded-full border-1" />
          <label>
            Enter your name: <input name="name" type='text' />
          </label>
          <hr />
          <label>
            Enter your age: <input name="age" type='number' />
          </label>
          <hr />
          <label>
            Enter your email: <input name="email" type='email' />
          </label>
          <hr />
          <label>
            Enter your phone number: <input name="phone" type='number' />
          </label>
          <hr />
          <label>
            Enter your address: <textarea name="address"></textarea>
          </label>
          <hr />
          <p>
            Gender:
            <label>
              <input type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" />
              Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" />
              Other
            </label>
          </p>
          <div className='flex justify-self-center'>
          {/* on clear empty all the fields */}
          <button className='bg-red-400 text-white border-2 border-black px-2 py-1 m-2 rounded-md'>Clear</button>
          {/* on submit show all the details of the user */}
          <button className='bg-blue-400 text-white border-2 border-black px-2 py-1 m-2 rounded-md'>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
