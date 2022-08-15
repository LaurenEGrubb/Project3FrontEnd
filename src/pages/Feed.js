import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetAlbums } from '../services/PostServices'

const Feed = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const showPosts = async () => {
      const data = await GetAlbums()
      setPosts(data)
    }
    showPosts()
  }, [])

  return user && authenticated ? (
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
  ) : (
    <div>
      <h2>You must be signed in to access the feed! Sign in or sign up here</h2>{' '}
      //add button to sign in or go to sign up
    </div>
  )
}

export default Feed
