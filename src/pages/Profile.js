import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { GetAlbumsByUser, DeleteAlbum } from '../services/ProfileServices'
import { useParams } from 'react-router-dom'
import { EditAlbum } from '../services/PostServices'
import EditPost from './EditPost'

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
  }, [deletePost, editAlbum]) //posts in is an infinite loop. Does what I want but puts me in a loop. Why?

  return (
    <div>
      <div>
        {posts?.map((post) => (
          <div className="album-card" key={post.id}>
            <h3>{post.name}</h3>
            <p>{post.description}</p>

            <Link to={`/feed/${post.id}`}>
              <img class="photoUrl" src={post.photoUrl} />
            </Link>
            <Link className="editbutton"to={`/edit/${post.id}`}>Edit Post</Link>
            {/* <EditPost posts={posts} /> */}

            <div>
              <button onClick={() => deleteAlbum(post.id)} className="delete">X</button>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile
