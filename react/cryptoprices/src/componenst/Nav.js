import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/price">
                <div>CRYPTO PRICES</div>
            </Link>
            <Link to="/currencies">
                <div>CRYPTO CURRENCIES</div>
            </Link>

        </div>
    )
}

export default Nav;