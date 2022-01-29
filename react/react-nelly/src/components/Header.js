import { Link } from "react-router-dom"

const Header = (props) => (
  <nav className="nav">
    <Link to="/">
      <div>Houses App</div>
    </Link>
  </nav>
)

export default Header