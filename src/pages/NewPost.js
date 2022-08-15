import { useState } from 'react'
import { NewAlbum, GetAlbums } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'

const NewPost = ({ user }) => {
  let navigate = useNavigate()
  const [addPost, setAddPost] = useState({
    name: '',
    description: '',
    photoUrl: ''
  })

  // const [newPost, setNewPost] = useState(defaultPost)

  const handleChange = (e) => {
    setAddPost({ ...addPost, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await NewAlbum(
      {
        name: addPost.name,
        description: addPost.description,
        photoUrl: addPost.photoUrl
      },
      user.id
    )
    // GetAlbums()
    setAddPost({
      name: '',
      description: '',
      photoUrl: ''
    })
    navigate('/feed')
  }

  return (
    <div>
      <form className="col" onSubmit={handleSubmit}>
        <div className="form-wrap">
          <label htmlFor="name">Album Name</label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            value={addPost.name}
            required
          />
        </div>
        <div className="form-wrap">
          <label htmlFor="description">Caption</label>
          <input
            onChange={handleChange}
            name="description"
            type="text"
            value={addPost.description}
            required
          />
        </div>
        <div className="form-wrap">
          <label htmlFor="photoUrl">Image</label>
          <input
            onChange={handleChange}
            name="photoUrl"
            type="text"
            value={addPost.photoUrl}
            required
          />
        </div>
        <button>Post</button>
      </form>
    </div>
  )
}
export default NewPost