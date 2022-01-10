import { Link } from 'react-router-dom';

const About = ({stocks}) => {
    const stockElements = stocks.map((stock, index) => (
        <div className="stock" key={index}>
            <Link to={`stocks/${stock.symbol}`}>
                {stock.name}
            </Link>
        </div>
    ))

    return (
        <div>
            <h1>Available Stocks</h1>
            <div >{stockElements}</div>
        </div>
    )
}

export default About;