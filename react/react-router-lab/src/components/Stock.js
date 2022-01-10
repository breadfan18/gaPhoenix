const Stock = (props) => {
    const thisStock = props.stocks.find(stock => stock.symbol === props.match.params.id)
    console.log(thisStock);
    return (
        <div className="eachStock">
            <h4>Name: <span className="stockName" style={{color: 'green'}}>{thisStock.name}</span></h4>
            <h4>Price: <span className="stockPrice" style={{color: 'red'}}>{thisStock.lastPrice}</span></h4>
        </div>
    )
}

export default Stock;