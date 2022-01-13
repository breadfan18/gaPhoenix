import Receipt from "./Receipt";

const Receipts = ({ receipts, filteredReceipts, showFilter, handleClick }) => {
    const receiptToDisplay = showFilter ? filteredReceipts : receipts
    const receiptElems = receiptToDisplay.map((r, i) => (
        <Receipt 
            receipt={r} 
            key={i+1} 
            handleClick={handleClick} 
        /> 
    ))

    return (
        <div className="receiptsContainer">
            {receiptElems}
        </div>
    )
}

export default Receipts;