import Receipt from "./Receipt";

const Receipts = ({ receipts, filteredReceipts, showFilter }) => {
    const receiptToDisplay = showFilter ? filteredReceipts : receipts
    
    const receiptElems = receiptToDisplay.map((r, i) => (
        <Receipt receipt={r} key={i+1}/> 
    ))

    return (
        <div className="receiptsContainer">
            {receiptElems}
        </div>
    )
}

export default Receipts;