import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        phone: '',
        gender: '',
        address: '',
    })
    const [avatarFile, setAvatarFile] = useState(null)
    const [avatarPreview, setAvatarPreview] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setAvatarFile(file)
            setAvatarPreview(URL.createObjectURL(file))
        }
    }

    const handleClear = () => {
        setFormData({
            name: '',
            age: '',
            email: '',
            phone: '',
            gender: '',
            address: '',
        })
        setAvatarFile(null)
        setAvatarPreview(null)
    }

    const isFormValid = () => {
        return (
            avatarFile &&
            formData.name &&
            formData.age &&
            formData.email &&
            formData.phone &&
            formData.gender &&
            formData.address
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isFormValid()) return
        const reader = new FileReader()
        reader.onloadend = () => {
            navigate('/profile', {
                state: { ...formData, avatar: reader.result },
            })
        }
        reader.readAsDataURL(avatarFile)
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-[600px] border-2 rounded-2xl shadow-2xl p-6 bg-white space-y-1">
                <div className="flex justify-center">
                    <img
                        src={avatarPreview || 'https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg'}
                        alt="Avatar" className="w-32 h-32 rounded-full border object-cover" />
                </div>

                <label className="block">
                    Upload Avatar: <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded mt-1" />
                </label>

                <label className="block">
                    Name: <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
                </label>

                <label className="block">
                    Age: <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full p-2 border rounded" />
                </label>

                <label className="block">
                    Email: <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
                </label>

                <label className="block">
                    Phone: <input type="number" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
                </label>

                <label className="block">
                    Address: <textarea name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
                </label>

                <div>
                    Gender:
                    <label className="ml-2">
                        <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} /> Male
                    </label>
                    <label className="ml-2">
                        <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female
                    </label>
                    <label className="ml-2">
                        <input type="radio" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} /> Other
                    </label>
                </div>


                <div className="flex justify-between mt-4">
                    <button type="button" onClick={handleClear} className="bg-red-400 text-white px-4 py-2 rounded-md shadow hover:bg-red-500" >
                        Clear
                    </button>
                    <button type="submit" disabled={!isFormValid()} className={`px-4 py-2 rounded-md shadow text-white ${isFormValid() ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`} >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}


export default Form
