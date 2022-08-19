import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { GetAlbums } from '../services/PostServices'
import { AlbumPhotos } from '../services/PostServices'
import AlbumDetails from '../components/AlbumDetails'

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

  // const showAlbums = (post) => {
  //   let res = AlbumPhotos(post.id)
  //   navigate(`${post.id}`)
  // }

  return user && authenticated ? (
    <div>
      {/* <Link to="/profile"> */}
      {/* </Link> */}
      {posts?.map((post) => (
        <div className="album-card" key={post.id}>
          <h1>@{post.username}</h1>
          <h3>{post.name}</h3>
          <p>{post.description}</p>
          <div>
            <Link to={`/feed/${post.id}`}>
              <img class="photoUrl" src={post.photoUrl} />
            </Link>
          </div>
        </div>
      ))}
      {/* <AlbumDetails album={posts} /> */}
    </div>
  ) : (
    <div>
      <h2>You must be signed in to access the feed! Sign in or sign up here</h2>{' '}
      //add button to sign in or go to sign up
    </div>
  )
}

export default Feed
