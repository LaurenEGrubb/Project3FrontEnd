import { NavLink, Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Picture Perfect</Link>
      </div>
    </nav>
  )
}
