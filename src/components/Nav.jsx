import { NavLink, Link } from 'react-router-dom'

export const Nav = ({ authenticated, user, logOut }) => {
  let isAuthenticated
  if (user) {
    isAuthenticated = (
      <nav>
        <div className="navbar">
          <div class="greeting-container">
            <h3>Welcome back, {user.firstName}</h3>
            <img src={user.profilePicture} />
            <div class="dropdowncontent">
              <Link to="/feed" class="links">
                Feed
              </Link>
              <Link to="/post" class="links">
                {' '}
                +{' '}
              </Link>
              <Link to="/profile" class="links">
                Profile
                <img src={user.profilePicture} alt="" />
              </Link>
              <Link to="/settings" class="links">
                Settings
              </Link>
              <Link onClick={logOut} to="/" class="links">
                Log Out
              </Link>
            </div>
          </div>
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
