import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import NewPhoto from '../pages/NewPhoto'
import { DeletePhoto } from '../services/ProfileServices'
import { AlbumPhotos, NewAlbum } from '../services/PostServices'
import EditOneAlbum from '../pages/EditOneAlbum'

const AlbumDetails = ({ user, authenticated }) => {
  const [album, setAlbum] = useState([])
  let { postid } = useParams()
  const [deletePhoto, setDeletePhoto] = useState(false)

  const photoDelete = async (photoId) => {
    const res = await DeletePhoto(photoId)
    setDeletePhoto(true)
  }

  const showPhotos = async () => {
    const data = await AlbumPhotos(postid)
    console.log(data)
    setAlbum(data)
  }
  useEffect(() => {
    showPhotos()
  }, [deletePhoto])

  const userAuthor = user.id === album.userId && authenticated
  const isVerified = user && authenticated

  return isVerified ? (
    <div>
      <NewPhoto album={album} user={user} showPhotos={showPhotos} />

      <h1>{album.name}</h1>
      <h2>{album.description}</h2>
      {album.photos?.map((photo) => (
        <div className="photo-card" key={photo.id}>
          <div>
            <img src={photo.photoUrl} />
          </div>
          <h3>{photo.name}</h3>
          <p>{photo.description}</p>
          {userAuthor ? (
            <div>
              <button onClick={() => photoDelete(photo.id)}>X</button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  ) : (
    // ) : userAuthor ? (<button onClick={() => photoDelete(photo.id)}>X</button>
    <div>
      <h2>You must be signed in to access the feed! Sign in or sign up here</h2>{' '}
      //add button to sign in or go to sign up
    </div>
  )
}

export default AlbumDetails
