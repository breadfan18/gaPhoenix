import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className="nav">
            <Link>
                <div>CRYPTO PRICES</div>
            </Link>
            <Link>
                <div>CRYPTO CURRENCIES</div>
            </Link>
            <Link>
                <div>MAIN</div>
            </Link>

        </div>
    )
}