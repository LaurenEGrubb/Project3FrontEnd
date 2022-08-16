import { PostPhoto } from '../services/PostServices'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { AlbumPhotos } from '../services/PostServices'
const NewPhoto = ({ album, user, showPhotos }) => {
  let navigate = useNavigate()
  const [addPhoto, setAddPhoto] = useState({
    name: '',
    description: '',
    photoUrl: ''
  })
  const [photo, setPhoto] = useState([])

  const handleChange = (e) => {
    setAddPhoto({ ...addPhoto, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await PostPhoto(
      {
        name: addPhoto.name,
        description: addPhoto.description,
        photoUrl: addPhoto.photoUrl
      },
      album.id
    )
    console.log(res)
    setAddPhoto({
      name: '',
      description: '',
      photoUrl: ''
    })
    showPhotos()
  }
  return (
    <div>
      <form className="col" onSubmit={handleSubmit}>
        <div className="form-wrap">
          <label htmlFor="name">Picture</label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            value={addPhoto.name}
            required
          />
        </div>
        <div className="form-wrap">
          <label htmlFor="description">Caption</label>
          <input
            onChange={handleChange}
            name="description"
            type="text"
            value={addPhoto.description}
            required
          />
        </div>
        <div className="form-wrap">
          <label htmlFor="photoUrl">Image</label>
          <input
            onChange={handleChange}
            name="photoUrl"
            type="text"
            value={addPhoto.photoUrl}
            required
          />
        </div>
        <button>Post</button>
      </form>
    </div>
  )
}

export default NewPhoto
