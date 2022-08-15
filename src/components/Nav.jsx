import { NavLink, Link } from 'react-router-dom'

export const Nav = ({ authenticated, user, logOut }) => {
  let isAuthenticated
  if (user) {
    isAuthenticated = (
      <nav>
        <div className="nav-bar">
          <img src={user.profilePicture} />
          <h3>Welcome back, {user.firstName}</h3>

          <Link to="/feed">Feed</Link>
          <Link to="/post"> + </Link>
          <Link to="/profile">
            Profile
            {/* <img src={user.profilePicture} alt="" /> */}
          </Link>
          <Link to="/settings">Settings</Link>
          <Link onClick={logOut} to="/">
            Log Out
          </Link>
        </div>
      </nav>
    )
  }

  const notAuthenticated = (
    <nav>
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>

        <Link to="/login">Login</Link>
      </div>
    </nav>
  )

  return (
    <header>
      <Link to="/"></Link>
      {authenticated && user ? isAuthenticated : notAuthenticated}
    </header>
  )
}
