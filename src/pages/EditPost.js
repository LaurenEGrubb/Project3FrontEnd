import { useState, useEffect } from 'react'
import { GetAlbums } from '../services/PostServices'
import { useParams } from 'react-router-dom'
import { EditAlbum } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'

const EditPost = () => {
  let navigate = useNavigate()
  let { postid } = useParams()
  const [post, setPost] = useState({})

  const [formValue, setFormValue] = useState('')
  const handleChange = (error) => {
    setFormValue({ ...formValue, [error.target.name]: error.target.value })
  }

  useEffect(() => {
    const showPosts = async () => {
      const data = await GetAlbums()
      console.log(postid)
      const singlePost = data.filter((post) => post.id == postid)
      setPost(singlePost[0])
      setFormValue({
        name: post?.name,
        description: post?.description,
        photoUrl: post?.photoUrl
      })
    }
    showPosts()
  }, [])

  const handleSubmit = async (error) => {
    error.preventDefault()
    const payload = await EditAlbum(formValue, postid)

    navigate('/profile')
  }

  return (
    <div>
      <form className="col" onSubmit={handleSubmit}>
        <div className="form-wrap">
          <label htmlFor="name">Edit Album Name</label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            value={formValue.name}
            required
          />
        </div>
        <div className="form-wrap">
          <label htmlFor="description">Edit Caption</label>
          <input
            onChange={handleChange}
            name="description"
            type="text"
            value={formValue.description}
            required
          />
        </div>
        <div className="form-wrap">
          <label htmlFor="photoUrl">Image</label>
          <input
            onChange={handleChange}
            name="photoUrl"
            type="text"
            value={formValue.photoUrl}
            required
          />
        </div>
        <button>Confirm Changes</button>
      </form>
    </div>
  )
}

export default EditPost
