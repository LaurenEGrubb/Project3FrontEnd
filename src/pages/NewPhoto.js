import { PostPhoto } from '../services/PostServices'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { AlbumPhotos } from '../services/PostServices'

const NewPhoto = ({ album, user, showPhotos }) => {
  let navigate = useNavigate()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  // const [photo, setPhoto] = useState([])
  const [newPhoto, setNewPhoto] = useState(false)

  const toggleShowForm = () => {
    setNewPhoto(!newPhoto)
  }

  // const handleChange = (e) => {
  //   setAddPhoto({ ...addPhoto, [e.target.name]: e.target.value })
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('photoUrl', photoUrl)
    formData.append('description', description)
    formData.append('name', name)
    let res = await PostPhoto(formData, album.id)
    console.log(res)
    setTimeout(() => showPhotos(), 1000)
  }
  return (
    <div>
      {!newPhoto && (
        <button className="addphotbutton"onClick={toggleShowForm}>Add Photo to Album</button>
      )}
      {newPhoto && (
        <form className="col" onSubmit={handleSubmit}>
          <div className="form-wrap">
            <label htmlFor="name">Picture</label>
            <input
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              value={name}
              required
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="description">Caption </label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              type="text"
              value={description}
              required
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="photoUrl">Image</label>
            <input
              onChange={(e) => setPhotoUrl(e.target.files[0])}
              name="photoUrl"
              type="file"
              required
            />
          </div>
          <button>Post</button>
        </form>
      )}
    </div>
  )
}

export default NewPhoto
