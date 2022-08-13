import { NavLink, Link } from 'react-router-dom'

export const Nav = ({ authenticated, user, logOut }) => {
  let isAuthenticated
  if (user) {
    isAuthenticated = (
      <nav>
        <h3>Welcome {user.username}</h3>
        <Link to="/profile">Profile</Link>
        <Link to="/feed">Feed</Link>
        <Link to="/myalbums">Albums</Link>
      </nav>
    )
  }

  const notAuthenticated = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/"></Link>
      {authenticated && user ? isAuthenticated : notAuthenticated}
    </header>
  )
}
