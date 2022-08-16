import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { GetAlbumsByUser, DeleteAlbum } from '../services/ProfileServices'
import { useParams } from 'react-router-dom'
import { EditAlbum } from '../services/PostServices'
import EditOneAlbum from './EditOneAlbum'

const Profile = ({ user }) => {
  let navigate = useNavigate()
  const [editAlbum, setEditAlbum] = useState(false)
  const [posts, setPosts] = useState([])
  const [deletePost, setDeletePost] = useState(false)
  const deleteAlbum = async (postId) => {
    const res = await DeleteAlbum(postId)
    setDeletePost(true)
  }

  const toggleAlbum = () => {
    setEditAlbum(!editAlbum)
  }

  useEffect(() => {
    const showPosts = async () => {
      const data = await GetAlbumsByUser(user.id)

      setPosts(data)
    }
    showPosts()
  }, [deletePost]) //posts in is an infinite loop. Does what I want but puts me in a loop. Why?

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
              <div></div>
              {/* {!editAlbum && <button onClick={toggleAlbum}>Edit</button>}
              {editAlbum && (
                <EditOneAlbum posts={posts} toggleAlbum={toggleAlbum} />
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile
