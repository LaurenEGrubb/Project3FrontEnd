import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { GetAlbumsByUser } from '../services/ProfileServices'
import { useParams } from 'react-router-dom'

const Profile = ({ user }) => {
  // let { userId } = useParams()

  // console.log(user.id)
  let navigate = useNavigate()
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const showPosts = async () => {
      const data = await GetAlbumsByUser(user.id)

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
              <Link to={`/feed/${post.id}`}>
                <img src={post.photoUrl} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile
