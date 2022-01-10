import { Link } from 'react-router-dom';

const About = ({ stocks }) => {
    const stockElements = stocks.map((stock, index) => (
        <tr className="stock" key={index}>
            <td>
                <Link to={`stocks/${stock.symbol}`}>
                    {stock.name}
                </Link>
            </td>
            <td>${stock.lastPrice}</td>
            <td style={{color: `${stock.change >= 0 ? 'green' : 'red'}`}}>{stock.change}</td>
            <hr />
        </tr>


    ))

    return (
        <div>
            <h1>Available Stocks</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {stockElements}
                </tbody>
            </table>
        </div>
    )
}

export default About;