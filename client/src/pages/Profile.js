import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetAlbumsByUser } from '../services/ProfileServices'

const Profile = () => {
  let navigate = useNavigate()
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const showPosts = async () => {
      const data = await GetAlbumsByUser()
      setPosts(data)
    }
    showPosts()
  }, [])

  return (
    <div>
      <div>
        {posts?.map((post) => (
          <div className="album-card" key={post.id}>
            <h3>{post.name}</h3>
            <p>{post.description}</p>
            <div>
              <img src={post.photoUrl} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile
