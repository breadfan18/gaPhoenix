const Receipt = ({ receipt }) => {

    
    
    return (
        <article className="receipt">
            <h3>{receipt.person}</h3>
            <h5>{receipt.order.main}</h5>
            <hr />
            <div className="orderDetails">
                <p>{receipt.order.protein}</p>
                <p>{receipt.order.rice}</p>
                <p>{receipt.order.sauce}</p>
                <p>{receipt.order.drink}</p>
            </div>
            <hr />
            <div className="cost">
                <p>${receipt.order.cost}</p>
                <form>
                    <input type="submit" value={receipt.paid}/>
                </form>
            </div>
            
        </article>
    )
}

export default Receipt;