const Receipt = ({ receipt }) => {
    
    return (
        <article className="receipt">
            <h3>{receipt.person}</h3>
            <h5>{receipt.order.main}</h5>
            <hr />
            <div className="orderDetails">
                <p>Protein: <span class="orderItems">{receipt.order.protein}</span></p>
                <p>Rice: <span class="orderItems">{receipt.order.rice}</span></p>
                <p>Sauce: <span class="orderItems">{receipt.order.sauce}</span></p>
                <p>Drink: <span class="orderItems">{receipt.order.drink}</span></p>
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