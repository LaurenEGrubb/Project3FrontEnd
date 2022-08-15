import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { AlbumPhotos } from '../services/PostServices'

const AlbumDetails = ({ user, authenticated }) => {
  const [album, setAlbum] = useState([])
  let { postid } = useParams()
  useEffect(() => {
    const showPhotos = async () => {
      const data = await AlbumPhotos(postid)
      console.log(data)
      setAlbum(data)
    }
    showPhotos()
  }, [])

  return user && authenticated ? (
    <div>
      {album.photos?.map((photo) => (
        <div className="photo-card" key={photo.id}>
          <h3>{photo.name}</h3>
          <p>{photo.description}</p>
          <div>
            <img src={photo.photoUrl} />
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>
      <h2>You must be signed in to access the feed! Sign in or sign up here</h2>{' '}
      //add button to sign in or go to sign up
    </div>
  )
}

export default AlbumDetails