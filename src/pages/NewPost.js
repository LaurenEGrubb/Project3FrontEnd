import { useState, useEffect } from 'react'
import { NewAlbum, GetAlbums } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'
import { GetAlbumsByUser } from '../services/ProfileServices'

const NewPost = ({ user }) => {
  let navigate = useNavigate()
  const [addPost, setAddPost] = useState({
    name: '',
    description: '',
    photoUrl: ''
  })
  const [newAlbum, setNewAlbum] = useState(false)

  const toggleShowForm = () => {
    setNewAlbum(!newAlbum)
  }

  const [posts, setPosts] = useState([])
  useEffect(() => {
    const showPosts = async () => {
      const data = await GetAlbumsByUser(user.id)

      setPosts(data)
    }
    showPosts()
  }, [])
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
    console.log(res)
    setAddPost({
      name: '',
      description: '',
      photoUrl: ''
    })
    navigate(`/feed/${res.id}`)
  }

  return (
    <div>
      <div className='pagewrap'>
      {!newAlbum && <button onClick={toggleShowForm}>Make New Album</button>}
      {newAlbum && (
        <div className="postpage">
          <form className="postform" onSubmit={handleSubmit}>
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
      )}
      </div>
    </div>
  )
}

export default NewPost
