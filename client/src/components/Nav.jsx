import { NavLink, Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/register">Register</Link>
      </div>
    </nav>
  )
}
