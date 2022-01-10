import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/stocks">
        <div>Dashboard</div>
      </Link>
    </nav>
  )
}

export default Header