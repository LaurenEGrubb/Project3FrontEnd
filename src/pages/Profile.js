import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { GetAlbumsByUser, DeleteAlbum } from '../services/ProfileServices'
import { useParams } from 'react-router-dom'

const Profile = ({ user }) => {
  // let { userId } = useParams()

  // console.log(user.id)
  let navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const deleteAlbum = async (postId) => {
    const res = await DeleteAlbum(postId)
  }
  useEffect(() => {
    const showPosts = async () => {
      const data = await GetAlbumsByUser(user.id)

      setPosts(data)
    }
    showPosts()
  }, []) //posts in is an infinite loop. Does what I want but puts me in a loop. Why?

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
              <button onClick={() => deleteAlbum(post.id)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile
